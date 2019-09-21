import Post from '../models/post.model'
import errorHandler from './../helpers/dbErrorHandler'

import { gridFSBucket } from '../../config/gridFSBucket'
import { ObjectID } from 'mongodb'
import { Readable } from 'stream'
//import fs from 'fs'
//import formidable from 'formidable'

const create = (req, res) => {
    console.log('create')
    let imageName = req.body.imageName
    console.log('imageName: ', imageName)
    const readableTrackStream = new Readable()
    readableTrackStream.push(req.file.buffer)
    readableTrackStream.push(null)
    let uploadStream = gridFSBucket.openUploadStream(imageName)
    let id = uploadStream.id
    console.log('uploadStream id: ', uploadStream.id)
    readableTrackStream.pipe(uploadStream)

    let post = new Post({
        text: req.body.text,
        photoId: id,
    })
    post.postedBy = req.profile

    uploadStream.on('error', () => {
        return res.status(500).json({ message: 'Error uploading file' })
    })
    uploadStream.on('finish', () => {
        console.log('uploadStream.on(finish)')
        post.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err),
                })
            }
            console.log('result: ', result)
            return res.json(result)
        })
    })
}

// const savePostImage = (req, res) => {
//     let imageName = req.body.imageName
//     console.log('imageName: ', imageName)
//     // Convert buffer to Readable Stream
//     const readableTrackStream = new Readable()
//     readableTrackStream.push(req.file.buffer)
//     readableTrackStream.push(null)
//     let uploadStream = gridFSBucket.openUploadStream(imageName)
//     let id = uploadStream.id
//     readableTrackStream.pipe(uploadStream)
//     console.log('uploadStream: ', uploadStream)
//     uploadStream.on('error', () => {
//         return res.status(500).json({ message: 'Error uploading file' })
//     })
//     uploadStream.on('finish', () => {
//         return res.status(201).json({
//             id,
//             message:
//                 'File uploaded successfully, stored under Mongo ObjectID: ' +
//                 id,
//         })
//     })
// }

const getPostImage = (req, res) => {
    //console.log(res.json({ file: req.file }))
    //console.log('req: ', req)
    let post = req.post
    // console.log('post.photoId: ', post.photoId)

    let photoId
    try {
        photoId = new ObjectID(post.photoId)
        //console.log('photoId: ', photoId)
    } catch (err) {
        return res.status(400).json({
            message:
                'Invalid postID in URL parameter. Must be a single String of 12 bytes or a string of 24 hex characters',
        })
    }
    res.set('Content-Type', 'image/jpg')
    res.set('Accept-Ranges', 'bytes')
    let downloadStream = gridFSBucket.openDownloadStream(photoId)
    //console.log('downloadStream: ', downloadStream)
    downloadStream.on('data', chunk => {
        res.write(chunk)
    })

    downloadStream.on('error', () => {
        res.sendStatus(404)
    })

    downloadStream.on('end', () => {
        res.end()
    })
}

const listNewsFeed = (req, res) => {
    let following = req.profile.following
    following.push(req.profile._id)
    Post.find({ postedBy: { $in: req.profile.following } })
        .populate('comments.postedBy', '_id name image_data')
        .populate('postedBy', '_id name image_data')
        .sort('-created')
        .exec((err, posts) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err),
                })
            }
            res.json(posts)
        })
}

const postByID = (req, res, next, id) => {
    Post.findById(id)
        .populate('postedBy', '_id name image_data')
        .exec((err, post) => {
            if (err || !post)
                return res.status('400').json({
                    error: 'Post not found',
                })
            req.post = post
            next()
        })
}

const listByUser = (req, res) => {
    Post.find({ postedBy: req.profile._id })
        .populate('comments.postedBy', '_id name image_data')
        .populate('postedBy', '_id name image_data')
        .sort('-created')
        .exec((err, posts) => {
            if (err) {
                return res.status('400').json({
                    error: errorHandler.getErrorMessage(err),
                })
            }
            res.json(posts)
        })
}

const like = (req, res) => {
    Post.findByIdAndUpdate(
        req.body.postId,
        { $push: { likes: req.body.userId } },
        { new: true }
    ).exec((err, result) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err),
            })
        }
        res.json(result)
    })
}

const unlike = (req, res) => {
    Post.findByIdAndUpdate(
        req.body.postId,
        { $pull: { likes: req.body.userId } },
        { new: true }
    ).exec((err, result) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err),
            })
        }
        res.json(result)
    })
}

const comment = (req, res) => {
    let comment = req.body.comment
    comment.postedBy = req.body.userId
    Post.findByIdAndUpdate(
        req.body.postId,
        { $push: { comments: comment } },
        { new: true, upsert: true }
    )
        .populate('postedBy', '_id name image_data')
        .populate('comments.postedBy', '_id name image_data')
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err),
                })
            }
            res.json(result)
        })
}

const uncomment = (req, res) => {
    let comment = req.body.comment
    Post.findByIdAndUpdate(
        req.body.postId,
        { $pull: { comments: { _id: comment._id } } },
        { new: true }
    )
        .populate('postedBy', '_id name image_data')
        .populate('comments.postedBy', '_id name image_data')
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err),
                })
            }
            res.json(result)
        })
}

const remove = (req, res) => {
    let post = req.post
    post.remove((err, deletedPost) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err),
            })
        }
        res.json(deletedPost)
    })
}

const isPoster = (req, res, next) => {
    let isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id
    if (!isPoster) {
        return res.status('403').json({
            error: 'User is not authorized',
        })
    }
    next()
}

export default {
    create,
    listNewsFeed,
    postByID,
    listByUser,
    like,
    unlike,
    comment,
    uncomment,
    remove,
    isPoster,
    getPostImage,
}

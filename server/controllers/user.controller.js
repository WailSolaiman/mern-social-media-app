import User from '../models/user.model'
import _ from 'lodash'
import errorHandler from './../helpers/dbErrorHandler'
import { gridFSBucketUser } from '../../config/gridFSBucketUser'
import { ObjectID } from 'mongodb'
import { Readable } from 'stream'

const create = (req, res) => {
    const user = new User(req.body)
    user.save(err => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err),
            })
        }
        res.status(200).json({
            message: 'Successfully signed up!',
        })
    })
}

const userByID = (req, res, next, id) => {
    User.findById(id)
        .populate('following', '_id name')
        .populate('followers', '_id name')
        .exec((err, user) => {
            if (err || !user)
                return res.status('400').json({
                    error: 'User not found',
                })
            req.profile = user
            next()
        })
}

const read = (req, res) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}

const list = (req, res) => {
    User.find((err, users) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err),
            })
        }
        res.json(users)
    }).select('name email updated created')
}

const update = (req, res) => {
    let user = req.profile
    user = _.extend(user, req.body)
    user.updated = Date.now()
    user.save(err => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err),
            })
        }
        user.hashed_password = undefined
        user.salt = undefined
        res.json(user)
    })
}

const remove = (req, res) => {
    let user = req.profile
    user.remove((err, deletedUser) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err),
            })
        }
        deletedUser.hashed_password = undefined
        deletedUser.salt = undefined
        res.json(deletedUser)
    })
}

const createAvatarImage = (req, res) => {
    let user = req.profile
    const readableTrackStream = new Readable()
    readableTrackStream.push(req.file.buffer)
    readableTrackStream.push(null)
    let uploadStream = gridFSBucketUser.openUploadStream(req.body.imageName)
    readableTrackStream.pipe(uploadStream)
    user.photoId = uploadStream.id
    uploadStream.on('error', () => {
        return res.status(500).json({ message: 'Error uploading file' })
    })
    uploadStream.on('finish', () => {
        user.save(err => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err),
                })
            }
            user.hashed_password = undefined
            user.salt = undefined
            return res.json(user)
        })
    })
}

const getAvatarImage = (req, res) => {
    let user = req.profile
    let photoId
    try {
        photoId = new ObjectID(user.photoId)
    } catch (err) {
        return res.status(400).json({
            message: 'Invalid postID',
        })
    }
    res.set('Content-Type', 'image/jpg')
    res.set('Accept-Ranges', 'bytes')
    let downloadStream = gridFSBucketUser.openDownloadStream(photoId)
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

const addFollowing = (req, res, next) => {
    User.findByIdAndUpdate(
        req.body.userId,
        { $push: { following: req.body.followId } },
        (err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err),
                })
            }
            next()
        }
    )
}

const addFollower = (req, res) => {
    User.findByIdAndUpdate(
        req.body.followId,
        { $push: { followers: req.body.userId } },
        { new: true }
    )
        .populate('following', '_id name')
        .populate('followers', '_id name')
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err),
                })
            }
            result.hashed_password = undefined
            result.salt = undefined
            res.json(result)
        })
}

const removeFollowing = (req, res, next) => {
    User.findByIdAndUpdate(
        req.body.userId,
        { $pull: { following: req.body.unfollowId } },
        (err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err),
                })
            }
            next()
        }
    )
}
const removeFollower = (req, res) => {
    User.findByIdAndUpdate(
        req.body.unfollowId,
        { $pull: { followers: req.body.userId } },
        { new: true }
    )
        .populate('following', '_id name')
        .populate('followers', '_id name')
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err),
                })
            }
            result.hashed_password = undefined
            result.salt = undefined
            res.json(result)
        })
}

const findPeople = (req, res) => {
    let following = req.profile.following
    following.push(req.profile._id)
    User.find({ _id: { $nin: following } }, (err, users) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err),
            })
        }
        res.json(users)
    }).select('name')
}

export default {
    create,
    userByID,
    read,
    list,
    remove,
    update,
    createAvatarImage,
    getAvatarImage,
    addFollowing,
    addFollower,
    removeFollowing,
    removeFollower,
    findPeople,
}

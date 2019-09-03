import User from '../models/user.model'
import _ from 'lodash'
import errorHandler from './../helpers/dbErrorHandler'

const create = (req, res, next) => {
    const user = new User(req.body)
    user.save((err, result) => {
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
        .populate('following', '_id name image_data')
        .populate('followers', '_id name image_data')
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
    }).select('name email image_data updated created')
}

const update = (req, res, next) => {
    let user = req.profile
    user = _.extend(user, req.body)
    user.updated = Date.now()
    user.save(err => {
        if (err) {
            console.log('update ERROR')
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err),
            })
        }
        user.hashed_password = undefined
        user.salt = undefined
        res.json(user)
    })
}

const remove = (req, res, next) => {
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

const createImage = (req, res, next) => {
    let user = req.profile
    user.image_name = req.body.imageName
    user.image_data = req.file.path
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
        .populate('following', '_id name image_data')
        .populate('followers', '_id name image_data')
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err),
                })
            }
            result.hashed_password = undefined
            result.salt = undefined
            console.log(result)
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
        .populate('following', '_id name image_data')
        .populate('followers', '_id name image_data')
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
    createImage,
    addFollowing,
    addFollower,
    removeFollowing,
    removeFollower,
    findPeople,
}

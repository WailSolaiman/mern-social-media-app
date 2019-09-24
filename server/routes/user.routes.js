import express from 'express'
import multer from 'multer'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()
const upload = multer({ storage: multer.memoryStorage() })

router
    .route('/api/users')
    .get(userCtrl.list)
    .post(userCtrl.create)

router
    .route('/api/users/:userId')
    .get(authCtrl.requireSignin, userCtrl.read)
    .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
    .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)

router
    .route('/api/image/:userId')
    .post(
        upload.single('imageData'),
        authCtrl.requireSignin,
        userCtrl.createAvatarImage
    )

router.route('/api/image/avatar/:userId').get(userCtrl.getAvatarImage)

router
    .route('/api/users/follow')
    .post(authCtrl.requireSignin, userCtrl.addFollowing, userCtrl.addFollower)

router
    .route('/api/users/unfollow')
    .post(
        authCtrl.requireSignin,
        userCtrl.removeFollowing,
        userCtrl.removeFollower
    )

router
    .route('/api/users/findpeople/:userId')
    .get(authCtrl.requireSignin, userCtrl.findPeople)

router.param('userId', userCtrl.userByID)

export default router

import express from 'express'
import multer from 'multer'
import authCtrl from '../controllers/auth.controller'
import userCtrl from '../controllers/user.controller'
import postCtrl from '../controllers/post.controller'
//import { upload } from '../../config/multer'
//import { upload } from '../../config/multer2'

const router = express.Router()
//const storage = multer.memoryStorage()
const upload = multer({ storage: multer.memoryStorage() })

router
    .route('/api/posts/new/:userId')
    .post(authCtrl.requireSignin, upload.single('imageData'), postCtrl.create)

router
    .route('/api/posts/feed/:userId')
    .get(authCtrl.requireSignin, postCtrl.listNewsFeed)

router
    .route('/api/posts/by/:userId')
    .get(authCtrl.requireSignin, postCtrl.listByUser)

router.route('/api/posts/like').put(authCtrl.requireSignin, postCtrl.like)
router.route('/api/posts/unlike').put(authCtrl.requireSignin, postCtrl.unlike)

router
    .route('/api/posts/:postId')
    .delete(authCtrl.requireSignin, postCtrl.isPoster, postCtrl.remove)

router.route('/api/posts/comment').put(authCtrl.requireSignin, postCtrl.comment)
router
    .route('/api/posts/uncomment')
    .put(authCtrl.requireSignin, postCtrl.uncomment)

router
    .route('/api/posts/image/:postId')
    .get(authCtrl.requireSignin, postCtrl.getPostImage)

router.param('userId', userCtrl.userByID)
router.param('postId', postCtrl.postByID)

export default router

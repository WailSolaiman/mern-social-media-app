import mongoose from 'mongoose'
import crypto from 'crypto'
import path from 'path'
import GridFsStorage from 'multer-gridfs-storage'
//import Grid from 'gridfs-stream'
import multer from 'multer'
import config from './config'
import conn from '../server/connectDB'

//Grid.mongo = mongoose.mongo
//let gfs
// let gridFSBucket

// conn.once('open', () => {
//     //gfs = Grid(conn.db)
//     //gfs.collection('posts')
//     gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db)
// })

const storage = new GridFsStorage({
    url: config.mongoUri,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err)
                }
                const filename =
                    buf.toString('hex') + path.extname(file.originalname)
                const fileInfo = {
                    filename: filename,
                    bucketName: 'posts',
                }
                resolve(fileInfo)
            })
        })
    },
})

const upload = multer({ storage })

export { upload }

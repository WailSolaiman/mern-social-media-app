import mongoose from 'mongoose'
import conn from '../server/connectDB'

let gridFSBucketUser
conn.once('open', () => {
    gridFSBucketUser = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'users',
    })
})

export { gridFSBucketUser }

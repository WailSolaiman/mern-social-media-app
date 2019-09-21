import mongoose from 'mongoose'
import conn from '../server/connectDB'

let gridFSBucket
conn.once('open', () => {
    gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'posts',
    })
})

export { gridFSBucket }

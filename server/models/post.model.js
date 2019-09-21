import mongoose from 'mongoose'
const PostSchema = new mongoose.Schema({
    text: {
        type: String,
        required: 'Name is required',
    },
    photoId: {
        type: String,
    },
    likes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    comments: [
        {
            text: String,
            created: { type: Date, default: Date.now },
            postedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
        },
    ],
    postedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
    created: {
        type: Date,
        default: Date.now,
    },
})

export default mongoose.model('Post', PostSchema)

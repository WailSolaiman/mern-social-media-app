import config from '../config/config'
import mongoose from 'mongoose'

// Database Connection Properties
const properties = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, properties)

const conn = mongoose.connection

export default conn

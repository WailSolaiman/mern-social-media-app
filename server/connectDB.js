import config from '../config/config'
import mongoose from 'mongoose'

const properties = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, properties)
const conn = mongoose.connection

export default conn

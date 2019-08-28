import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// Database Connection Properties
const properties = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, properties)
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`)
})

app.listen(config.port, err => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})

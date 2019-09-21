import config from './../config/config'
import conn from './connectDB'
import app from './express'

conn.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

app.listen(config.port, err => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})

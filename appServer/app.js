const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use('/api/auth', require('./routes/auth.rotes'))
app.use('/api/files', require('./routes/ownlist.routes'))
app.use('/api/songs', require('./routes/song.routes'))

const PORT = config.get('port') || 5000

async function start() {
    try{
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
    } catch(e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}
start()
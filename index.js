const express = require('express')
const app = express() 

const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const cors = require('cors')

const http = require('http') 

const routerApi = require('./Routes/api')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const config = require('./config')

app.use('/api', routerApi)
app.use('/img', express.static(__dirname+'/imgStorage'))

mongoose.connect(config.mongoUrl)
    .then(() =>{
        console.log('MongoDB connection successfully')
    })
    .catch(err => console.log(err))

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

const server = http.createServer(app)

server.listen(config.port, () => console.log(`Server listening on port ${config.port}`))
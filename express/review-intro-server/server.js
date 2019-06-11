const express = require('express')
const app = express()
const PORT = 8888
const mongoose = require('mongoose')


//express middleware
app.use(express.json())

app.use('/destination', require('./destinationRoutes'))
app.use('/activity', require('./activityRoutes'))

mongoose.connect('mongodb://localhost:27017/destination-db', {useNewUrlParser: true})
    .then(() => {
        console.log('connected to MongoDB')
    })

app.listen(PORT, () => {
    console.log(`Matrix has you on port ${PORT}`)
})
// Do backend before you start on Client side/React App
// 1. start server with app.listen
// 2. include app.use(express.json())
// 3. Create separate file with routes and requests. 
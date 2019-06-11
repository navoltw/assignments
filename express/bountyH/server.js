const express =require('express')
const app = express()
const port = 8484
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/bountyHunter', {useNewUrlParser: true})
    .then(() => {
        console.log('connected to mongodb')
    })

app.use(express.json())



const express = require('express');
const app = express()
const mongoose = require('mongoose');

app.use(express.json())

mongoose.connect(
    'mongodb://localhost:27017/bountyH',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, () => {
        console.log('Connected to the DB')
})

app.use('/movies', require('./routes/movieRoutes'))


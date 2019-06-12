const mongoose = require('mongoose');
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number
    },
    vote: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Movie', movieSchema)

const mongoose = require('mongoose');
const Schema = mongoose.Schema
const express = require('express');
const movieRouter = express.Router()
const Movie = require('../models/movie');

movieRouter.post('/', (req, res) => {
    const newMovie = new Movie (req.body)
    newMovie.save((err, savedMovie) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(savedMovie)
    })
})

movieRouter.get('/', (req, res) => {
    Movie.find((err, allTheMovies) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(allTheMovies)
    })
})

movieRouter.get('/:_id', (req, res) => {
    Movie.findOne({_id: req.params._id}, (err, foundMovie) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(foundMovie)
    })
})

movieRouter.delete('/:_id', (req, res) => {
    Movie.findOneAndDelete({_id: req.params._id}, (err, deleteItems) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(`Successfully deleted movie ${deletedItem.title}`)
    })
})

movieRouter.put('/:_id', (req, res) => {
    Movie.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true},
        (err, updateMovie) => {
            if(err){
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(updatedMovie)
        }
    )
})

movieRouter.put('/vote/:_id', (req, res) => {
    Movie.findOneAndUpdate(
        {_id: req.params._id},
        {$inc: {vote: 1}},
        {new: true},
        (err, updateMovie) => {
            if(err){
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(updatedMovie)
        }
    )
})

module.exports = movieRouter

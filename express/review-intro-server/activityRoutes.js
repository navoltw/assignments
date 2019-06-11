const express = require('express')
const activityRouter = express.Router()
const data = require('./database.js')
const uuid = require('uuid/v4')


activityRouter.route('/')

    .get((request, response) => {
        let filteredResults = data
        for(let propKey in request.query){
            filteredResults = filteredResults.filter(destination => destination[propKey].toString() === request.query[propKey])
        }
        response.send(filteredResults)
    })

    .post((request, response) => {
        //body of info comes from request.body
        const newDestination = request.body
        newDestination._id = uuid()
        console.log(newDestination)
        data.push(newDestination)
        response.send(data)
    })

activityRouter.route('/:id')

    .get((request, response) => {
        // request.params.id vs id that matches in the database
        const searchedDestination = data.find(destination => destination._id === request.params.id)
        response.send(searchedDestination)
    })

    .delete((request, response) => {
        //id is found: request.params.id
        data.forEach((destination, i) => {
            if(request.params.id === destination._id){
                data.splice(i, 1)
            }
        })
        response.send('Red Rover')
    })

    .put((request, response) => {
        // console.log(request.body)
        data.forEach((destination, i) => {
            if(destination._id === request.params.id){
                Object.assign(destination, request.body)
            }
        })
        response.send(data)
    })

module.exports = activityRouter
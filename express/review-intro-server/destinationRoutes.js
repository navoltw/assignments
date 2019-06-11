const express = require('express')
const destinationRouter = express.Router()


destinationRouter.route('/')

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
        const newDestination
        newDestination._id = uuid()
        console.log(newDestination)
        data.push(newDestination)
        response.send(data)
    })

destinationRouter.route('/:id')

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


module.exports = destinationRouter
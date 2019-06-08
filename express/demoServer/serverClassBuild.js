const express = require('express')
const uuid = require('uuid/v4')
// console.log(uuid())
const app = express()
const data = require('./database') // --> in Node
// import data from './database' --> in React

app.use(express.json())

app.get('/destination', (request, response)=> {
    response.send(data)
})

app.get('/destination/:destinationID', (request, response) => {
    console.log(request.params.destinationID)
    const results = data.filter(destination => destination._id === request.params.destinationID)
    response.send(results)
})

app.post('/destination', (request, response)=> {
    const newDestination = request.body
    newDestination._id = uuid()
    data.push(newDestination)
    response.send(newDestination)
})

app.delete('/destination/:destinationID', (request, response)=> {
   data.forEach((destination, i) => {
       if(request.params.destinationID === destination._id){
           data.splice(i, 1)
       }
   })
   response.send({
       msg: 'Successfully Deleted Destination'
   })
})

app.put('/destination/:destinationID', (request, response) => {
    const updatedDestination = request.body;
    data.forEach(destination => {
        if(request.params.destinationID === destination._id){
            return Object.assign(destination, updatedDestination)
        }
    })  
    response.send({
        msg: 'Successfully Updated Destination',
        data
    })
})



app.listen(1987, () => {
    console.log('server is running on port ' + 1987)
})
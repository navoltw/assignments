const express = require('express')
const uuid = require('uuid')
const app = express ()
const data = require('./database')

app.use(express.json())

console.log({...data})

app.get('/fName', (request, response) => {
    response.send
})

app.get('./fName', (request, response) => {
    const results = data.filter(fName => fName._id === request.params.fNameID)
    response.send(results)
})

app.post('/fName', (request, response) => {
    const newFName = request.body
    newFName._id = uuid()
    data.push(newFName)
    response.send(newFName)
})

app.delete('./fName/:fNameID', (request, response) => {
    const updatedFName = request.body;
    data.forEach(fName => {
        if(request.params.fNameID === fName._id)
            return Object.assign(fName, updatedFName)
    })
    response.send({
        msg: 'You are making a difference',
        data
    })
})

app.listen(3000, () => {
    console.log('server is running on port ' + 3000)
})

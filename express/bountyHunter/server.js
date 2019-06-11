const express = require('express')
const uuid = require('uuid/v4')
const app = express ()
const bounties = require('./database')
const PORT = 3000

app.use(express.json())

console.log({...bounties})

app.get('/bounties', (request, response) => {
    response.send(bounties)
})

app.get('./bounties', (request, response) => {
    const results = bounties.filter(bounties => bounties._id === request.params.bountiesID)
    response.send(results)
})

app.post('/bounties', (request, response) => {
    const newBounties = request.body
    newBounties._id = uuid()
    bounties.push(newBounties)
    response.send(newBounties)
})

app.delete('./bounties/:bountiesID', (request, response) => {
    const updatedBounties = request.body;
    bounties.forEach(bounties => {
        if(request.params.bountiesID === bounties._id)
            return Object.assign(bounties, updatedBounties)
    })
    response.send({
        msg: 'You are making a difference',
        bounties
    })
})

// app.put('/bounties/:bountiesID', (request, response) => {
//     response.send
// })

app.listen(3000, () => {
    console.log(`Make a difference on port ${3000}`)
})

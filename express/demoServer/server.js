const express = require('express')
const app = express()
const data = require('./database')

app.use(express.json())

console.log({...data})

app.get('/title', (request, response) => {
    console.log(data)
    response.send(data)
})

app.get('/title/:travelID', (request, response) => {
    console.log(request.params)
})

app.post('/title', (request, response) => {
    const newTitle = request.body
    data.push(newTitle)
    response.send (newTitle)
})



app.listen(3000, () => {
    console.log('server is running on port ' + 3000)
})
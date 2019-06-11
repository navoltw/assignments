const express = require('express')
const app = express()
const data = ('./database')
const uuid = require(uuid/v4)
const PORT = 4444

app.use(express.json())

app.get('/data', (request, response) => {
    response.send(data)
})

app.get('/data', (request, response) => {
    const results = data.filter(data => data._id === request.params._id )
    response.send(results)
})

app.post('/data', (request, response) => {
    const NewData = request.body
    NewData._id = uuid()
    data.push = (NewData)
    response.send = (NewData)
})

app.put('/data', (request, response) => {
    
})

app.delete('/data', (request, response) => {
    const updateData = request.body
    data.forEach = (data => {
        if (request.params.dataID === data._id)
        return object.assign(data, updateData)
    })
    response.send('you are the best')
})



app.listen(PORT, () =>{
    `you should have zigged ${PORT}`
})
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/api', (req, res) => {
    console.log(req);
    res.send({message: "Hello World"})
})


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
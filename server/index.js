const https = require('https')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


app.get('http://localhost:5000', (req, res) => {
    fetch('https://apis.indeed.com/oauth/v2/tokens',{
        method: 'POST'
    })
    console.log(req);
    console.log(res);
    res.send({message: "Hello World"})
})


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
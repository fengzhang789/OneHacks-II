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
        method: 'POST',
        client_id: 'd6841b5ea4ccb6630afd6b633d0c16552d83ef635323964e5afa2209edf9c4ba',
        client_secret: 
    })
    console.log(req);
    console.log(res);
    res.send({message: "Hello World"})
})


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
const fetch = require("node-fetch")
const https = require('https')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 5000

const {
    client_id,
    client_secret
} = require("./secrets.json");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

let info = {
    grant_type: "client_credentials",
    client_id: client_id,
    client_secret: client_secret,
    scope: "employer_access"
}

app.get('/api', (req, res) => {
    console.log(JSON.stringify(info))
    fetch('https://apis.indeed.com/oauth/v2/tokens',{
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        var stupid
        stupid = data;
    })

    res.send(stupid)
    console.log(req);
    console.log(data);
        //    SEND JSON ONLY PLEASEEEE
})


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
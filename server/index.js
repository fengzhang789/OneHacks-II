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


app.get('/api', (req, res) => {
    // fetch('https://apis.indeed.com/oauth/v2/tokens',{
    //     method: 'POST',
        
    // })
    console.log(req);
    console.log(res);
    console.log(client_id);
    res.send({message: client_secret})      // SEND JSON ONLY PLEASEEEE
})


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
const fetch = require("node-fetch")
const https = require('https')
const express = require('express')
const bodyParser = require('body-parser')
//const cors = require('cors')
const app = express()
const apiPort = 5000

const {
    client_id,
    client_secret
} = require("./secrets.json");

app.use(bodyParser.urlencoded({ extended: true }))
//app.use(cors())
app.use(bodyParser.json())

let info = {
    grant_type: "authorization_code",
    client_id: client_id,
    client_secret: client_secret,
    scope: "employer_access"
}

const options = {
    method: 'GET',
    url: 'https://indeed-indeed.p.rapidapi.com/apisearch',
    params: {
      publisher: 'undefined',
      v: '2',
      format: 'json',
      callback: 'high school',
      q: 'high school',
      l: 'waterloo, on',
      sort: 'relevance',
      radius: '25',
    },
    headers: {
        'X-RapidAPI-Key': '8110e9270bmshc3a7a732b694abcp1ca0bbjsncd9f761b0aa7',
        'X-RapidAPI-Host': 'indeed-indeed.p.rapidapi.com'
      }
    }

app.get('/api', (req, res) => {
    /*postData('https://apis.indeed.com/oauth/v2/tokens',info)
    .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
      })*/
    fetch('https://indeed-indeed.p.rapidapi.com/apisearch',options)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
    /*fetch('https://indeed-indeed.p.rapidapi.com/apisearch',{
        method: 'GET',
        body: {
            grant_type: "client_credentials",
            client_id: client_id,
            client_secret: client_secret,
            scope: "employer_access"
        },
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded',
            "Accept": 'application/json'
        }
    }).then((response) => response.json())
    .then((data) => {
        console.log(data)
    })*/
    // .then(res => res.json())
    // .then(json => console.log(json))
    // .catch(err => console.log(err));
   // console.log(response)
    console.log("yes")
    res.send({message: typeof response})
        //    SEND JSON ONLY PLEASEEEE
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
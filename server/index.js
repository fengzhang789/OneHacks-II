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

var access_token = {
    access_token: ''
};

app.get('/api', (req, res) => {
    const paramsString = 'query=Software%20Engineer&page=1'
    const searchParams = new URLSearchParams(paramsString)
    console.log('oned')
    fetch('https://job-search4.p.rapidapi.com/indeed/search?query=Software%20Engineer&page=1',{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'job-search4.p.rapidapi.com'
        }
    })
    .then(res => res.json())
    .then(json => {
        access_token = json
        console.log(json)
        console.log('access_token')
    })
    .catch(err => console.log(err));
    console.log("yes")
    res.send(JSON.stringify(access_token))
        //    SEND JSON ONLY PLEASEEEE
})

app.get('/jobs', (req, res) => {
    
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))





/*postData('https://apis.indeed.com/oauth/v2/tokens',info)
    .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
      })*/
// .then((data) => {
    //     console.log(data)
    // })
    /*fetch('https://apis.indeed.com/oauth/v2/tokens',{
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

   /*fetch(url,{
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '8110e9270bmshc3a7a732b694abcp1ca0bbjsncd9f761b0aa7',
          'X-RapidAPI-Host': 'indeed-indeed.p.rapidapi.com'
        }
    })
    .then((response) => response.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));*/

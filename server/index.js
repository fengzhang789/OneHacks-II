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

const url = 'https://indeed-indeed.p.rapidapi.com/apisearch?publisher=undefined&v=2&format=json&callback=%3CREQUIRED%3E&q=java&l=austin%2C%20tx&sort=%3CREQUIRED%3E&radius=25&st=%3CREQUIRED%3E&jt=%3CREQUIRED%3E&start=%3CREQUIRED%3E&limit=%3CREQUIRED%3E&fromage=%3CREQUIRED%3E&highlight=%3CREQUIRED%3E&filter=%3CREQUIRED%3E&latlong=%3CREQUIRED%3E&co=%3CREQUIRED%3E&chnl=%3CREQUIRED%3E&userip=%3CREQUIRED%3E&useragent=%3CREQUIRED%3E'

app.get('/api', (req, res) => {
    
    fetch('https://apis.indeed.com/oauth/v2/tokens',{
        method: 'POST',
        body: {
            "grant_type": "client_credentials",
            "client_id": client_id,
            "client_secret": client_secret,
            "scope": "employer_access"
        },
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded',
            "Accept": 'application/json'
        }
    }).then((response) => {
        console.log(JSON.stringify(response) + 'response');
        response.json()
    })
    .then((data) => {
        console.log(data + 'data')
    })

    console.log("yes")
    res.send({message: typeof response})
        //    SEND JSON ONLY PLEASEEEE
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
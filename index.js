const serverless = require('serverless-http');
const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios')

app.use(cors())

app.post('/', require('body-parser').json(), async (req, res) => {
    try {
        console.log(req.query.url)
        const { data } = await axios.post(req.query.url, req.body.body)
        res.send(data)
    } catch (e) {
        res.send({ error: e.message })
    }
})

app.get('/', async (req, res) => {
    try {
        console.log(req.query.url)
        const { data } = await axios.get(req.query.url)
        res.send(data)
    } catch (e) {
        res.send({error: e.message})
    }
})

module.exports.handler = serverless(app)
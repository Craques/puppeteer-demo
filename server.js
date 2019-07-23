const express = require('express')
const cors = require('cors')
const {getHeaders} = require('./index')

const app = express()

app.use(cors())

app.get('/', async (req, res)=>{
    const HNheadings = await getHeaders()
    res.status(200).json({hello: 'Hello world', HNheadings})
})

const port = process.env.port || 3000

app.listen(port, ()=>{
    console.log('listening')
})
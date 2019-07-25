const express = require('express')
const cors = require('cors')
const {getHeaders} = require('./index')
//connect to the database
const {mongoose} = require('./db/config')
const app = express()
const {Headline} = require('./db/schemas/headlineSchema')
const bodyParser =require('body-parser')
app.use([cors(), bodyParser.json(), bodyParser.urlencoded({extended: true})])

app.get('/', async (req, res)=>{
    const HNheadings = await getHeaders()
    res.status(200).json({hello: 'Hello world', HNheadings})
})
/**
 * @route - add
 * @param {array} req.body - an array of objects containing the titles of the headlines
 * @returns {response} - saves data to the database and sends to the user 
 */

app.post('/add', async (req, res)=>{
    console.log(req.body)
    //await Headline.collection.insertMany([{title: 'Pasta is great'}, {title: 'Give me more food'}])
    //await headline.save()
    res.send('Hey the document was saved').status(200)
})

const port = process.env.port || 3000

app.listen(port, ()=>{
    console.log('listening')
})
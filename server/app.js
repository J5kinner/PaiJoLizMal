require('dotenv').config()

const express = require('express')
const cors = require('cors')
const apiRouter = require('./controllers/api')

const app = express() 

app.use(cors())
app.use(express.json())
app.use(express.static(__dirname +'/build'));
app.use(apiRouter)

module.exports = app
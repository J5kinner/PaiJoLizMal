require('dotenv').config()

const express = require('express')
const cors = require('cors')
const apiRouter = require('./controllers/api')
const path = require('path')
const app = express() 

app.use(cors())
app.use(express.json())
app.use(express.static('build'));
app.use(apiRouter)
app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, '../build/index.html'));
});


module.exports = app
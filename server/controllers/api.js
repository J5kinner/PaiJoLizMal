const express = require('express') 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/users')
const apiRouter = express.Router()

apiRouter.post('/api/login', (request, response) => {
    const {username, password} = request.body

    User.findOne({"username": username}).then(result => {
        if (!result) {
            return response.status(401).json({error: "invalid username or password"})
        }

        bcrypt.compare(password, result.password).then(match => {
            if (match) {
                const usrForToken = {
                    id: result._id,
                    username: result.username
                }
                const token = jwt.sign(usrForToken, "secret")
                return response.status(200).json({token, username: result.username})
            } else {
                return response.status(401).json({error: "invalid username or password"})
            }
        })
    })

    return

})

apiRouter.post('/api/createUser', (request, response) => {
    const {username, name, password} = request.body

    bcrypt.hash(password, 10).then(result => {
        const newUser = new User({
            username: username,
            name: name,
            password: result,
            totalTime: 0
        })
        newUser.save().then(result => {
            return result
        })
    })
})

module.exports = apiRouter

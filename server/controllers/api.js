const express = require('express') 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/users')
const Note = require('../models/notes')
const NoteType = require('../models/noteTypes')
const apiRouter = express.Router()

// User related APIs

// Login
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
                return response.status(200).json({token, user: result})
            } else {
                return response.status(401).json({error: "invalid username or password"})
            }
        })
    })
})

// Create new user
apiRouter.post('/api/user', (request, response) => {

    const {username, password} = request.body

    User.findOne({"username": username}).then(result => {
        if (result) {
            return response.status(401).json({error: "this username is taken"})
        }
        const newUser = new User({
            username: username,
            password: password,
            totalTime: 0,
            coins: 0
        })
        newUser.save().then(result => {
            response.status(200).json({message: `Successfully created user`, username: username})
            return result
        })
    })

})

// Update existing user
apiRouter.put('/api/user', (request, response) => {

    // Check token here

    // const token = getTokenFrom(request)

    // let decodedToken = null

    // try {
    //     decodedToken = jwt.verify(token, SECRET)
    // }
    // catch (error) {
    //     decodedToken = {id: null}
    // }

    // if (!token || !decodedToken.id) {
    //     return res.status(401).json({error: "invalid token"})
    // }

    const {username, newUsername, password} = request.body

    User.findOne({"username": username}).then(exists => {
        if (!exists) {
            return response.status(401).json({error: "user not found"})
        }
        if (password) {
            // User.updateOne({username: username}, {$set: {username: newUsername, password: result}})
            User.updateOne({username: username}, {$set: {username: newUsername, password: password}})
            .then(() => {
                return response.status(200).json({message: `Successfully updated user`, username: newUsername})
            })
        } else {
            User.updateOne({username: username}, {$set: {username: newUsername}}).then(() => {
                return response.status(200).json({message: `Successfully updated user`, username: newUsername})
            })
        }
    })
})

// Note related APIs

// Create note
apiRouter.post('/api/notes', (request, response) => {

    // Check token here

    // const token = getTokenFrom(request)

    // let decodedToken = null

    // try {
    //     decodedToken = jwt.verify(token, SECRET)
    // }
    // catch (error) {
    //     decodedToken = {id: null}
    // }

    // if (!token || !decodedToken.id) {
    //     return res.status(401).json({error: "invalid token"})
    // }



    const {title, body, username, background} = request.body
    var bg = background

    if (!title || !body || !username) {
        return response.status(401).json({error: "title, body or user missing"})
    }
    if (!background) {
        bg = "#000000"
    }
    const newNote = new Note({
        title: title,
        body: body,
        username: username,
        background: bg
    })
    newNote.save().then(result => {
        response.json(result)
    })
})

// Get all
apiRouter.get('/api/notes', (request, response) => {
    Note.find({}).then(notes => {
        response.json(notes)
    })
})

// Get types
apiRouter.get('/api/notes/types', (request, response) => {
    NoteType.find({}).then(notes => {
        response.json(notes)
    })
})

module.exports = apiRouter

const express = require('express') 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/users')
const Note = require('../models/notes')
const Timer = require('../models/timer')
const NoteType = require('../models/noteTypes')
const apiRouter = express.Router()

const SECRET = "secret"

const getTokenFrom = request => {
    const authorization = request.get('authorization') 
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) { 
           return authorization.substring(7)  
        }  
    return null
}

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
                const token = jwt.sign(usrForToken, SECRET)
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

    const token = getTokenFrom(request)

    let decodedToken = null

    try {
        decodedToken = jwt.verify(token, "secret")
    }
    catch (error) {
        decodedToken = {id: null}
    }

    if (!token || !decodedToken.id) {
        return response.status(401).json({error: "invalid token"})
    }

    const {username, newUsername, oldPassword, password} = request.body

    User.findOne({"username": username}).then(result => {
        if (!result) {
            return response.status(401).json({error: "invalid username or password"})
        }

        bcrypt.compare(oldPassword, result.password).then(match => {
            if (!match) {
                return response.status(401).json({error: "invalid username or password"})
            }

            User.findOne({"username": newUsername}).then(exists => {
                if (exists && (newUsername != username)) {
                    return response.status(401).json({error: "this username is not available"})
                }
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
        })
    })
})

// Note related APIs

// Create note
apiRouter.post('/api/notes', (request, response) => {

    // Check token here

    const token = getTokenFrom(request)

    let decodedToken = null

    try {
        decodedToken = jwt.verify(token, SECRET)
    }
    catch (error) {
        decodedToken = {id: null}
    }

    if (!token || !decodedToken.id) {
        return response.status(401).json({error: "invalid token"})
    }

    const {title, body, username, background} = request.body

    if (!title || !body || !username) {
        return response.status(400).json({error: "title, body or user missing"})
    }

    User.findOne({"username": username}).then(user => {
        if (!user) {
            return response.status(401).json({error: "user not found"})
        }
        NoteType.findOne({background: background}).then(typeExists => {

            if (!typeExists) {
                return response.status(400).json({error: "invalid note type"})
            }

            if (user.coins < typeExists.cost) {
                return response.status(400).json({error: "insufficient funds"})
            }
            const newNote = new Note({
                title: title,
                body: body,
                username: username,
                background: background
            })
            newNote.save().then(result => {
                var bal = user.coins - typeExists.cost
                User.updateOne({username: username}, {$set: {coins: bal}})
                .then(() => {
                    return response.status(200).json({note: result, updatedBalance: bal})
                })
            })
        })
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

// Timer

// Start timer
apiRouter.post('/api/timer', (request, response) => {
    const token = getTokenFrom(request)

    let decodedToken = null

    try {
        decodedToken = jwt.verify(token, SECRET)
    }
    catch (error) {
        decodedToken = {id: null}
    }

    if (!token || !decodedToken.id) {
        return response.status(401).json({error: "invalid token"})
    }
    const {username, duration} = request.body

    Timer.findOneAndDelete({"user": username}).then(() => {
        const newTimer = new Timer({
            user: username,
            startTime: Date.now(),
            duration: duration
        })
        newTimer.save().then(result => {
            response.status(200).json({message: `Successfully stored timer`})
            return result
        })
    })
})

// Finish timer
apiRouter.put('/api/timer', (request, response) => {
    const token = getTokenFrom(request)

    let decodedToken = null

    try {
        decodedToken = jwt.verify(token, SECRET)
    }
    catch (error) {
        decodedToken = {id: null}
    }

    if (!token || !decodedToken.id) {
        return response.status(401).json({error: "invalid token"})
    }
    const {username} = request.body

    Timer.findOne({"user": username}).then(currentTimer => {

        if (!currentTimer) {
            return response.status(404).json({error: "timer not found"})
        }
        var now = Date.now()
        var diffMs = now - currentTimer.startTime

        if (((diffMs/1000) + 2) < (currentTimer.duration*60)) {
            return response.status(400).json({error: "this timer is not valid"})
        }
        User.findOneAndUpdate({username: username}, {$inc: {coins: currentTimer.duration}}).then(u => {
            Timer.deleteOne({"user": username}).then(() => {
                var bal = u.coins + currentTimer.duration
                return response.status(200).json({message: `Successfully finished timer`, balance: bal})
            })
        })
        
    })
})

module.exports = apiRouter

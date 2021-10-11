require('dotenv').config

const mongoose = require('mongoose')
const User = require('./models/users')
// const fs = require('fs')
// const raw = fs.readFileSync("server/raw.json")

let users = [
    {
        "username": "test",
        "name": "test testman",
        "password": "$2b$10$PjkiXM3HBwFN2KyNFLhZee9KQMib6VR1TVnLAr8H0RU0FhNDoBb3m"
    },
    {
        "username": "mr president",
        "name": "Stephen Dowton",
        "password": "$2b$10$a0qgqj3pox.fiv1WnIg9Du90bcn9H6vxd2syozydKG3Vddq7ZMmCm"
    }
]

users.map(record => {
    console.log(record)
    const newUser = new User({
        username: record.username,
        name: record.name,
        password: record.password,
        totalTime: 0
    })
    newUser.save().then(result => {
        console.log("user saved")
    })
})
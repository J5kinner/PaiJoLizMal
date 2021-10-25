/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Elizabeth Laham - @elizabetht94
 *
 */

import axios from 'axios'
import bcryptjs from 'bcryptjs'

const baseUrl = 'http://localhost:3001/api'

// Call to log in a user
const login = (username, password) => axios
    .post(`${baseUrl}/login`, {username, password})
    .then(res => res.data)
    .catch(err => {
        if (err.response.status===401) return {error: "Incorrect username or password"}
        else return {error: "Login failed"}
    })

// Call to register a user
const register = async (username, password) => {
    let hashedPassword = await bcryptjs.hash(password, 10)
    axios
    .post(`${baseUrl}/user`, {username, password: hashedPassword})
    .then(res => res.data)
    .catch(err => {
        if (err.response.state === 401) return {error: "Username taken"}
        return {error: "Register failed"}
    })}



// Call to update user password
const updatePassword = async (oldPassword, newPassword) => {
    const token = JSON.parse(localStorage.getItem('jwt'))
    let hashedPassword = await bcryptjs.hash(newPassword, 10)
    const username = JSON.parse(localStorage.getItem('loggedInUser')).username
    axios
    .put(`${baseUrl}/user`, {username, username, password: hashedPassword}, {
        headers: { Authorization: `Bearer ${token}` }})
    .then(res => res.data)
    .catch(err => {
        if (err.response.state === 401) return {error: "User not found"}
        else return {error: "Update failed"}
    })}

 // Call to update only usename   
const updateUsername = async (username, newUsername) => {
    const token = localStorage.getItem('jwt')
     axios
    .put(`${baseUrl}/user`, {username, newUsername, password: null}, 
    { headers: { Authorization: `Bearer ${token}` }})
    .then(res => res.data)
    .catch(err => {
        if (err.response.state === 401) return {error: "User not found"}
        else return {error: "Update failed"}
    })
}

// Call to update user stats

// Call to update coin balance

// Call to get user time?

const UserService = { login, register, updatePassword, updateUsername }
export default UserService

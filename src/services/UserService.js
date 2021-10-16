import axios from 'axios'

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
const register = (username, password) => axios
    .post(`${baseUrl}/createUser`, {username, password})
    .then(res => res.data)
    .catch(err => {
        if (err.response.state === 401) return {error: "Username taken"}
        return {error: "Register failed"}
    })



// Call to update user stats 
const update = (username, newUsername, password) => axios
    .put(`${baseUrl}/user`, {username, newUsername, password})
    .then(res => res.data)
    .catch(err => {
        if (err.response.state === 401) return {error: "User not found"}
        else return {error: "Update failed"}
    })



// Call to update coin balance

// Call to get user time?

const UserService = { login, register, update }
export default UserService

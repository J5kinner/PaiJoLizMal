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



// Call to update user info
const update = async (username, newUsername, password) => {
    let hashedPassword = await bcryptjs.hash(password, 10)
    return axios
    .put(`${baseUrl}/user`, {username, newUsername, password: hashedPassword})
    .then(res => res.data)
    .catch(err => {
        if (err.response.state === 401) return {error: "User not found"}
        else return {error: "Update failed"}
    })
}

// Call to update user stats

// Call to update coin balance

// Call to get user time?

const UserService = { login, register, update }
export default UserService

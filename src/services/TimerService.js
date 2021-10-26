/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Elizabeth Laham - @elizabetht94
 *
 */

 import axios from 'axios'
 
 const baseUrl = 'http://localhost:3001/api'

 
 const startTimer = (duration) => {
    const token = JSON.parse(localStorage.getItem('jwt'))
    const username = JSON.parse(localStorage.getItem('loggedInUser')).username
    axios
    .post(`${baseUrl}/timer`, {username, duration}, {
        headers: { Authorization: `Bearer ${token}` }})
    .then(res => res.data)
 }
 const stopTimer = () => {
    const token = JSON.parse(localStorage.getItem('jwt'))
    const username = JSON.parse(localStorage.getItem('loggedInUser')).username
    axios
    .put(`${baseUrl}/timer`, {username}, {
        headers: { Authorization: `Bearer ${token}` }})
    .then(res => res.data)
 }


const TimerService = { startTimer, stopTimer}
export default TimerService
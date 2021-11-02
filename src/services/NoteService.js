/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Elizabeth Laham - @elizabetht94
 *
 */


import axios from 'axios'

const baseUrl = '/api'

// Get all notes
const getAllNotes = () => axios
    .get(`${baseUrl}/notes`)
    .then(res => {
        return res.data})


// Get note types
const getNoteTypes = () => axios
    .get(`${baseUrl}/notes/types`)
    .then(res => {
        return res.data})


// Post new note
const postNewNote = (body, title, background) => {
    const username = JSON.parse(localStorage.getItem('loggedInUser')).username
    const token = localStorage.getItem('jwt')
    return axios
    .post(`${baseUrl}/notes`, { title, body, username, background },
    { headers: { Authorization: `Bearer ${token}` }})
    .then(res => res.data)
    .catch(err => {
        if (err.response.state === 401) return {error: "User not found"}
        else return {error: "Post failed. Title, body, or user missing "}
    })
}


const NoteService = { getAllNotes, getNoteTypes, postNewNote}
export default NoteService


import axios from 'axios'

const baseUrl = 'http://localhost:3001/api'

// Get all notes
const getAllNotes = () => axios
    .get(`${baseUrl}/notes`)
    .then(res => {
        return res.data})
    // .catch(err =>{

    //     return {error: "Could not retrieve notes"}
    // })

// Get note types
const getNoteTypes = () => axios
    .get(`${baseUrl}/notes/types`)
    .then(res => {
        return res.data})


// Post new note
const postNewNote = (body, title, background) => {
    const username = JSON.parse(localStorage.getItem('loggedInUser')).username
    return axios
    .post(`${baseUrl}/notes`, { title, body, username, background })
    .then(res => res.data)
    .catch(err => {
        if (err.response.state === 401) return {error: "User not found"}
        else return {error: "Post failed. Title, body, or user missing "}
    })
}

// Add background colour

const NoteService = { getAllNotes, getNoteTypes, postNewNote}
export default NoteService


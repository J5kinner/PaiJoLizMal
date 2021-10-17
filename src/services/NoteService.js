import axios from 'axios'

const baseUrl = 'http://localhost:3001/api'

// Get all notes
const getAllNotes = () => axios
    .get(`${baseUrl}/notes`)
    .then(res => {
        return res.data})
    // .catch(err =>{
    //     console.log("why?", err)
    //     return {error: "Could not retrieve notes"}
    // })

// Post new note
const postNewNotes = (note) => axios
    .post(`${baseUrl}/notes`, { note })
    .then(res => res.data)
    .catch(err => {
        if (err.response.state === 401) return {error: "User not found"}
        else return {error: "Post failed. Title, body, or user missing "}
    })

// Add background colour

const NoteService = { getAllNotes, postNewNotes }
export default NoteService


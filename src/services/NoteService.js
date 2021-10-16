import axios from 'axios'

// Get all notes
const getAllNotes = () => axios
    .get(`${baseUrl}/notes`)
    .then(res => res.data)
    .catch(err =>{
        return {error: "Could not retrieve notes"}
    })

// Post new note
const postNewNotes = (title, body, username, background) => axios
    .post(`${baseUrl}/notes`, {title, body, username, background})
    .then(res => res.data)
    .catch(err => {
        if (err.response.state === 401) return {error: "User not found"}
        else return {error: "Post failed. Title, body, or user missing "}
    })

// Add background colour

const NoteService = { getAllNotes, postNewNotes }
export default NoteService


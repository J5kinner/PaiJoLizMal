/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Elizabeth Laham, @J5kinner
 *
 */

import React, { useState } from 'react'
import NoteService from '../../services/NoteService'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useHistory } from 'react-router-dom'

const NoteEditor = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const background = 'white'
    const maxCharacters = 200
    const history = useHistory()

    const handleTitleChange = (newTitle) => {
        setTitle(newTitle.target.value)
    }

    const handleNoteChange = (newNote) => {
        setBody(newNote.target.value)
    }

    const redirectToHomepage = () => {
        console.log("note added", body, title, background)
        history.push('/')

    }

    const handleAddNote = () => {
        NoteService
        .postNewNote(body, title, background)
        .then(() => redirectToHomepage())
        .catch(err => console.log("there was an error"))

        
    }

    return (
      <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
     <Typography variant='h4'>
          Enter your note here!
      </Typography>  
        <FormControl sx={{ border: '5px solid red', display: 'block'}}>
          <Box sx={{padding: 2}}>  
            <TextField placeholder="Title"
             onChange={handleTitleChange}
             sx={{backgroundColor: 'white', width: 200}}/>
            </Box>
           <Box>
            <TextField
                placeholder="Enter your note here!"
                multiline
                onChange={handleNoteChange}
                minRows={10}
                maxRows={10}
                inputProps={{ maxLength: maxCharacters }}
                helperText={`${body.length}/${maxCharacters}`}
                sx={{ width: '100%', backgroundColor: 'white'}}
            />
            </Box> 
            <Button onClick={handleAddNote}>Save</Button>
        </FormControl>
        </Box>  
        
    )

}

export default NoteEditor
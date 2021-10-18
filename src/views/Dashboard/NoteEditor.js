/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Elizabeth Laham, @J5kinner
 *
 */

import React, { useState } from 'react'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const NoteEditor = () => {
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const maxCharacters = 200

    const handleTitleChange = (newTitle) => {
        setTitle(newTitle.target.value)
    }

    const handleNoteChange = (newNote) => {
        setNote(newNote.target.value)
    }

    const handleAddNote = () => {
        // handle posting note here
        alert("new note added with title:  " + title + " note: " + note )
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
                helperText={`${note.length}/${maxCharacters}`}
                sx={{ width: '100%', backgroundColor: 'white'}}
            />
            </Box> 
            <Button onClick={handleAddNote}>Save</Button>
        </FormControl>
        </Box>  
        
    )

}

export default NoteEditor
/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: 
 *
 */

import React, { useState } from 'react'
import { FormControl,
         Button, Box,
         TextField } from '@mui/material'

const NoteEditor = () => {
    const [title, setTitle] = useState(0)
    const [note, setNote] = useState(0)

    const handleTitleChange = (newTitle) => {
        setTitle(newTitle.target.value)
    }

    const handleNoteChange = (newNote) => {
        setNote(newNote.target.value)
    }

    const handleAddNote = () => {
        alert("new note added with title:  " + title + " note: " + note )
    }

    return (
      <Box sx={{width: 500, backgroundColor: '#EBE8E8' }}> 
        <FormControl sx={{display: 'block', alignItems: 'left'}}>
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
                sx={{ width: 400, backgroundColor: 'white'}}
            />
            </Box> 
            <Button onClick={handleAddNote}>Save</Button>
        </FormControl>
        </Box>  
        
    )

}

export default NoteEditor
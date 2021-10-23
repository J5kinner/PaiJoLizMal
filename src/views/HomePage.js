/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors:
 *
 */

import { React, useState, useEffect } from "react"

import Box  from "@mui/material/Box"
import Typography  from "@mui/material/Typography"

import Colours from '../assets/Colours'

import "../assets/scss/layout/App.scss"
import NoteService from "../services/NoteService"
import NotesGrid from "../components/NotesGrid"

function HomePage() {
  const [notes, setNotes] = useState([])
  
    useEffect(() => {
        NoteService.getAllNotes()
        .then(notes => {
            if (notes) {
                setNotes(notes)
            } else {
                setNotes({
                    title: "Title",
                    body: "Body",
                    username: "Username",
                    background: ""
                })
            }
        })
    },[])

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <Typography variant='title'>Rants</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography variant='title'
                    sx={{ ml: 5,
                        '&:hover': { color: Colours.carrot, },
                        '&:active': { color: Colours.rust, },
                    }}
                >
                    Filter
                </Typography>
            </Box>

            <Box sx={{ margin: { xs: 0, md: 5} }}>
                <NotesGrid notes={notes} />
            </Box>
        </div>
    );
}

export default HomePage;

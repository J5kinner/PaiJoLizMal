/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: paige anthony
 *
 */

import React from "react"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

import Note from "./Note"

const NotesGrid = ({ notes }) => {
    return (
        <Grid container
            columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            justifyContent='center'
        >
            {notes.map((note, i) => (
                <Grid key={i} item xs={1} sm={1} md={1} lg={1} xl={1}>
                    <Box sx={{ padding: 2 }}>
                        <Note note={note} />
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}

export default NotesGrid
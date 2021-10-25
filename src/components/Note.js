/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: @J5kinner
 *
 */

import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Colours from "../assets/Colours";
import '../assets/scss/components/Shop.scss'


const Note = ({ note }) => {
    return (
        <Card sx={{
            height: 200, boxShadow: 0,
            background: `${note.background ? note.background : Colours.gray}`,
        }}>
            <CardContent>
                <Box color={note.text ? note.text : 'inherit'}>
                    <Typography variant="h5" >
                        {note.title}
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="inherit">
                        {note.username}
                    </Typography>
                    <Typography variant="body2">
                        {note.body}
                        <br />
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Note
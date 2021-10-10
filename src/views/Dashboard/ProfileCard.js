/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Paige Anthony
 *
 */

import React, { useState } from 'react'
import {
    Box, Collapse,
    IconButton,
    Typography, TextField,
} from '@mui/material'
import {
    Edit as EditIcon,
    Check as CheckIcon,
    Clear as ClearIcon,
} from "@mui/icons-material"
 
const ProfileCard = ({ user }) => {
    const [editProfile, setEditProfile] = useState(false)

    /*=== BUTTON HANDLERS ===*/

    const handleEditButton = () => setEditProfile(true)

    const handleSaveButton = () => setEditProfile(false)

    const handleClearButton = () => setEditProfile(false)

    return (
        <Box>
            <Typography variant='h4'>Profile</Typography>

            <Box>
                {/* display user info */}
                <Box fullWidth sx={{
                    display: 'flex',
                    justifyContent: 'center', alignItems: 'center',
                }}>
                    <Typography variant='body1'>
                        Hello {user.name}, would you like to edit your username and password
                    </Typography>
                    <IconButton sx={{ ml: 1, display: `${editProfile ? 'none' : ''}` }}>
                        <EditIcon onClick={handleEditButton} />
                    </IconButton>
                </Box>

                <Typography variant='h6'>${user.balance}</Typography>
            </Box>

            
        </Box>
    )
 }
 
 export default ProfileCard
 
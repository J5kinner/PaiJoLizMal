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

    /*=== RENDERERS ===*/

    const renderProfileForm = (
        <Box sx={{
            width: '100%',
            display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
            {/* update user name */}
            <Box sx={{ width: '30rem', mt: 2, }}>
                <TextField fullWidth value={user.name}
                    InputLabelProps={{ shrink: true }}
                    label="userName"
                    onChange={() => console.log('updating old password')} />
            </Box>

            {/* input old password */}
            <Box sx={{ width: '30rem', mt: 2, }}>
                <TextField fullWidth
                    InputLabelProps={{ shrink: true }}
                    type='password'
                    label="oldPassword"
                    onChange={() => console.log('inputting old password')} />
            </Box>

            {/* provide new password */}
            <Box sx={{ width: '30rem', mt: 2, }}>
                <TextField fullWidth
                    InputLabelProps={{ shrink: true }}
                    type='password'
                    label="newPassword"
                    onChange={() => console.log('inputting new password')} />
            </Box>
        </Box>
    )

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
                    <IconButton sx={{ ml: 1, display: `${editProfile ? '' : 'none'}` }}>
                        <CheckIcon onClick={handleSaveButton} />
                    </IconButton>
                    <IconButton sx={{ ml: 1, display: `${editProfile ? '' : 'none'}` }}>
                        <ClearIcon onClick={handleClearButton} />
                    </IconButton>
                </Box>

                {/* display edit profile form */}
                <Collapse in={editProfile}>
                    {renderProfileForm}
                </Collapse>

                <Typography variant='h6'>${user.balance}</Typography>
            </Box>

            
        </Box>
    )
 }
 
 export default ProfileCard
 
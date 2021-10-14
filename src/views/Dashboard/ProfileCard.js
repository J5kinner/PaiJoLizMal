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
    Link as LinkButton,
    Typography, TextField,
} from '@mui/material'
import {
    Edit as EditIcon,
    Check as CheckIcon,
    Clear as ClearIcon,
} from "@mui/icons-material"
 
const ProfileCard = ({ user }) => {
    const [editProfile, setEditProfile] = useState(false)
    const [editPassword, setEditPassowrd] = useState(false)

    /*=== BUTTON HANDLERS ===*/

    const handleEditButton = () => setEditProfile(true)

    const handleSaveInfoButton = () => setEditProfile(false)

    const handleSavePasswordButton = () => setEditProfile(false)

    const handleClearButton = () => {
        setEditPassowrd(false)
        setEditProfile(false)
    }

    /*=== RENDERERS ===*/

    const renderInfoForm = (
        <Box sx={{
            width: '100%',
            display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
            {/* update user name */}
            <Box fullWidth sx={{
                    display: 'flex',
                    justifyContent: 'center', alignItems: 'center',
                }}>
                <Typography>Update username</Typography>
                <IconButton sx={{ ml: 1, display: `${editProfile ? '' : 'none'}` }}>
                    <CheckIcon onClick={handleSaveInfoButton} />
                </IconButton>
            </Box>

            <Box sx={{ width: '30rem', mt: 2, }}>
                <TextField fullWidth value={user.name}
                    InputLabelProps={{ shrink: true }}
                    label="userName"
                    onChange={() => console.log('updating old password')} />
            </Box>

            <LinkButton onClick={() => setEditPassowrd(true)}>change password?</LinkButton>
        </Box>
    )

    const renderPasswordForm = (
        <Box sx={{
            width: '100%',
            display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
            {/* input old password */}
            <Box fullWidth sx={{
                    display: 'flex',
                    justifyContent: 'center', alignItems: 'center',
                }}>
                <Typography>Update password</Typography>
                <IconButton sx={{ ml: 1,  }}>
                    <CheckIcon onClick={handleSaveInfoButton} />
                </IconButton>
            </Box>

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

            <LinkButton onClick={() => setEditPassowrd(false)}>change username?</LinkButton>
        </Box>
    )

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
                        <ClearIcon onClick={handleClearButton} />
                    </IconButton>
                </Box>

                {/* display edit profile form */}
                <Collapse in={editProfile && !editPassword}>
                    {renderInfoForm}
                </Collapse>
                <Collapse in={editProfile && editPassword}>
                    {renderPasswordForm}
                </Collapse>

                <Typography variant='h6'>${user.balance}</Typography>
            </Box>

            
        </Box>
    )
 }
 
 export default ProfileCard
 
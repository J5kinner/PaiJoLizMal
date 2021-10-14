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
    const [editMode, setEditMode] = useState(false)
    const [editPassword, setEditPassowrd] = useState(false)

    const [newUserInfo, setNewUserInfo] = useState({ username: user.name })
    const [newPasswordInfo, setNewPasswordInfo] = useState({
        oldPassword: '',
        newPassword: '',
    })

    /*=== BUTTON HANDLERS ===*/

    const handleEditButton = () => setEditMode(true)

    const handleSaveInfoButton = () => {
        console.log('send to server...', newUserInfo)

        //force clear
        handleClearButton()
    }

    const handleSavePasswordButton = () => {
        console.log('send to server...', newPasswordInfo)

        //force clear
        handleClearButton()
    }

    const handleClearButton = () => {
        setNewUserInfo({ username: user.name })
        setNewPasswordInfo({
            oldPassword: '',
            newPassword: '',
        })
        setEditPassowrd(false)
        setEditMode(false)
    }

    /*=== INPUT HANDLERS ===*/

    const handleInfoChange = name => e => {
        setNewUserInfo({
            ...newUserInfo,
            [name]: e.target.value
        })
    }

    const handlePasswordChange = name => e => {
        setNewPasswordInfo({
            ...newPasswordInfo,
            [name]: e.target.value
        })
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
                <IconButton sx={{ ml: 1, display: `${editMode ? '' : 'none'}` }}>
                    <CheckIcon onClick={handleSaveInfoButton} />
                </IconButton>
            </Box>

            <Box sx={{ width: '30rem', mt: 2, }}>
                <TextField fullWidth value={newUserInfo.username}
                    InputLabelProps={{ shrink: true }}
                    label="userName"
                    onChange={handleInfoChange('username')} />
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
                <TextField fullWidth value={newPasswordInfo.oldPassword}
                    InputLabelProps={{ shrink: true }}
                    type='password'
                    label="oldPassword"
                    onChange={handlePasswordChange('oldPassword')} />
            </Box>

            {/* provide new password */}
            <Box sx={{ width: '30rem', mt: 2, }}>
                <TextField fullWidth value={newPasswordInfo.newPassword}
                    InputLabelProps={{ shrink: true }}
                    type='password'
                    label="newPassword"
                    onChange={handlePasswordChange('newPassword')} />
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
                    <IconButton sx={{ ml: 1, display: `${editMode ? 'none' : ''}` }}>
                        <EditIcon onClick={handleEditButton} />
                    </IconButton>
                    <IconButton sx={{ ml: 1, display: `${editMode ? '' : 'none'}` }}>
                        <ClearIcon onClick={handleClearButton} />
                    </IconButton>
                </Box>

                {/* display edit profile form */}
                <Collapse in={editMode && !editPassword}>
                    {renderInfoForm}
                </Collapse>
                <Collapse in={editMode && editPassword}>
                    {renderPasswordForm}
                </Collapse>

                <Typography variant='h6'>${user.balance}</Typography>
            </Box>

            
        </Box>
    )
 }
 
 export default ProfileCard
 
/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Paige Anthony
 *
 */

import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import {default as LinkButton} from '@mui/material/Link'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import Typography from '@mui/material/Typography'

import {default as EditIcon} from '@mui/icons-material/Edit'
import {default as CheckIcon} from '@mui/icons-material/Check'
import {default as ClearIcon} from '@mui/icons-material/Clear'
import UserService from '../../services/UserService'
 
const ProfileCard = ({ user, setUsername }) => {
    const [editMode, setEditMode] = useState(false)
    const [editPassword, setEditPassowrd] = useState(false)

    const [newUserInfo, setNewUserInfo] = useState({ username: '' })
    const [newPasswordInfo, setNewPasswordInfo] = useState({
        oldPassword: '',
        newPassword: '',
    })
    
    const [inputErrors, setInputErrors] = useState(0)

    useEffect(() => {
        setNewUserInfo({ username: user.username })
    }, [ user ])

    /*=== BUTTON HANDLERS ===*/

    const handleEditButton = () => setEditMode(true)

    const handleSaveInfoButton = () => {
        //stop submit if form error identified
        if (usernameError(newUserInfo.username)) {
            setInputErrors({
                ...inputErrors,
                username: usernameError(newUserInfo.username)
            })
            return
        }
        //update user in db
        UserService
        .update(user.username, newUserInfo.username, 'test')
        .then(newUserName => {
            setUsername(newUserName.username)
            console.log(newUserName)
            console.log(newUserName.username)
        })
        .catch(err => console.log('paige note.. set a page error', err))

        //force clear
        handleClearButton()
    }

    const handleSavePasswordButton = () => {
        //stop submit if form error identified
        if (passwordError(newPasswordInfo.oldPassword) ||
            passwordError(
                newPasswordInfo.newPassword,
                newPasswordInfo.oldPassword)) {
            setInputErrors({
                ...inputErrors,
                oldPassword: passwordError(newPasswordInfo.oldPassword),
                newPassword: passwordError(
                    newPasswordInfo.newPassword,
                    newPasswordInfo.oldPassword
                )
            })
            return
        }

        //update user password in db
        UserService.update(user.username, user.username, newPasswordInfo.newPassword)
        .then(updatedUser => console.log(updatedUser))
        .catch(err => console.log('set a page error', err))

        //force clear
        handleClearButton()
    }

    const handleClearButton = () => {
        setNewUserInfo({ username: user.username })
        setNewPasswordInfo({
            oldPassword: '',
            newPassword: '',
        })
        setInputErrors(0)
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

    /*=== ERROR CHECKERS ===*/

    const usernameError = (username) => {
        if (username.length < 1) return 'username must be minimum 1 characters.'
        return false
    }

    const passwordError = (password, compare) => {
        if (password.length < 3) return 'password must be minimum 3 characters.'
        if (password===compare) return 'new password cannot equal old password.'
        return false
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
                <FormControl fullWidth error={inputErrors.username ? true : false}>
                    <TextField fullWidth error={inputErrors.username ? true : false}
                        value={newUserInfo.username}
                        InputLabelProps={{ shrink: true }}
                        label="userName"
                        onChange={handleInfoChange('username')} />
                        <FormHelperText sx={{display: `${inputErrors.username ? 'block' : 'none'}` }}>
                            {inputErrors.username}
                        </FormHelperText>
                </FormControl>
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
                    <CheckIcon onClick={handleSavePasswordButton} />
                </IconButton>
            </Box>

            <Box sx={{ width: '30rem', mt: 2, }}>
                <FormControl fullWidth error={inputErrors.oldPassword ? true : false}>
                    <TextField fullWidth error={inputErrors.oldPassword ? true : false}
                        value={newPasswordInfo.oldPassword}
                        InputLabelProps={{ shrink: true }}
                        type='password'
                        label="oldPassword"
                        onChange={handlePasswordChange('oldPassword')} />
                        <FormHelperText sx={{display: `${inputErrors.oldPassword ? 'block' : 'none'}` }}>
                            {inputErrors.oldPassword}
                        </FormHelperText>
                </FormControl>
            </Box>

            {/* provide new password */}
            <Box sx={{ width: '30rem', mt: 2, }}>
                <FormControl fullWidth error={inputErrors.newPassword ? true : false}>
                    <TextField fullWidth error={inputErrors.newPassword ? true : false}
                        value={newPasswordInfo.newPassword}
                        InputLabelProps={{ shrink: true }}
                        type='password'
                        label="newPassword"
                        onChange={handlePasswordChange('newPassword')} />
                        <FormHelperText sx={{display: `${inputErrors.newPassword ? 'block' : 'none'}` }}>
                            {inputErrors.newPassword}
                        </FormHelperText>
                </FormControl>
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
                        Hello {user.username}, would you like to edit your username and password
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
 
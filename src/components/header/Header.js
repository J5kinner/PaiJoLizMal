/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: paige anthony
 *
 */

import React, { useState } from "react"
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import { Link } from "react-router-dom"

import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import Colours from '../../assets/Colours'
import HeaderMenu from "./HeaderMenu"
import { isAuthenticated, logout } from "../../services/Authentication"

const Header = () => {
    const [menuAnchorEl, setMenuAnchorEl] = useState(null)
    const isMenuOpen = Boolean(menuAnchorEl)

    /*=== HANDLERS ===*/

    const handleMenuToggle = () => setMenuAnchorEl(!isMenuOpen)
    const handleMenuClose = () => setMenuAnchorEl(false)

    const handleLogout = () => logout(() => console.log('do nothing'))

    /*=== RENDERERS ===*/

    const renderMenu = (<HeaderMenu close={handleMenuClose} />)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed' elevation={0}
                sx={{
                    background: Colours.steel,
                    boxShadow: 'none', 
                }}
            >
                <Toolbar sx={{ color: '#000' }}>
                    <Link to="/" onClick={handleMenuClose}
                        style={{ textDecoration: 'none', padding: 1 }}
                    >
                        <Typography variant='title' color={Colours.teal}>Pai</Typography>
                        <Typography variant='title' color={Colours.mustard}>jo</Typography>
                        <Typography variant='title' color={Colours.carrot}>liz</Typography>
                        <Typography variant='title' color={Colours.rust}>mal</Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1 }}/>

                    <Box sx={{ display: { xs: 'flex', sm: 'none'} }}>
                        <IconButton size="large" onClick={handleMenuToggle}>
                            <MenuIcon sx={{
                                fill: Colours.white,
                                display: `${isMenuOpen ? 'none' : '' }`}}
                            />
                            <CloseIcon sx={{
                                fill: Colours.white,
                                display: `${isMenuOpen ? '' : 'none' }`}}
                            />
                        </IconButton>
                    </Box>

                    <Box sx={{ display: { xs: 'none', sm: 'flex'} }}>
                        <Link to="/dashboard"
                            style={{ textDecoration: 'none' }}
                        >
                            <Typography variant='h6'
                                color={Colours.white}
                                sx={{ ml: 5,
                                    '&:hover': { color: Colours.carrot, },
                                    '&:active': { color: Colours.rust, },
                                }}
                            >
                                Dashboard
                            </Typography>
                        </Link>

                        <Link to="/login"
                            onClick={handleLogout}
                            style={{ textDecoration: 'none' }}
                        >
                            <Typography variant='h6'
                                color={Colours.white}
                                sx={{ ml: 5,
                                    display: `${isAuthenticated() ? 'none' : 'block' }`,
                                    '&:hover': { color: Colours.carrot, },
                                    '&:active': { color: Colours.rust, },
                                }}
                            >
                                Login
                            </Typography>
                            <Typography variant='h6'
                                color={Colours.white}
                                sx={{ ml: 5,
                                    display: `${isAuthenticated() ? 'block' : 'none' }`,
                                    '&:hover': { color: Colours.carrot, },
                                    '&:active': { color: Colours.rust, },
                                }}
                            >
                                Logout
                            </Typography>
                        </Link>
                    </Box>
                </Toolbar>
                
                <Collapse in={isMenuOpen}
                    sx={{ display: { xs: 'block', sm: 'none' } }}>
                    {renderMenu}
                </Collapse>
            </AppBar>
        </Box>
    )
}

export default Header
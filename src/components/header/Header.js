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

import Colours from '../../assets/Colours'
import HeaderMenu from "./HeaderMenu"

const Header = () => {
    const [menuAnchorEl, setMenuAnchorEl] = useState(null)
    const isMenuOpen = Boolean(menuAnchorEl)

    /*=== HANDLERS ===*/

    const handleMenuOpen = () => setMenuAnchorEl(!isMenuOpen)

    /*=== RENDERERS ===*/

    const renderMenu = (<HeaderMenu close={handleMenuOpen} />)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed' elevation={0}
                sx={{
                    background: Colours.steel,
                    boxShadow: 'none', 
                }}
            >
                <Toolbar sx={{ color: '#000', padding: 1 }}>
                    <Link to="/"
                        style={{ textDecoration: 'none' }}
                    >
                        <Typography variant='title' color={Colours.teal}>Pai</Typography>
                        <Typography variant='title' color={Colours.mustard}>jo</Typography>
                        <Typography variant='title' color={Colours.carrot}>liz</Typography>
                        <Typography variant='title' color={Colours.rust}>mal</Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1 }}/>

                    <Box sx={{ display: { xs: 'flex', sm: 'none'} }}>
                        <IconButton size="large" onClick={handleMenuOpen}>
                            <MenuIcon sx={{ fill: Colours.white }} />
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
                            style={{ textDecoration: 'none' }}
                        >
                            <Typography variant='h6'
                                color={Colours.white}
                                sx={{ ml: 5,
                                    '&:hover': { color: Colours.carrot, },
                                    '&:active': { color: Colours.rust, },
                                }}
                            >
                                Login
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
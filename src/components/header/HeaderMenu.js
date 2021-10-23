/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: paige anthony
 *
 */
 import React from "react"
 import Box from '@mui/material/Box'
 import Typography from '@mui/material/Typography'
 import { Link } from "react-router-dom"
 
 import Colours from '../../assets/Colours'

const HeaderMenu = ({ close }) => {

    return (
        <Box sx={{ mb: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Link to="/dashboard" onClick={close}
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

            <Link to="/login" onClick={close}
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
    )
}

export default HeaderMenu
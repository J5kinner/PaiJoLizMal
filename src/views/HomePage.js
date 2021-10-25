/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors:
 *
 */

import { React, useState, useEffect } from "react"

import Box from "@mui/material/Box"
import Menu  from "@mui/material/Menu"
import MenuItem  from "@mui/material/MenuItem"
import Typography  from "@mui/material/Typography"

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import Colours from '../assets/Colours'

import "../assets/scss/layout/App.scss"
import NoteService from "../services/NoteService"
import NotesGrid from "../components/NotesGrid"

function HomePage() {
  const [notes, setNotes] = useState([])
  const [filterAnchorEl, setFilterAnchorEl] = useState(null)

  const isFilterMenuOpen = Boolean(filterAnchorEl)
  
    useEffect(() => {
        NoteService.getAllNotes()
        .then(notes => {
            if (notes) {
                setNotes(notes)
            } else {
                setNotes({
                    title: "Title",
                    body: "Body",
                    username: "Username",
                    background: ""
                })
            }
        })
    }, [])

    /*=== HANDLERS ===*/

    const handleFilterMenuToggle = () => setFilterAnchorEl(!filterAnchorEl)
    const handleFilterMenuClose = () => setFilterAnchorEl(null)

    /*=== RENDERES ===*/

    const renderFilterMenu = (
        <Menu
            anchorEl={filterAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            open={isFilterMenuOpen}
            onClose={handleFilterMenuClose}
        >
            <MenuItem onClick={handleFilterMenuClose}>Newest</MenuItem>
            <MenuItem onClick={handleFilterMenuClose}>Oldest</MenuItem>
            <MenuItem onClick={handleFilterMenuClose}>...</MenuItem>
        </Menu>
    )

    return (
        <Box>
            <Box sx={{ display: 'flex' }}>
                <Typography variant='h4'><b>Rants</b></Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box onClick={handleFilterMenuToggle} sx={{
                    display: 'flex', alignItems: 'center',
                    '&:hover': { color: Colours.carrot, },
                    '&:active': { color: Colours.rust, },
                }}>
                    <Typography variant='h4' color='inherit'
                        sx={{ display: { xs: 'none', md: 'block' } }}>
                        <b>Filter</b>
                    </Typography>
                    <KeyboardArrowDownIcon color='inherit'
                        sx={{ width: 32, height: 32, }}
                    />
                </Box>
            </Box>

            <Box sx={{ margin: { xs: 0, md: 5} }}>
                <NotesGrid notes={notes} />
            </Box>
                
            {/* render menus */}
            {renderFilterMenu}
        </Box>
    );
}

export default HomePage;

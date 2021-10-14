/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Paige Anthony
 *
 */

import React, { useEffect, useState } from "react"
import {
    Box, Modal,
    Typography,
} from '@mui/material'
 
const EarnedPopUp = ({ trigger, onClose, sessionInfo }) => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (trigger) handleOpen()
        else handleClose()
    }, [ trigger ])

    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        setOpen(false)
        onClose()
    }

    const numSuffix = (num) => {
        let endDigit = num % 10
        if (endDigit===1) return 'st'
        if (endDigit===2) return 'nd'
        if (endDigit===3) return 'rd'
        return 'st'
    }

    const timeSuffix = (time) => {
        if (time===1) return 'min'
        return 'mins'
    }

    return (
        <Box>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={{
                    position: 'absolute', top: '50%', left: '50%',
                    p: 4, transform: 'translate(-50%, -50%)',
                    width: 400, maxWidth: '90vw',
                    bgcolor: '#fff', border: '2px solid #000', boxShadow: 24,
                    textAlign: 'center',
                }}>
                    <Typography variant='h4'>
                        Congratulations
                    </Typography>
                    <Typography variant='h6'>
                        Good work on {sessionInfo.duration}
                        {timeSuffix(sessionInfo.duration)} of focused work.
                    </Typography>
                    <Typography variant='body1'>
                        You just completed your {}
                        {sessionInfo.sessionNum}{numSuffix(sessionInfo.sessionNum)} {}
                        Pomodoro session.
                    </Typography>
                    <Typography variant='h3'>
                        ${sessionInfo.earned} earned!!
                    </Typography>
                    <Typography variant='body1'>
                        Checkout the store to purchase notes.
                    </Typography>
                </Box>
            </Modal>
        </Box>
    );
}
 
export default EarnedPopUp
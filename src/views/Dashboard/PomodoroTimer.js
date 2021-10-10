/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Paige Anthony
 *
 */

import React, { useEffect, useRef, useState } from "react"
import {
    Box,
    Tabs, Tab,
    Typography,
    Button, 
} from '@mui/material'

const durationOptions = [ 60, 50, 40, 30, 20, 10 ]

const PomodoroTimer = () => {
    const [timerActive, setTimerActive] = useState(false)
    const [timerMinutes, setTimerMinutes] = useState(0)
    const [timerSeconds, setTimerSeconds] = useState(0)
    const [durationMinutes, setDurationMinutes] = useState(durationOptions[0])

    useEffect(() => {
        setTimerMinutes(durationMinutes)
        setTimerSeconds(0)
    }, [ durationMinutes ])

    const interval = useRef()

    /*=== TIME METHODS ===*/
    const minutesToMillis = minutes => minutes * 1000 * 60

    const millisToMinutes = millis =>
        Math.floor((millis % (1000 * 60 * 60)) / (1000 * 60))

    const millisToSeconds = millis =>
        Math.floor((millis % (1000 * 60)) / (1000))

    /*=== INTERVAL HANDLERS ===*/
    const startTimer = () => {
        const startTime = new Date().getTime() + minutesToMillis(durationMinutes)

        // perform timer update each second
        interval.current = setInterval(() => {
            // detirmine change in time
            const now = new Date().getTime()
            const dt = startTime - now

            const minutes = millisToMinutes(dt)
            const seconds = millisToSeconds(dt)

            // update
            if (dt <= 0) {
                // timer completed
                clearInterval(interval.current)
            } else {
                // update timer values
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        }, 1000)
    }

    /*=== BUTTON HANDLERS ===*/
    const handleStartTimer = () => {
        setTimerActive(!timerActive)
        startTimer()
    }

    const handleStopTimer = () => {
        clearInterval(interval.current)
        setTimerActive(!timerActive)
        setTimerMinutes(durationMinutes)
        setTimerSeconds(0)
    }

    const handleDurationChange = (e, time) => {
        setDurationMinutes(time)
    }

    const displayMinutes = timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes
    const displaySeconds= timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds

    return (
        <Box>
            {/* timer display */}
            <Box>
                <Typography variant='h4'>Timer</Typography>
                <Typography variant='h2'>
                    {displayMinutes} : {displaySeconds}
                </Typography>
                <Button onClick={timerActive
                    ? () => handleStopTimer()
                    : () => handleStartTimer()}
                >
                    {timerActive ? 'stop' : 'start'}
                </Button>
            </Box>

            {/* time selection area */}
            <Box sx={{
                maxWidth: '100%',
                padding: 2,
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Tabs
                    value={durationMinutes}
                    onChange={handleDurationChange}
                    variant='scrollable'
                    scrollButtons='auto'
                >
                    {durationOptions.map((time, i) =>
                        <Tab id={i} value={time} label={time}
                            disabled={timerActive}/>
                    )}
                </Tabs>
            </Box>
        </Box>
    )
}

export default PomodoroTimer;
 
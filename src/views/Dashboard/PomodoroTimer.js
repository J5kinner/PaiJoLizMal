/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Paige Anthony
 *
 */

 import React, { useEffect, useRef, useState } from "react"

import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

 import EarnedPopUp from "./EarnedPopUp"
 import ErrorPopUp from "./ErrorPopUp"
 
 const durationOptions = [ 60, 50, 40, 30, 20, 10, 1 ]
 
 const PomodoroTimer = ({ setUserBalance }) => {
     const [openErrorPopUp, setOpenErrorPopUp] = useState(false)
     const [errorMsg, setErrorMsg] = useState(0)
 
     const [timerActive, setTimerActive] = useState(false)
     const [timerMinutes, setTimerMinutes] = useState(0)
     const [timerSeconds, setTimerSeconds] = useState(0)
     const [durationMinutes, setDurationMinutes] = useState(durationOptions[0])
 
     const [sessionInfo, setSessionInfo] = useState(0)    
     const [openEarnedPopUp, setOpenEarnedPopUp] = useState(false)
 
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
 
         console.log('initialise timer sesson')
         console.log('send start time and duration to server')
         console.log('count down ...')
 
         // perform timer update each second
         interval.current = setInterval(() => {
             // detirmine change in time
             const now = new Date().getTime()
             const dt = startTime - now
 
             const minutes = millisToMinutes(dt)
             const seconds = millisToSeconds(dt)
 
             // update
             if (dt <= 0) {
                 // timer completed, reset state
                 clearInterval(interval.current)
                 setTimerActive(false)
                 setTimerMinutes(durationMinutes)
                 setTimerSeconds(0)
 
                 console.log('end sesson')
                 console.log('send end time to server ...')
                 console.log('server handles check, then transaction')
                 console.log('recieve success back from server')
                 console.log('response provides transaction info')
 
                 //if response is fail
                 if (false) {
                     setErrorMsg('Oops! Your session was invalid.')
                     setOpenErrorPopUp(true)
                     return
                 }
                 
                 //if response success, get this info from server response
                 let updatedSessionNum = 30
                 let updatedUserBalance = 100
 
                 //update user and session information
                 let amountEarned = setUserBalance(updatedUserBalance)
                 setSessionInfo({
                     sessionNum: updatedSessionNum,
                     duration: durationMinutes,
                     earned: amountEarned,
                 })
                 //trigger popup
                 setOpenEarnedPopUp(true)
 
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
 
     const handleDurationChange = (e, time) => setDurationMinutes(time)
 
     /*=== DISPLAY HELPERS ===*/
 
     const displayMinutes = timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes
     const displaySeconds= timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds
 
     const handleCloseErrorPopUp = () => {
         setOpenErrorPopUp(false)
         setErrorMsg(0)
     }
 
     const handleCloseEarnedPopUp = () => {
         setOpenEarnedPopUp(false)
         setSessionInfo(0)
     }
 
     return (
         <Box>
             {/* popup displays */}
             <EarnedPopUp trigger={openEarnedPopUp} onClose={handleCloseEarnedPopUp}
                 sessionInfo={sessionInfo} />
             <ErrorPopUp trigger={openErrorPopUp} onClose={handleCloseErrorPopUp}
                 errorMsg={errorMsg} />
 
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
                         <Tab key={i} value={time} label={time}
                             disabled={timerActive}/>
                     )}
                 </Tabs>
             </Box>
         </Box>
     )
 }
 
 export default PomodoroTimer;
  
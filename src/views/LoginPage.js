/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Elizabeth Laham - @elizabetht94
 *
 */

import { React, useState }  from "react";
import { Box, Collapse,
         TextField, Button,
         FormControl} from '@mui/material'

const LoginPage = () => {
  // States to manage the form handling
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // State to manage toggling between login/signup form
  const [loginMode, setLoginMode] = useState (true)

  const toggleForm = () => {
    if(loginMode) {
      setLoginMode(false)
    } else {
      setLoginMode(true)
    }
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleLogin = () => {
    // TODO: handle login request here
    alert("Log in button pressed")
  }

  const handleSignup = () => {
    //TODO: handle sign up request here
    alert("Sign up button pressed")

  }

  const renderLoginForm = (
    <Box>
      <FormControl>
        <Box>
          <TextField label="Username"
              required
              onChange={handleUsernameChange}
              sx={{backgroundColor: 'white'}}/>
        </Box>
        <Box>
          <TextField label="Password"
              required
              type="password"
              onChange={handlePasswordChange}
              sx={{backgroundColor: 'white'}}/>
        </Box>
        <Box>
          <Button onClick={handleLogin}>Log In</Button>
        </Box>
      </FormControl>

    </Box>

  )

  const renderSignUpForm = (
    <Box>
    <FormControl>
      <Box>
        <TextField label="Username"
            required
            onChange={handleUsernameChange}
            sx={{backgroundColor: 'white'}}/>
      </Box>    
      <Box>
        <TextField label="Password"
            required
            type="password"
            onChange={handlePasswordChange}
            sx={{backgroundColor: 'white'}}/>
      </Box>
      <Box>
        <TextField label=" Confirm Password"
            required
            type="password"
            onChange={handleConfirmPasswordChange}
            sx={{backgroundColor: 'white'}}/>
      </Box>
      <Box>
        <Button onClick={handleSignup}>Create Account</Button>
      </Box>
    </FormControl>

  </Box>
  )


  return (
    <div>
      <h1>Login page</h1> 
      {/* Log in form */}
      <Box>
        <Collapse in={loginMode}>
          <Box>
          <h3>Log in to your Paijolizmal account</h3>
            {renderLoginForm}
            <Button onClick={toggleForm}>Don't have an account? Sign up</Button>
          </Box>
        </Collapse>

        {/* Sign up form */}
        <Collapse in={!loginMode}>
        <h3> Create an account with Paijolizmal</h3>
          {renderSignUpForm}
          <Button onClick={toggleForm}>Have an account? Log in</Button>
        </Collapse>
        
      </Box>
    </div>
  )
}

export default LoginPage;

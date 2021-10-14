/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Elizabeth Laham - @elizabetht94
 *
 */

import { React, useState }  from "react";
import UserService from "../services/UserService";
import { Box, Collapse,
         TextField, Button,
         FormControl,
         FormHelperText,
         Alert, CircularProgress} from '@mui/material'

const LoginPage = () => {
  const [user, setUser] = useState(null)
  // States to manage the form handling
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // State to manage toggling between login/signup form
  const [loginMode, setLoginMode] = useState(true)

  // States to manage errors / messages
  const [validateFormError, setValidateFormError] = useState(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)
  const [loginError, setLoginError] = useState(false)
  const [successSignUp, setSuccessSignUp] = useState(false)
  const [successLogin, setSuccessLogin] = useState(false)
  
  // Control wheely-spinny-thing
  const [loading, setLoading] = useState(false)

  const toggleForm = () => {
    // Reset field states 
    setUsername("")
    setPassword("")
    setConfirmPassword("")
    setValidateFormError(false)
    setConfirmPasswordError(false)
    setSuccessSignUp(false)
    setLoginError(false)
    setLoading(false)
    setSuccessLogin(false)

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

  const validateLogInForm = () => {
    // TODO: Handle incorrect credentials give
    if(!username || !password) {
      setValidateFormError(true)
    } else {
      // No errors found
      setValidateFormError(false)
      setLoading(true)
      handleLogin()
    }
  }

  const handleLogin = async () => {
      const user = await UserService.login(username, password)
      setUser(user)
      if (!user.error) {
        setUsername('')
        setPassword('')
        setLoading(false)
        setLoginError(false)
        setSuccessLogin(true)
        window.localStorage.setItem('loggedInUser', JSON.stringify(user)) 
      } else {
        setLoading(false)
        setLoginError(true)
      }
      
  }

  const displaySuccessSignUp = (
    <Alert severity="success" sx={{ display: successSignUp ? 'flex' : 'none' }}> 
    Account created successfully!</Alert>
  )

  const validateSignUpForm = () => {
    // We only want one error to display at one time
   if(!username || !password || !confirmPassword) {
        setValidateFormError(true)
        setConfirmPasswordError(false)
        setSuccessSignUp(false)
    } else if (password !== confirmPassword) {
        setConfirmPasswordError(true)
        setValidateFormError(false)
        setSuccessSignUp(false)
    } else {
      // No errors found, okay to proceed to register
      setValidateFormError(false)
      setConfirmPasswordError(false)
      setSuccessSignUp(true)
      handleSignup()
    }
  }

  const handleSignup = () => {  
    //TODO: handle sign up request here
    // Sign up complete
    setUsername("")
    setPassword("")
    setConfirmPassword("")
  }

  const renderLoginForm = (
    <Box>
      <FormControl>
        <Box sx={{padding:2}}>
          <TextField id="userName" label="Username"
              value={username}
              onChange={handleUsernameChange}
              sx={{backgroundColor: 'white'}}/>
        </Box>
        <Box>
          <TextField label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              sx={{backgroundColor: 'white'}}/>
        </Box>
        <Box>
        <FormHelperText error={validateFormError} sx={{display: `${validateFormError ? 'block' : 'none'}`}}>
            Please ensure all fields have been completed.
        </FormHelperText>
        <FormHelperText error={loginError} sx={{display: `${loginError ? 'block' : 'none'}`}}>
            Failed login. Please check your credentials are correct.
        </FormHelperText>
          <Button onClick={validateLogInForm}>Log In
          </Button>
          {loading && (
          <CircularProgress
            size={16}
          />
        )}
        </Box>
      </FormControl>

    </Box>

  )

  const renderSignUpForm = (
    <Box>
    <FormControl>
      <Box sx={{padding: 2}}>
        <TextField label="Username"
            onChange={handleUsernameChange}
            value={username}
            sx={{backgroundColor: 'white'}}/>
      </Box>    
      <Box sx={{padding: 0}}>
        <TextField label="Password"
            type="password"
            onChange={handlePasswordChange}
            value={password}
            error={confirmPasswordError}
            sx={{backgroundColor: 'white'}}/>
      </Box>
      <Box sx={{padding: 2}}>
        <TextField label=" Confirm Password"
            type="password"
            value={confirmPassword}
            error={confirmPasswordError}
            helperText={confirmPasswordError ? 'Passwords do not match.': ''}
            onChange={handleConfirmPasswordChange}
            sx={{backgroundColor: 'white'}}/>
      </Box>
      <Box>
        <FormHelperText error={validateFormError} sx={{display: `${validateFormError ? 'block' : 'none'}`}}>
            Please ensure all fields have been completed.
        </FormHelperText>
        <Button onClick={validateSignUpForm}>Create Account</Button>
        {displaySuccessSignUp}
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

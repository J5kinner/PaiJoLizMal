/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Elizabeth Laham - @elizabetht94
 *
 */

import { React, useState }  from "react"

import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'

import { Redirect } from "react-router-dom"
import { login, authenticate, isAuthenticated, register } from '../services/Authentication'

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

  const redirectUser = () => {
    if(successLogin && isAuthenticated) {
      return(
        <Redirect to={{
          pathname: "/dashboard"
        }}/>
      )
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
    if(!username || !password) {
      setValidateFormError(true)
    } else {
      // No errors found
      setValidateFormError(false)
      setLoading(true)
      handleLogin()
    }
  }

  const handleLogin = () => {
      login(username, password)
      .then((user) => {
      //setUser(user)
      console.log(user)
      if (!user.error) {
        console.log(1)
        setUsername('')
        console.log(2)
        setPassword('')
        console.log(3)
        setLoading(false)
        console.log(4)
        setLoginError(false)
        console.log(5)
        setSuccessLogin(true)
        console.log(6)
        authenticate(user, () => {
          setUser(user)
        })
        console.log('MADE IT')
        
      } else {
        setLoading(false)
        setLoginError(true)

      }
    })
      
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
    register(username, password)
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
      {redirectUser()}
    </div>
  )
}

export default LoginPage;

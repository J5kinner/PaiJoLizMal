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
import Btn from '../components/Btn'
import { Redirect } from "react-router-dom"
import { login, authenticate, isAuthenticated, register } from '../services/Authentication'
import  Typography from "@mui/material/Typography"

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
      if (!user.error) {
        setUsername('')
        setPassword('')
        setLoading(false)
        setLoginError(false)
        setSuccessLogin(true)
        authenticate(user, () => {
          setUser(user)
        })
        
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
    <Box sx={{maxWidth: '250px', minHeight:'320px'}}>
      <FormControl>
        <Box sx={{padding:'2px', marginTop:'30px'}}>
          <TextField id="userName" label="Username"
              value={username}
              onChange={handleUsernameChange}
              sx={{backgroundColor: 'white'}}/>
        </Box>
        <Box sx={{padding:'2px'}}>
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
          <Box sx={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center', marginTop:'50px'}}>
            <Btn text="Log in" class="logInButton" handler={validateLogInForm}/>
            {loading && (
            <CircularProgress
              size={20} 
              sx={{padding: '2px', marginTop: '10px'}}
            />
        )}
          </Box>
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
    <Box sx={{display: 'flex',
    justifyContent: 'center', flexDirection:'column',
     alignItems: 'center'}}>
      {/* Log in form */}
      <Box sx={{maxWidth: '340px'}}>
        <Collapse in={loginMode}>
          <Box sx={{borderStyle: 'solid', borderWidth:'0.01px', borderRadius:'5px'}}>
            <Box sx={{ backgroundColor: '#2A9D8F', padding: '2px', borderBottom: 'solid', borderRadius:'5px', borderWidth: '0.01px'}}>
              <Box sx={{padding: '10px', marginTop:'25px'}}>
                <Typography align='left' variant='h4'sx={{color: 'white'}} ><b> Welcome <br /> Back</b></Typography>
              </Box>
              <Box sx={{padding: '5px', paddingLeft: '10px'}}>
                  <Typography align='left' variant='h6'sx={{color: 'white'}}>Hi, kindly sign in below</Typography>
              </Box>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection:'column',
                      alignItems: 'center'}}>
            {renderLoginForm}
            <p>Don't have an account? 
            <Button onClick={toggleForm} sx={{color: 'orange'}}>Sign up</Button></p>
            </Box>
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
    </Box>
  )
}

export default LoginPage;

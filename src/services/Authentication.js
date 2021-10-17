/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Elizabeth Laham 
 *          Paige Anthony 
 *
 */

import UserService from "./UserService";
import { useHistory } from "react-router-dom"

/*
    register new user to the system
*/
export const register = (username, password) => {
    return (
        UserService
        .register(username, password)
        .then(newUser => newUser)
    )
}

/*
    login user to personal session
*/
export const login = (username, password) => {
    return (
        UserService
        .login(username, password)
        .then(user => user)
    )
}

/*
    initiate user session loggin in user session
*/
export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', data.token)
        // Uncomment once we have getUser route
        // localStorage.setItem('loggedInUser', JSON.stringify({username: data.user.username}))
        localStorage.setItem('loggedInUser', JSON.stringify({user: data.user}))
        next();
        window.location.reload()
    }
};

/*
    update logged in user password
*/
export const updatePassword = (oldPassword, newPassword) => {
    const history = useHistory()
    if(typeof window !== 'undefined') {
        user = localStorage.getItem('loggedInUser', user.username)
        UserService
        .updatePassword(user, oldPassword, newPassword)

    }
}

/*
    update logged in user password
*/
export const updateUsername = (oldUsername, newUsername) => {
    const history = useHistory()
    if(typeof window !== 'undefined') {
        UserService
        .updateUsername(oldUsername, newUsername)
        alert("User updated, logging you out.")
        logout(() => history.push('/login'))
    }
}

/*
    cancel user session logging out user
*/
export const logout = next => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt')
        localStorage.removeItem('loggedInUser')
        next()
        window.location.reload()
    }
}

/*
    check if a user session is active
        loggedin => current user data
        no session => false
*/
export const isAuthenticated = () => {
    if (typeof window == 'undefined')
        return false

    if (localStorage.getItem('jwt'))
        //return JSON.parse(localStorage.getItem('jwt'));
        return JSON.parse(localStorage.getItem('loggedInUser'));

    return false;
}

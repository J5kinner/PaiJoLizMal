/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: @J5kinner
 *
 */

 import React from "react";
 import { Route, Redirect } from "react-router-dom";
 import { isAuthenticated } from "../services/Authentication";
 
 const PrivateRoute = ({ component: Component, ...rest }) => (
   <Route
     {...rest}
     render={(props) =>
       isAuthenticated() ? (
         <Component {...props} {...rest} />
       ) : (
         <Redirect
           to={{
             pathname: "/login",
             state: { from: props.location },
           }}
         />
       )
     }
   />
 );

 export default PrivateRoute;

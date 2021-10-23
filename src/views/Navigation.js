/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: @J5kinner
 *
 */

import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Box from '@mui/material/Box'
import "../assets/scss/layout/App.scss";
import { isAuthenticated, logout } from "../services/Authentication";
import DashboardPage from "./Dashboard/DashboardPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import AuthRoute from "./AuthRoute";
import SignUpPage from "./SignUpPage";
import Header from "../components/header/Header";

export default function Navigation() {
  const [user, setUser] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      setUser(isAuthenticated());
    } else {
      setUser(false);
    }
  }, []);

  const logoutHandler = () => history.push("/login");

  return (
    <div className="App">
        <Header />

        <Box sx={{ mt: 10 }}>
            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <AuthRoute
                path="/dashboard"
                component={DashboardPage}
                user={user}
                setUser={setUser}
                exact
            />
            </Switch>
        </Box>
    </div>
  );
}

// You can think of these components as "pages"
// in your app.

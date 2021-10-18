/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: @J5kinner
 *
 */

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "../assets/scss/layout/App.scss";
import { isAuthenticated, logout } from "../services/Authentication";
import DashboardPage from "./Dashboard/DashboardPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

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
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Paijolizmal</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {user && (
            <li>
              <button onClick={() => logout(logoutHandler)}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/dashboard">
          <DashboardPage user={user} setUser={setUser} />
        </Route>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </div>
  );
}

// You can think of these components as "pages"
// in your app.

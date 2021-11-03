/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors:
 *
 */

import "./assets/scss/layout/App.scss";
import Navigation from "./views/Navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Colours from "./assets/Colours";

import { BrowserRouter as Router } from "react-router-dom";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: Colours.teal,
    },
  },
  typography: {
    title: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      fontWeight: "800",
      fontSize: "2rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={outerTheme || ""}>
    <div className="App">
      <Router>
        <Navigation />
      </Router>
    </div>
     </ThemeProvider>
  );
}

export default App;

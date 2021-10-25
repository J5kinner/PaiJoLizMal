/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors:
 *
 */

import React from "react";
import ReactDOM from "react-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles'

import "./assets/scss/layout/index.scss"
import App from "./App"
import Colours from "./assets/Colours";

const outerTheme = createTheme({
    palette: {
        primary: {
            main: Colours.teal,
        },
    },
    typography: {
        title: {
            fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
            fontWeight: '800',
            fontSize: '2rem',
            lineHeight: 1.2,
            letterSpacing: '-0.00833em'
        }
    }
  })

ReactDOM.render(
    <ThemeProvider theme={outerTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
)

/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors:
 *
 */

import React from "react";
import Note from "../components/Note";
import "../assets/scss/layout/App.scss"

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="note-space">
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
 
      </div>
    </div>
  );
}

export default HomePage;

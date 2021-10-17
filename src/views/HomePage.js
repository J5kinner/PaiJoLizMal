/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors:
 *
 */

import { React, useState, useEffect } from "react";
import Note from "../components/Note";
import "../assets/scss/layout/App.scss"
import NoteService from "../services/NoteService";

function HomePage() {
  const [notes, setNotes] = useState([])
  
  useEffect(() => {
    NoteService.getAllNotes()
    .then(notes => {
      if (notes) {
        setNotes(notes)
      } else {
      setNotes({
        title: "Title",
        body: "Body",
        username: "Username",
        background: ""
      })
    }
  })
  },[])
  console.log(notes)
  return (
    <div>
      <h1>Home Page</h1>
      <div className="note-space">
      {notes.map((note) => 
          <Note note={note}/>
      )}
      </div>
    </div>
  );
}

export default HomePage;

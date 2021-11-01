/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Elizabeth Laham, @J5kinner
 *
 */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import NoteService from "../../services/NoteService";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ErrorPopUp from "../../views/Dashboard/ErrorPopUp.js";
import "../../assets/scss/components/Shop.scss";


const NoteEditor = ({ noteColor, svgTitle, type, user, price }) => {
  const [coins, setCoins] = useState(0);
  const [title, setTitle] = useState("");        
  const [body, setBody] = useState("");
  const [openErrorPopUp, setOpenErrorPopUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState(0);
  const [errorText, setErrorText] = useState(0);

  const background = type;
  const maxCharacters = 200;
  const history = useHistory();

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle.target.value);
  };

  const handleNoteChange = (newNote) => {
    setBody(newNote.target.value);
  };

  const redirectToHomepage = () => {
    console.log("note added", body, title, background);
    history.push("/");
  };

  const handleAddNote = () => {
    if (user.coins >= price) {
      setCoins(user.coins);
      const postPurchaseCoins = coins - price;
      setCoins(postPurchaseCoins);
      NoteService.postNewNote(body, title, background)
        .then(() => redirectToHomepage())
        .catch((err) => console.log("there was an error"));
    } if(title === "" || body ==="") {
      setErrorMsg("Accidently left a piece of the note blank!");
      setErrorText(
        "Please fill out both the title and note body and try again"
      );
      setOpenErrorPopUp(true);
    } else {
      setErrorMsg("Insufficient Coins");
      setErrorText(
        "You don't have enough coins to unlock this note. Try the timer with less time to earn coins faster!"
      );
      setOpenErrorPopUp(true);
    }
  };

  //handleConfirm
  const handleCloseLowCoinsPopUp = () => {
    setOpenErrorPopUp(false);
    setErrorMsg(0);
  };

  return (
    <div className="note-editor">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ErrorPopUp
          trigger={openErrorPopUp}
          onClose={handleCloseLowCoinsPopUp}
          errorMsg={errorMsg}
          errorText={errorText}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: "2em",
            marginLeft: "-10em",
          }}
        >
          <Typography variant="h2" color="white">
            {svgTitle}
          </Typography>
          <Typography variant="h3" color="white">
            {price} coins
          </Typography>
        </Box>
        <FormControl sx={{ border: noteColor, display: "block" }}>
          <Box className="textTitleInput">
            <TextField
              label="Note Title"
              placeholder=""
              onChange={handleTitleChange}
            />

          </Box>
          <Box className="textInput">
       
            <TextField
              id="outlined-multiline-static"
              label="Enter your note here!"
              multiline
              onChange={handleNoteChange}
              minRows={4}
              maxRows={10}
              inputProps={{ maxLength: maxCharacters }}
              helperText={`${body.length}/${maxCharacters}`}
            />
          </Box>
          <Button variant="contained" onClick={handleAddNote}>
            Submit
          </Button>
        </FormControl>
      </Box>
    </div>
  );
};

export default NoteEditor;

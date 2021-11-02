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
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

import "../../assets/scss/components/Shop.scss";

const NoteEditor = ({ noteColor, svgTitle, type, user, price }) => {
  const [coins, setCoins] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [openErrorPopUp, setOpenErrorPopUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState(0);
  const [errorText, setErrorText] = useState(0);
  const [checked, setChecked] = useState(false);

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

  const handleShowSubmit = () => {
    if (title === "" || body === "") {
      setErrorMsg("Oh no! a part of your note is blank!");
      setErrorText("Please fill out title and body and try again");
      setOpenErrorPopUp(true);
      setChecked(false);
      console.log("checked changed here to false");
    } else if (!checked) {
      setChecked(true);
      console.log("checked changed here to true");
    } else {
      setChecked(false);
      console.log("checked changed here to false");
    }
  };

  const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: theme.status.danger,
    "&.Mui-checked": {
      color: theme.status.danger,
    },
  }));

  const theme = createTheme({
    status: {
      danger: blue[500],
    },
  });

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
        <FormControl sx={{ border: "white", display: "block" }}>
          <Box className="textTitleInput">
            <TextField
              label="Note Title"
              placeholder=""
              inputProps={{ maxLength: 36}}
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
              sx={{
                multilineColor: {
                  color: "red",
                },
              }}
            />
          </Box>
          <ThemeProvider theme={theme}>
            <strong>Are you sure?</strong>
            <CustomCheckbox defaultUnChecked onClick={handleShowSubmit} />
          </ThemeProvider>
          {checked ? (
            <Button variant="contained" onClick={handleAddNote}>
              Submit
            </Button>
          ) : null}
        </FormControl>
      </Box>
    </div>
  );
};

export default NoteEditor;

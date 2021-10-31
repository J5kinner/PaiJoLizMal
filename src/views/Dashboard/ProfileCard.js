/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Paige Anthony
 *
 */

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { default as LinkButton } from "@mui/material/Link";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";

import CheckIcon from "@mui/icons-material/Check";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import UserService from "../../services/UserService";
import { logout } from "../../services/Authentication";
import Colours from "../../assets/Colours";
import { Button } from "@mui/material";

const ProfileCard = ({ user, setUsername }) => {
  const [editMode, setEditMode] = useState(false);
  const [editPassword, setEditPassowrd] = useState(false);

  const [newUserInfo, setNewUserInfo] = useState({ username: "" });
  const [newPasswordInfo, setNewPasswordInfo] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [inputErrors, setInputErrors] = useState(0);

  const history = useHistory();

  useEffect(() => {
    setNewUserInfo({ username: user.username });
  }, [user]);

  /*=== BUTTON HANDLERS ===*/

  const handleEditButton = () => setEditMode(true);

  const handleSaveInfoButton = () => {
    //stop submit if form error identified
    if (usernameError(newUserInfo.username)) {
      setInputErrors({
        ...inputErrors,
        username: usernameError(newUserInfo.username),
      });
      return;
    }

    //TODO
    //add alert to user that logout is required upon username change

    //update user in db
    UserService.updateUsername(user.username, newUserInfo.username)
      .then(logout(() => history.push("/login")))
      .catch((err) => console.log("set a page error", err));

    //force clear
    handleClearButton();
  };

  const handleSavePasswordButton = () => {
    //stop submit if form error identified
    if (
      passwordError(newPasswordInfo.oldPassword) ||
      passwordError(newPasswordInfo.newPassword, newPasswordInfo.oldPassword)
    ) {
      setInputErrors({
        ...inputErrors,
        oldPassword: passwordError(newPasswordInfo.oldPassword),
        newPassword: passwordError(
          newPasswordInfo.newPassword,
          newPasswordInfo.oldPassword
        ),
      });
      return;
    }

    //update user password in db
    UserService.updatePassword(
      newPasswordInfo.oldPassword,
      newPasswordInfo.newPassword
    ).catch((err) => console.log("set a page error", err));

    //force clear
    handleClearButton();
  };

  const handleClearButton = () => {
    setNewUserInfo({ username: user.username });
    setNewPasswordInfo({
      oldPassword: "",
      newPassword: "",
    });
    setInputErrors(0);
    setEditPassowrd(false);
    setEditMode(false);
  };

  /*=== INPUT HANDLERS ===*/

  const handleInfoChange = (name) => (e) => {
    setNewUserInfo({
      ...newUserInfo,
      [name]: e.target.value,
    });
  };

  const handlePasswordChange = (name) => (e) => {
    setNewPasswordInfo({
      ...newPasswordInfo,
      [name]: e.target.value,
    });
  };

  /*=== ERROR CHECKERS ===*/

  const usernameError = (username) => {
    if (username.length < 1) return "username must be minimum 1 characters.";
    return false;
  };

  const passwordError = (password, compare) => {
    if (password.length < 3) return "password must be minimum 3 characters.";
    if (password === compare) return "new password cannot equal old password.";
    return false;
  };

  /*=== RENDERERS ===*/

  const renderInfoForm = (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* input old password */}
      <Box
        fullWidth
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Update username</Typography>
        <IconButton
          color="inherit"
          sx={{ ml: 1 }}
          onClick={handleSaveInfoButton}
        >
          <CheckIcon />
        </IconButton>
      </Box>

      <Box sx={{ width: "100%", mt: 2 }}>
        <FormControl fullWidth error={inputErrors.username ? true : false}>
          <TextField
            fullWidth
            error={inputErrors.username ? true : false}
            value={newUserInfo.username}
            InputLabelProps={{ shrink: true }}
            label="user name"
            onChange={handleInfoChange("username")}
          />
          <FormHelperText
            sx={{ display: `${inputErrors.username ? "block" : "none"}` }}
          >
            {inputErrors.username}
          </FormHelperText>
        </FormControl>
      </Box>

      <LinkButton onClick={() => setEditPassowrd(true)}>
        change password?
      </LinkButton>
    </Box>
  );

  const renderPasswordForm = (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* input old password */}
      <Box
        fullWidth
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Update password</Typography>
        <IconButton
          color="inherit"
          sx={{ ml: 1 }}
          onClick={handleSavePasswordButton}
        >
          <CheckIcon />
        </IconButton>
      </Box>

      {/* provide old password */}
      <Box sx={{ width: "100%", mt: 2 }}>
        <FormControl fullWidth error={inputErrors.oldPassword ? true : false}>
          <TextField
            fullWidth
            error={inputErrors.oldPassword ? true : false}
            value={newPasswordInfo.oldPassword}
            InputLabelProps={{ shrink: true }}
            type="password"
            label="oldPassword"
            onChange={handlePasswordChange("oldPassword")}
          />
          <FormHelperText
            sx={{ display: `${inputErrors.oldPassword ? "block" : "none"}` }}
          >
            {inputErrors.oldPassword}
          </FormHelperText>
        </FormControl>
      </Box>

      {/* provide new password */}
      <Box sx={{ width: "100%", mt: 2 }}>
        <FormControl fullWidth error={inputErrors.newPassword ? true : false}>
          <TextField
            fullWidth
            error={inputErrors.newPassword ? true : false}
            value={newPasswordInfo.newPassword}
            InputLabelProps={{ shrink: true }}
            type="password"
            label="newPassword"
            onChange={handlePasswordChange("newPassword")}
          />
          <FormHelperText
            sx={{ display: `${inputErrors.newPassword ? "block" : "none"}` }}
          >
            {inputErrors.newPassword}
          </FormHelperText>
        </FormControl>
      </Box>

      <LinkButton onClick={() => setEditPassowrd(false)}>
        change username?
      </LinkButton>
    </Box>
  );

  return (
    <Box
      color={Colours.white}
      sx={{
        padding: 2,
        borderRadius: 3,
        background: Colours.steel,
      }}
    >
      {/* user info display */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          alignItems: "flex-start",
        }}
      >
        <Typography textAlign="left" variant="h4" color="inherit">
          Intro
        </Typography>
        <Typography textAlign="left" variant="body1" color="inherit">
          Hello there, {user.username} (emoji)
        </Typography>
        <Typography textAlign="left" variant="body1" color="inherit">
          Bank = {user.coins} coins available
        </Typography>

        <Box sx={{ mt: 2, mb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleEditButton}
            sx={{ display: `${editMode ? "none" : ""}` }}
          >
            edit name/password
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClearButton}
            sx={{ display: `${editMode ? "" : "none"}` }}
          >
            cancel
          </Button>
        </Box>

        {/* display edit profile form */}
        <Collapse sx={{ width: "100%" }} in={editMode && !editPassword}>
          {renderInfoForm}
        </Collapse>
        <Collapse sx={{ width: "100%" }} in={editMode && editPassword}>
          {renderPasswordForm}
        </Collapse>
      </Box>

      {/* stats display */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h4" color="inherit">
          Stats
        </Typography>
        <Box
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignitems: "center",
          }}
        >
          <AccessTimeIcon />
          <Typography textAlign="left" variant="body1" color="inherit">
            100 HR (total time)
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignitems: "center",
          }}
        >
          <ChatBubbleOutlineIcon />
          <Typography textAlign="left" variant="body1" color="inherit">
            5 RANTS (total posts)
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignitems: "center",
          }}
        >
          <EmojiEventsIcon />
          <Typography textAlign="left" variant="body1" color="inherit">
            60 COINS (most earnings)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileCard;

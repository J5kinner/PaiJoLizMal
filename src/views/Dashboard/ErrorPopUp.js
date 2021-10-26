/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Paige Anthony
 *
 */

import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const ErrorPopUp = ({ trigger, onClose, errorMsg }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (trigger) handleOpen();
    else handleClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            p: 4,
            transform: "translate(-50%, -50%)",
            width: 400,
            maxWidth: "90vw",
            bgcolor: "#fff",
            border: "2px solid #000",
            boxShadow: 24,
            textAlign: "center",
          }}
        >
          <Typography variant="h6">{errorMsg}</Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default ErrorPopUp;

/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: @J5kinner
 *
 */

import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../assets/scss/components/Shop.scss'


const Note = ({note}) => {
  console.log("hello", note)
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className={"shop-item shop-item-" + note.background}>
        <Typography variant="h5" >
          {note.title}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {note.username}
        </Typography>
        <Typography variant="body2">
          {note.body}
          <br />
        </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default Note;


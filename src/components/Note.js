/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: @J5kinner
 *
 */

import { React, useState} from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Colours from "../assets/Colours";
import "../assets/scss/components/Note.scss";


const Note = ({ note }) => {
  const [background, setBackground] = useState('')
  const DARK_GREEN = '#264653'
  const GREEN = '#2a9d8f'
  const YELLOW = '#e9c46a'
  const LIGHT_ORANGE = '#f4a261'
  const ORANGE = '#e76f51'

  return (
    <div className="blob-background">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"  height="300" width="300">
        <g>
          <svg
            className="blobs"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill = {DARK_GREEN}
              d="M44.9,-75.5C57.4,-70.6,66.1,-56.9,74.2,-42.8C82.3,-28.8,89.7,-14.4,88,-1C86.2,12.3,75.2,24.7,64.7,34.6C54.2,44.4,44.2,51.8,33.5,57.5C22.8,63.2,11.4,67.2,-1.6,70C-14.6,72.8,-29.2,74.4,-41.6,69.6C-54,64.9,-64.2,54,-71.2,41.3C-78.1,28.7,-81.7,14.3,-81.7,0C-81.8,-14.4,-78.3,-28.8,-71.6,-41.7C-64.8,-54.7,-54.8,-66.2,-42.4,-71.1C-29.9,-76,-14.9,-74.4,0.6,-75.5C16.2,-76.6,32.4,-80.4,44.9,-75.5Z"
              className="middle"
            /> 
          </svg>
        </g>
        <text x="10" y="20"> {note.title}
        <tspan x="10" y="45">{note.username}</tspan>
        <tspan x="10" y="70">{note.body}.</tspan>
         </text>
        </svg>

      
{/* 

      <Card
        sx={{
          height: 200,
          boxShadow: 0,
          background: `${note.background ? note.background : Colours.gray}`,
        }}
      >
        <CardContent>
          <Box color={note.text ? note.text : "inherit"}>
            <Typography variant="h5">{note.title}</Typography>

            <Typography sx={{ mb: 1.5 }} color="inherit">
              {note.username}
            </Typography>
            <Typography variant="body2">
              {note.body}
              <br />
            </Typography>
          </Box>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default Note;

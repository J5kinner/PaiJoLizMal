/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: @J5kinner , @paigelea
 *
 */

import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../assets/scss/views/Dashboard.scss";
import SlideShop from "../../components/shop/SlideShop";
import PomodoroTimer from "./PomodoroTimer";
import ProfileCard from "./ProfileCard";

function DashboardPage({ user, setUser }) {
  const setUsername = (newUsername) => {
    setUser({ ...user, username: newUsername });
  };

  const setUserBalance = (newBalance) => {
    let difference = newBalance - user.coins;
    setUser({ ...user, coins: newBalance });

    return difference;
  };

  return (
    <Box>
      <Box>
        <Grid
          container
          columns={{ xs: 1, sm: 1, md: 3, lg: 3, xl: 3 }}
          justifyContent="center"
        >
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <ProfileCard user={user} setUsername={setUsername} />
          </Grid>
          <Grid item xs={1} sm={1} md={2} lg={2} xl={2}>
            <PomodoroTimer setUserBalance={setUserBalance} />
          </Grid>
        </Grid>
        <div className="shop-front">
          <SlideShop user={user} setUserBalance={setUserBalance} />
        </div>
        <div className="landscape">
          <h1>Please use landscape mode if you want to view the shop</h1>
        </div>
      </Box>
    </Box>
  );
}

export default DashboardPage;

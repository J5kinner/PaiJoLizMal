/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors:
 *
 */

import React, { useState } from "react";
import Shop from "../../components/Shop";
import NoteEditor from "./NoteEditor";
import PomodoroTimer from "./PomodoroTimer";
import ProfileCard from "./ProfileCard";
import "../../assets/scss/views/Dashboard.scss";

const randomUser = {
  username: "TestUser",
  balance: 50,
  stats: {
    totalTime: 300,
    totalSessions: 10,
  }
}

function DashboardPage() {
    const [user, setUser] = useState(randomUser);

    const setUsername = (newUsername) => {
        setUser({ ...user, username: newUsername})
    }

    const setUserBalance = (newBalance) => {
        let difference = newBalance - user.balance;
        setUser({ ...user, balance: newBalance });

        return difference;
    }

    console.log(user)

    return (
        <div className="dash-page">
            <div className="title">
                <h1>Dashboard page</h1>
            </div>
            <div className="dashboard">
                <div className="profile">
                    <ProfileCard user={user} setUsername={setUsername} />
                </div>
                <div className="pomo">
                    <PomodoroTimer setUserBalance={setUserBalance} />
                </div>
                <div className="shop-front">
                    <Shop user={user}/>
                    <NoteEditor />
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;

/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors:
 *
 */

import React, { useState, useEffect } from "react";
import NoteEditor from "./NoteEditor";
import PomodoroTimer from "./PomodoroTimer";
import ProfileCard from "./ProfileCard";

//  const randomUser = {
//      name: 'TestUser',
//      balance: 50,
//      stats: {
//          totalTime: 300,
//          totalSessions: 10,
//      },
//  }





function DashboardPage() {
    const [user, setUser] = useState('')
    
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedInUser')
            if (loggedUserJSON) {
                const jsonUser = JSON.parse(loggedUserJSON)
                setUser({
                    name: jsonUser.username,
                    balance: 50,
                         stats: {
                             totalTime: 300,
                             totalSessions: 10,
                         },
                })  
               }
              }, 
            [])



    const setUserBalance = (newBalance) => {
        let difference = newBalance - user.balance
        setUser({ ...user, balance: newBalance })

        return difference
    }

    return (
        <div>
            <h1>Dashboard page</h1>
            <ProfileCard user={user} />
            <PomodoroTimer setUserBalance={setUserBalance} />
            <NoteEditor />
        </div>
    );
}

export default DashboardPage;

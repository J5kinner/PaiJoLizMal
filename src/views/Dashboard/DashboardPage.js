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
 
 const randomUser = {
     name: 'TestUser',
     balance: 50,
     stats: {
         totalTime: 300,
         totalSessions: 10,
     },
 }
 
 function DashboardPage() {
     const [user, setUser] = useState(randomUser)
 
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
             <div className="shop-front">
             <Shop/>
             <NoteEditor />
             </div>

         </div>
     );
 }
 
 export default DashboardPage;
 
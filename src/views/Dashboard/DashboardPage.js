/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors:
 *
 */

import React from "react";
import NoteEditor from "./NoteEditor";
import PomodoroTimer from "./PomodoroTimer";
import ProfileCard from "./ProfileCard";

const user = {
    name: 'TestUser',
    balance: 50,
    stats: {
        totalTime: 300,
        totalSessions: 10,
    },
}

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard page</h1>
      <ProfileCard user={user} />
      <PomodoroTimer />
      <NoteEditor />
    </div>
  );
}

export default DashboardPage;

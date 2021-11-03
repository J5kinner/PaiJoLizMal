/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: Elizabeth Laham - @elizabetht94
 *
 */

import axios from "axios";

const baseUrl = "/api";

const startTimer = (duration) => {
  const token = localStorage.getItem("jwt");
  const username = JSON.parse(localStorage.getItem("loggedInUser")).username;

  return axios
    .post(
      `${baseUrl}/timer`,
      { username, duration },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => res.data);
};

const stopTimer = () => {
  const token = localStorage.getItem("jwt");
  const username = JSON.parse(localStorage.getItem("loggedInUser")).username;
  return axios
    .put(
      `${baseUrl}/timer`,
      { username },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => res.data);
};

const TimerService = { startTimer, stopTimer };
export default TimerService;

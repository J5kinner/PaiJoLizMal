/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors:
 *
 */

import "./assets/scss/layout/App.scss";
import Navigation from "./views/Navigation";
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;

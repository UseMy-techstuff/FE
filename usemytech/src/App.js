import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./components/Login";
import SignUp from "./components/SignUp.js";

import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

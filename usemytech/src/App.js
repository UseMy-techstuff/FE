import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp.js";
import MainPage from './components/MainPage';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute exact path='/user-page' component={MainPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

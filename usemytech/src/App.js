import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import history from './utils/history'
import { Provider } from "react-redux";

import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp.js";
import MainPage from './components/MainPage';
import TechList from './components/TechStuff/TechList';



function App({store}) {
  return (
    <div className="App">
    <Provider store={store}>
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute exact path="/user-page/:id" component={MainPage} />
          <PrivateRoute exact path="/all-tech" component={TechList} />
        </Switch>
      </Router>
      </Provider>
    </div>
  );
}

export default App;

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Login from './components/Login';
import SignUp from './components/SignUp';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/Login' component={Login} />
        <Route exact path='/' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;

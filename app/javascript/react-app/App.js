import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Login from './components/login/login.component';


const App = () => (
  <div className="App">
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </div>
);

export default App;

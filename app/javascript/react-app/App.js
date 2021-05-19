import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import FormValues from './pages/form-values/form-values.component';
import Login from './components/login/login.component';


class App extends Component {

  componentDidMount() {
    fetch('api/crypto/btc')
      .then(r => r.json())
      .then(message => console.log(message));
  }

  render() {
    return(

    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/values/new" component={FormValues} />
      </Switch>
    </div>
    )
  }
};

export default App;

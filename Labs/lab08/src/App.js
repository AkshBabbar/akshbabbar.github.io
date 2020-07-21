import React, { Component } from "react";
import Home from './Home';
import { Route, Router, BrowserRouter, Switch } from 'react-router-dom';
import Error from './Error'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

// NPM modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// Own modules
import Home from '../Home/Home';
import Login from '../Login/Login';
// CSS styles

/**
 * Main App
 */
export default class App extends Component {
  /**
   * Render
   */
  render() {   
    return (
      <Router>
        <Switch>
            <Route path='/login' exact component={Login} />
            <Route path='/user' exact component={Home} />
            <Route path='/user/messages' exact component={Home} />
            <Route path='/products' exact component={Home} />
            <Route path='/products/new' exact component={Home} />
            <Route path='/products/:' exact component={Home} />
            <Route path='/' exact component={Home} />
            <Redirect to="/login"/>
        </Switch>
    </Router>
    );
  }
}
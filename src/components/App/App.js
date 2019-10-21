// NPM modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
// Own modules
import Home from '../Home/Home';
import Error404 from '../Error404/Error404';
import Register from '../Register/Register';
import LocalStorage from '../../utils/Storage';
import { UserProvider } from '../../context/UserContext';
// CSS styles

/**
 * Main App
 */
export default class App extends Component {
  /**
   * Constructor
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    // Intento recuperar la sesión del storage
    const user = LocalStorage.readLocalStorage();
    this.state = {
      session: user
    }
  }

  /**
   * Render
   */
  render() {   
    return (
      <UserProvider value={this.state}>
        <SnackbarProvider maxSnack={3}>
          <Router>
            <Switch>
                <Route path='/register' exact component={Register} />
                <Route path='/' exact component={Home} />
                <Route component={Error404} />
            </Switch>
          </Router>
        </SnackbarProvider>
      </UserProvider>
    );
  }
}
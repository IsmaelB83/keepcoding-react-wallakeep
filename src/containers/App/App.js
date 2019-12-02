/* NPM modules */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* Containers */
import AdvertDetail from '../AdvertDetail';
import AdvertEdit from '../AdvertEdit';
import Profile from '../Profile';
import Home from '../Home';
/* Components */
import ErrorBoundary from '../../components/ErrorBoundary';
import PrivateRoute from '../../components/PrivateRoute';
import Error404 from '../../components/Error404';
import Register from '../../components/Register';
/* Models */
import Session from '../../models/Session';
/* Own modules */
import { UserProvider } from '../../context/UserContext';
import LocalStorage from '../../utils/Storage';
/* Assets */
/* CSS */

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
    // Intento recuperar la sesión del storage, y si no existe creo una sesión vacia
    let session = LocalStorage.readLocalStorage();
    if (!session) {
      session = new Session ();
    } 
    // Dispatch de la acción de login
    this.props.login(session);
    this.state = {
      session
    }
  }

  /**
   * Render
   */
  render() {   
    return (
      <ErrorBoundary>
        <UserProvider value={this.state}>
            <Router>
              <Switch>
                  <Route path='/register' exact component={Register} />
                  <PrivateRoute path='/profile' exact component={Profile} />
                  <PrivateRoute path='/advert/display/:id' exact component={AdvertDetail} />
                  <PrivateRoute path='/advert/create' exact render={(props) => <AdvertEdit {...props} mode='create'/>}/>
                  <PrivateRoute path='/advert/edit/:id' exact render={(props) => <AdvertEdit {...props} mode='edit'/>}/>
                  <PrivateRoute path='/' exact component={Home} />
                  <PrivateRoute component={Error404} />
              </Switch>
            </Router>
        </UserProvider>
      </ErrorBoundary>
    );
  }
}
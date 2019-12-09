// NPM Modules
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// Material UI
/* Own modules */
// Assets
// CSS

/**
 * Main App
 */
const PrivateRoute = ({...props}) =>
  props.session.email ? <Route {...props} /> : <Redirect to="/register" />;

export default PrivateRoute;

/*
import { withUserContext } from '../../context/UserContext';
export default withUserContext(PrivateRoute); 
*/
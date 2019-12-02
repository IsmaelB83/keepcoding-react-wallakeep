/* NPM modules */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
/* Material UI */
/* Own modules */
import { withUserContext } from '../../context/UserContext';
/* Assets */
/* CSS */

/**
 * Main App
 */
const PrivateRoute = ({ session, ...props }) =>
  session.name ? <Route {...props} /> : <Redirect to="/register" />;

export default withUserContext(PrivateRoute);

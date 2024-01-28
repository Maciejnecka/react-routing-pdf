import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Admin from '../views/Admin';
import Login from '../views/Login';
import Home from '../views/Home';

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute path="/admin" redirect="/login">
        <Admin />
      </PrivateRoute>
      <Route path="/login">
        <Login />
      </Route>
      <Redirect from="/beta" to="/" />
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;

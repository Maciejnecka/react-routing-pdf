import React from 'react';
import { Redirect, Route, HashRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import Contact from '../views/Contact';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import { Switch } from 'react-router-dom';
import Category from '../views/Category';
import Article from '../views/ArticlePage';
import PrivateRoute from '../PrivateRoute';
import Admin from '../views/Admin';
import Login from '../views/Login';

function App() {
  return (
    <Router>
      <nav>
        <h1>Routing</h1>
        <Nav />
      </nav>
      <Switch>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Redirect from="/beta" to="/" />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/article/:id-:alias">
          <Article />
        </Route>
        {/* ... */}
        <Route path="/404.html">
          <NotFound />
        </Route>
        <Route>
          <Redirect to="/404.html" />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

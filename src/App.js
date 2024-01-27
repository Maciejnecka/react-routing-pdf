import React from 'react';
import { Redirect, Route, HashRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import Contact from './Contact';
import Home from './Home';
import NotFound from './NotFound';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <h1>Routing</h1>
        <Nav />
      </nav>
      <Switch>
        <Redirect from="/beta" to="/" />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
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

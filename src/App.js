import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <Router>
      <nav>
        <h1>Routing</h1>
        <Nav />
      </nav>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Router>
  );
}
export default App;

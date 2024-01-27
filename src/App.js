import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router basename="/kat1/kat2">
      <section>
        <h1>Routing</h1>
      </section>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './Home';

const Contact = () => <h2>Contact</h2>;

function App() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTime((time) => time + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Router>
      <section>
        <h1>Routing({time}s)</h1>
      </section>
      <Route exact path="/">
        <Home time={time} />
      </Route>
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;

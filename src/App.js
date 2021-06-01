import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Cosw20 from './Cosw20';
import Cosw200 from './Cosw200';
import Cosw30 from './Cosw30';
import Footer from './Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <section>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects-cosw20' exact component={Cosw20} />
          <Route path='/projects-cosw200' component={Cosw200} />
          <Route path='/projects-cosw30' component={Cosw30} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
      </section>
    </Router>
  );
}

export default App;

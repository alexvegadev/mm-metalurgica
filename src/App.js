import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Bar from './components/Bar/Bar'
import Logo from './components/Logo/Logo'
//ROUTES
import Home from './views/Home/Home'
import Contact from './views/Contact/Contact'
import Works from './views/Works/Works'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Bar/>
          <Logo />
          <Route exact path="/" component={Home} />
          <Route path="/works" component={Works} />
          <Route path="/contact" component={Contact} />
        </header>
      </div>
    </Router>
  );
}

export default App;

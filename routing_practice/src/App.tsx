import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import {Router} from '@reach/router';
import { Home } from './components/Home';
import {Number4} from './components/Number4';
import { Color } from './components/Color';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Home path="/"/>
        <Number4 path="/:num"/>
        <Color path ="/:word/:color/:bg"/>
      </Router>

    </div>
  );
}

export default App;

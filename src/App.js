import React from 'react';
import logo from './logo.svg';
import './App.css';

const tangerine = require('./assets/Tangerine.svg');

function App() {
  return (
    <div className="App">
      <h1 className="app__title">APRIL 24 - 26</h1>
      <div className="app__image-container">
        <img className="app__image" src={tangerine}></img>
      </div>
      <h1 className="app__title-citrus">CITRUS HACK 2020</h1>
      <h2 className="app__subTitle">COMING SOON</h2>
      <h3 style={{color: 'white', textAlign: 'center'}}>citrushack@gmail.com</h3>
    </div>
  );
}

export default App;

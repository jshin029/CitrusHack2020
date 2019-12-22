import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';

const tangerine = require('./assets/tangerine.png');

function App() {
  return (
    <div className="container-fluid App">
      <div className="row">
        <div className="lg-7">
          <h4 className="App__header-mini">CONNECT . HACK . LEARN .</h4>
          <h2 className="App__header-main">Citrus Hack 2020</h2>
          <h3 className="App__header-subMain">Get notified when we launch by joining our mailing list</h3>
          <div className="App__mobile-container">
            <button className="App__button-subscribe">Subscribe</button>
          </div>
        </div>
        <div className="lg-5">
          <img className="App__image" src={tangerine}></img>
        </div>
      </div>
    </div>
  );
}

export default App;

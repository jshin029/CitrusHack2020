import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
import Home from './components/Home';
import Subscribe from './components/Subscribe';
import { Switch, Route, BrowserRouter as Router, Redirect, HashRouter } from 'react-router-dom';

function App() {
  return (
        <div className='app'>
        <HashRouter basename="/">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/subscribe" component={Subscribe}/>
          </Switch>
        </HashRouter>
      </div>
  );
}

export default App;

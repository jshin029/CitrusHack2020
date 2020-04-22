import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Live from  './components/Live/Live';
import Schedule from './components/Schedule/Schedule';
import { Switch, Route, BrowserRouter as Router, Redirect, HashRouter } from 'react-router-dom';


function App() {
  return (
      <div className='app'>
        <Router basename="/">
          <Switch>
            <Route exact path="/" component={ Main }/>
            <Route exact path="/live" component={ Live }/>
            <Route exact path="/schedule" component={ Schedule }/>
          </Switch>
        </Router>
      </div>
  );
}
export default App;

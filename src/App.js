import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
import Home from './components/Home';
import Subscribe from './components/Subscribe';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
        <div className='app' style={{backgroundColor: '#ececee'}}>
          <Navbar />
          <Home />
      </div>
  );
}

export default App;

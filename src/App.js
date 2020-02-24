import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
import Home from './components/Home/Home';
import Subscribe from './components/Subscribe';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Faq from './components/Faq/Faq';
import Sponsors from './components/Sponsors/Sponsors';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {
  return (
        <div className='app' style={{backgroundColor: '#ececee'}}>
          <Navbar />
          <div id="home"><Home /></div>
          <div id="about"><About /></div>
          <div id="faq"><Faq /></div>
          <Sponsors />
      </div>
  );
}
export default App;

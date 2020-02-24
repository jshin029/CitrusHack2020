import React from 'react';
import logo from './logo.svg';
import { Button, Icon } from 'antd';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Faq from './components/Faq/Faq';
import Sponsors from './components/Sponsors/Sponsors';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const footerBg = require('./components/assets/citrus-footer.svg');

function App() {
  return (
        <div className='app' style={{backgroundColor: '#ececee'}}>
          <Navbar />
          <div id="home"><Home /></div>
          <div id="about"><About /></div>
          <div id="faq"><Faq /></div>
          <div id="sponsors"><Sponsors /></div>
          <div className="App__footer">
            <div style={{paddingTop: '20%'}}>
              <a href="https://www.facebook.com/cutiehack/">
                <Icon className="App__icon" type="facebook" />
              </a>
              <a href="https://www.instagram.com/citrushack_ucr/">
                <Icon className="App__icon" style={{marginRight: '0.5%', marginLeft: '1%'}} type="instagram" />
              </a>
              <a href="https://twitter.com/citrushack">
                <Icon className="App__icon" style={{marginRight: '1%', marginLeft: '0.5%'}} type="twitter" />
              </a>
              <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=citrushack@gmail.com'">
                <Icon className="App__icon" type="mail" />
              </a>
            </div>
          </div>
      </div>
  );
}
export default App;

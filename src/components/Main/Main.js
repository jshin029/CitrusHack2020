import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Button, Icon } from 'antd';
import './Main.css';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Faq from '../Faq/Faq';
import Sponsors from '../Sponsors/Sponsors';
import Tracks from '../Tracks/Tracks';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const footerBg = require('../../components/assets/citrus-footer-new.svg');

class Main extends Component {
  render(){
    return (
      <div className='Main' style={{backgroundColor: '#ececee'}}>
        <img className="Main__banner" src={"https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-black.svg"}></img>
        <Navbar />
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="tracks"><Tracks /></div>
        <div id="faq"><Faq /></div>
        <div id="sponsors"><Sponsors /></div>
        <div className="Main__footer">
          <img className="Main__footer_img" src={footerBg} />
        </div>
      </div>
    );
  }
}
export default Main;

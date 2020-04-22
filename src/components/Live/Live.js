import React, { Component } from 'react';
import { Icon } from 'antd';
import Countdown from '../Countdown/Countdown';
import './Live.css';
import Navbar from '../Navbar/Navbar';
import NavbarMobile from '../NavbarMobile/NavbarMobile';
const hero = require('../assets/citrus_livesite_transp.svg');
const icon = require('../assets/citrus_icon.png');
const devpost = require('../assets/devpost.svg');
const discord = require('../assets/discord.png');

const currentDate = new Date();
const year = (currentDate.getMonth() === 4 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();


class Live extends Component {
  render(){
    return(
      <div className="container-fluid Live__container" >
        <div className="mobile">
        <NavbarMobile className="mobile"/>
        </div>
        <div className="row">
          <div className="col-9">
            <div className="Live__timer-container">
              <Countdown date={`${ year }-04-25T00:11:00`}/>
              <div className="Live__social-container">
                <a href="http://discord.gg/yH832Tc">
                  <img className="Live__discord" src={ discord }></img>
                </a>
                <a href="">
                  <img className="Live__devpost" style={{marginLeft: '5%', marginRight: '3.5%'}}src={ devpost }></img>
                </a>
                <a href="https://www.facebook.com/CitrusHack/">
                  <Icon className="Live__fb" style={{marginLeft: '3.5%', marginRight: '7%'}} type="facebook" />
                </a>
                <a href="https://www.instagram.com/citrushack_ucr/">
                  <Icon className="Live__ig" type="instagram" />
                </a>
              </div>
            </div>

            <img className="Live__hero" src={ hero }></img>
          </div>
          <div className="col-3 Live__navbar notMobile">
            <img className="Live__icon" src={ icon }></img>
            <h1 className="Live__header">CITRUS <br/>HACK</h1>
            <h2 className="Live__sub-header">HOME</h2>
            <h2 className="Live__sub-header">CHECK IN</h2>
            <h2 className="Live__sub-header">SCHEDULE</h2>
            <h2 className="Live__sub-header">RESOURCES</h2>
            <h2 className="Live__sub-header">DEVPOST</h2>
            <h2 className="Live__sub-header">BACK TO EVENT SITE</h2>
          </div>
        </div>
      </div>
    )
  }



}

export default Live;

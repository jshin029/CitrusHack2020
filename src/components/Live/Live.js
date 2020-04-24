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
                <a href="https://discord.gg/kSsSN8">
                  <img className="Live__discord" src={ discord }></img>
                </a>
                <a href="https://citrushack2020.devpost.com/">
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
            <h2 className="Live__sub-header"><a href="https://www.citrushack.com/#/live">HOME</a></h2>
            <h2 className="Live__sub-header"><a href="https://citrus-hack.typeform.com/to/z1W5bH">CHECK IN</a></h2>
            <h2 className="Live__sub-header"><a href="https://www.citrushack.com/#/schedule">SCHEDULE</a></h2>
            <h2 className="Live__sub-header"><a href ="https://www.canva.com/design/DAD5-coBkBY/ezx11qndMlb44XvhQnM_kA/view?utm_content=DAD5-coBkBY">HACKER GUIDE</a></h2>
            <h2 className="Live__sub-header"><a href="https://github.com/citrushack/CitrusHack20-HackerResources">RESOURCES</a></h2>
            <h2 className="Live__sub-header"><a href="https://citrushack2020.devpost.com/">DEVPOST</a></h2>
            <h2 className="Live__sub-header"><a href="https://www.citrushack.com/#/">BACK TO EVENT SITE</a></h2>
          </div>
        </div>
      </div>
    )
  }



}

export default Live;

import React, { Component } from 'react';
import './Sponsors.css';

const asucr = require('../assets/ASPB COSPO Logo.png');
const beans = require('../assets/beans 1.svg');
const blsp = require('../assets/bslp 1.svg');
const GCAP = require('../assets/GCAP Logo_17_BW.png');
const wa = require('../assets/wolfram 2.svg');
const xyz = require('../assets/xyz 1.svg');
const planet = require('../assets/planet.svg');
const library = require('../assets/library.png');
const ieee = require('../assets/ieee.svg');
const acm = require('../assets/acm.svg');

class Sponsors extends Component {

    constructor(props){
        super(props);
        this.state = {
          redirectSub: false,
        }
      }

    render() {
        return (
            <div className="Sponsor__parent">
              <div className="notMobile">
                <h1 className="Sponsor__header">Sponsors</h1>
                <div className="Sponsor__container">
                  <a href="https://aspb.ucr.edu/"><img className="asucr" src={asucr}></img></a>
                  <a href="https://www.badabeansnacks.com/"><img className="beans" src={beans}></img></a>
                  <a href="https://www.wolframalpha.com/"><img className="wa" src={wa}></img></a>
                </div>
                <div className="Sponsor__container">
                  <a href="https://www.blackstonelaunchpad.org/"><img className="blsp" src={blsp}></img></a>
                  <a href="https://gen.xyz/"><img className="xyz" src={xyz}></img></a>
                  <a href="https://library.ucr.edu/"><img className="library" src={library}></img></a>
                  <img className="Sponsor__planet" src={planet} />
                </div>
                <h1 className="Sponsor__header">Organizers</h1>
                <div className="Sponsor__container">
                  <a href=""><img className="ieee" src={ieee}></img></a>
                  <a href=""><img className="acm" src={acm}></img></a>
                </div>
              </div>
              <div className="sponsorsMobile">
                <h1 className="Sponsor__header">Sponsors</h1>
                <div className="Sponsor__container">
                  <a href="https://gen.xyz/"><img className="xyz" src={xyz}></img></a>
                </div>
                <div className="Sponsor__container">
                  <a href="https://aspb.ucr.edu/"><img className="asucr" src={asucr}></img></a>
                  <a href="https://www.badabeansnacks.com/"><img className="beans" src={beans}></img></a>
                   <img className="Sponsor__planet" src={planet} />
                </div>
                <div className="Sponsor__container">
                  <a href="https://www.wolframalpha.com/"><img className="wa" src={wa}></img></a>
                </div>
                <div className="Sponsor__container">
                  <a href="https://www.blackstonelaunchpad.org/"><img className="blsp" src={blsp}></img></a>
                </div>
              </div>

            </div>
        )
    }
}


 export default Sponsors;

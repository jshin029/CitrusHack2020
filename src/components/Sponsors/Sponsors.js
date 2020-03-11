import React, { Component } from 'react';
import { Button } from 'antd';
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
const creater = require('../assets/creater.svg');
const zybooks = require('../assets/zybooks.png');
const digital = require('../assets/digital.png');

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
                <h1 className="Sponsor__header">Organizers</h1>
                <div className="Sponsor__container" style={{marginBottom: '2%'}}>
                  <a href=""><img className="ieee" src={ieee}></img></a>
                  <a href=""><img className="acm" src={acm}></img></a>
                </div>
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
                </div>
                <div className="Sponsor__container">
                  <a href="https://library.ucr.edu/research-services/creativity-and-discovery/creatr-lab"><img className="creater" src={creater}></img></a>
                  <a href="https://www.zybooks.com/"><img className="zybooks" src={zybooks}></img></a>
                  <a href="https://www.digitalocean.com/"><img className="digital" src={digital}></img></a>
                </div>
                <div className="Sponsor__container">
                  <p className="Sponsor__packet"> Interested in <a className="Sponsor__key" href="https://drive.google.com/file/d/1wHZX8orMl5V-5bynxYmBivPL9I-jN2DZ/view?usp=sharing"><span className="Sponsor__key">sponsoring</span></a> Citrus Hack?</p>
                  <img className="Sponsor__planet" src={planet} />
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

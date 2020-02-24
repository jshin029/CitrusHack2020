import React, { Component } from 'react';
import { Icon } from 'antd';
import './Footer.css';

const footerBg = require('../assets/citrus-footer.svg');

class Footer extends Component {
  render(){
    return(
      <div className="Footer__section">
        <div className="Footer__container">
          <div style={{textAlign: 'center'}}>
            <a href="https://www.facebook.com/cutiehack/">
              <Icon className="Footer__icon" type="facebook" />
            </a>
            <a href="https://www.instagram.com/citrushack_ucr/">
              <Icon className="Footer__icon" style={{marginRight: '0.5%', marginLeft: '1%'}} type="instagram" />
            </a>
            <a href="https://twitter.com/citrushack">
              <Icon className="Footer__icon" style={{marginRight: '1%', marginLeft: '0.5%'}} type="twitter" />
            </a>
            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=citrushack@gmail.com'">
              <Icon className="Footer__icon" type="mail" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;

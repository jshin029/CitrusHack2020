import React, { Component } from 'react';
import './Home.css';
import { Icon } from 'antd';
import { Row, Container, Col } from 'react-bootstrap';
import Parser from 'html-react-parser';
import { Redirect } from 'react-router-dom';
const hero = require('../assets/herographicBG.png');
const mlh = require('../assets/mlh_black.png');

class Home extends Component {
    state = {
      redirectLive: false
    }

    handleClick = () => {
      this.setState({
        redirectLive: true
      })
    }

    render() {
      if (this.state.redirectLive) {
        return <Redirect push to="/live" />
      }
        return (
            <div className="container-fluid Home">
                <div className="row">
                  <div className="col-lg-7 container-fluid">
                    <img className="Home__image" src={hero}></img>
                  </div>
                    <div className="col-lg-5 Home__right">
                        <h2 className="Home__header-main">Citrus Hack 2020</h2>
                        <h2 className="Home__header-sub">CONNECT . HACK . LEARN .</h2>
                        <p className="Home__body"># Online!</p>
                        <p className="Home__body"># April 25th 11AM PDT -  April 26th 11AM PDT</p>
                        <div className="Home__mobile-container">
                            <a href="https://citrus-hack.typeform.com/to/z1W5bH">
                              <button className="Home__button-subscribe">CHECK-IN</button>
                            </a>
                              <button style={{marginLeft: '5%'}} onClick={this.handleClick} className="Home__button-subscribe">LIVE</button>
                        </div>
                        <div className="Home__social-container">
                          <a href="https://www.facebook.com/CitrusHack/">
                            <Icon className="Home__icon" type="facebook" />
                          </a>
                          <a href="https://www.instagram.com/citrushack_ucr/">
                            <Icon className="Home__icon" style={{marginRight: '3%', marginLeft: '6%'}} type="instagram" />
                          </a>
                          <a href="https://twitter.com/citrushack">
                            <Icon className="Home__icon" style={{marginRight: '3%', marginLeft: '3%'}} type="twitter" />
                          </a>
                          <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=citrushack@gmail.com'">
                            <Icon className="Home__icon" style={{marginRight: '6%', marginLeft: '3%'}}type="mail" />
                          </a>
                          <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                            <img style={{width: '6%'}} src={mlh}></img>
                          </a>
                        </div>
                    </div>
                </div>
                <div className="section3">
                </div>
            </div>
        );
    }
}


export default Home;

import React, { Component } from 'react';
import './Home.css';
import { Icon } from 'antd';
import { Row, Container, Col } from 'react-bootstrap';
import Parser from 'html-react-parser';
import { Redirect } from 'react-router-dom';
const hero = require('../assets/herographicBG.png');

class Home extends Component {

    render() {
        return (
            <div className="container-fluid Home">
                <div className="row">
                  <div className="col-lg-7 container-fluid">
                    <img className="Home__image" src={hero}></img>
                  </div>
                    <div className="col-lg-5 Home__right">
                        <h2 className="Home__header-main">Citrus Hack 2020</h2>
                        <h2 className="Home__header-sub">CONNECT . HACK . LEARN .</h2>
                        <p className="Home__body"># Orbach Science Library @ 11AM</p>
                        <p className="Home__body"># April 25th - 26th</p>

                        <div className="Home__mobile-container">
                            <a href="https://citrus-hack.typeform.com/to/ygXesI">
                            <button className="Home__button-subscribe">REGISTER NOW</button>
                            </a>
                        </div>
                        <div style={{marginLeft:'0%',marginTop: '4%'}}>
                          <a href="https://www.facebook.com/cutiehack/">
                            <Icon className="App__icon" type="facebook" />
                          </a>
                          <a href="https://www.instagram.com/citrushack_ucr/">
                            <Icon className="App__icon" style={{marginRight: '3%', marginLeft: '6%'}} type="instagram" />
                          </a>
                          <a href="https://twitter.com/citrushack">
                            <Icon className="App__icon" style={{marginRight: '6%', marginLeft: '3%'}} type="twitter" />
                          </a>
                          <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=citrushack@gmail.com'">
                            <Icon className="App__icon" type="mail" />
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

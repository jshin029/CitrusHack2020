import React, { Component } from 'react';
import './Home.css';
import { Icon } from 'antd';
import { Row, Container, Col } from 'react-bootstrap';
import Parser from 'html-react-parser';
import { Redirect } from 'react-router-dom';
const hero = require('../assets/herographicBG.png')


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
                        <p className="Home__body"># Orbach Library @ 5PM</p>
                        <p className="Home__body"># April 25th - 26th</p>

                        <div className="Home__mobile-container">
                            <a href="https://citrus-hack.typeform.com/to/ygXesI">
                            <button className="Home__button-subscribe" >Register Now</button>
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

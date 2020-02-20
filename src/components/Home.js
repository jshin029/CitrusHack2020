import React, { Component } from 'react';
import './Home.css';
import logo from './assets/logo.svg';
// import { Button } from 'antd';
import './css/Home.css';
import { Icon } from 'antd';
import { Row, Container, Col } from 'react-bootstrap';
import Parser from 'html-react-parser';
import { Redirect } from 'react-router-dom';
import Faq from './Faq';
import About from './About/About';

const tangerine = require('./assets/tangerine.png');
const hero = require('./assets/herographicBG.png')


class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
          redirectSub: false,
        }
      }


    handleSub = () => {
        this.setState({
          redirectSub: true
        })
    }


    render() {
        if (this.state.redirectSub){
            return <Redirect push to ="/subscribe" />
        }

        return (
            <div className="App">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-7">
                    <img className="App__image" src={hero}></img>
                  </div>
                  <div className="col-lg-5 App__right">
                    <h2 className="App__header-main">Citrus Hack 2020</h2>
                    <p className="App__body">CONNECT . HACK . LEARN .</p>
                    <p className="App__body">April 26 - 27th, 2020</p>
                    <p className="App__body">April 26 - 27th, 2020</p>
                    <div className="App__mobile-container">
                      <button className="App__button-subscribe" onClick={this.handleSub}>APPLY</button>
                    </div>
                  </div>
                </div>
                <div className="section3">
          <Faq />
          </div>
                <About />
              </div>
            </div>
        );
    }
}


export default Home;

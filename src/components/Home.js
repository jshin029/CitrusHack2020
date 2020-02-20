import React, { Component } from 'react';
import logo from './assets/logo.svg';
import { Button } from 'antd';
import './css/Home.css';
import Parser from 'html-react-parser';
import { Redirect } from 'react-router-dom';
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
            <div className="container-fluid App">
                <div className="row">
                  <div className="col-lg-7 container-fluid">
                    <img className="App__image" src={hero}></img>
                  </div>
                    <div className="col-lg-5 App__right">
                        <h2 className="App__header-main">Citrus Hack 2020</h2>
                        <h2 className="App__header-sub">CONNECT . HACK . LEARN .</h2>
                        <p className="App__body"># Orbach Library @ 5PM</p>
                        <p className="App__body"># April 25th - 26th</p>


                        <div className="App__mobile-container">
                            <button className="App__button-subscribe" onClick={this.handleSub}>Register Now</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default Home;

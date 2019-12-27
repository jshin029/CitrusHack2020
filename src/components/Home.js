import React, { Component } from 'react';
import logo from './assets/logo.svg';
import { Button } from 'antd';
import './css/Home.css';
import Parser from 'html-react-parser';
import { Redirect } from 'react-router-dom';
const tangerine = require('./assets/tangerine.png');

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
                    <div className="lg-7">
                        <h4 className="App__header-mini">CONNECT . HACK . LEARN .</h4>
                        <h2 className="App__header-main">Citrus Hack 2020</h2>
                        <h3 className="App__header-subMain">Get notified when we launch by joining our mailing list</h3>
                        <div className="App__mobile-container">
                            <button className="App__button-subscribe" onClick={this.handleSub}> Subscribe</button>
                        </div>
          
                    </div>

                </div>
                {/* <div className="lg-5 container-fluid"> */}
                        <img className="App__image" src={tangerine}></img>
                    {/* </div> */}
            </div>
        );
    }
}


export default Home;

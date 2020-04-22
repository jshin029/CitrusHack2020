import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './NavbarMobile.css';

class NavbarMobile extends Component {

    constructor(props){
        super(props);
        this.state = {
          redirectSub: false,
        }
    }

    render() {
        return (
            <div className="navbar__container">
                <a href="https://citrushack.com/live">
                <button className="buttons">
                  HOME
                </button>
              </a>
              <a href="https://citrushack.com/schedule">
                <button  className="buttons">SCHEDULE</button>
                </a>
                <a href="https://citrushack.com/schedule">
                <button  className="buttons">
                  RESOURCES
                </button>
                </a>

                <a href="">
            <button  data-scroll href="#Faq" className="buttons">DEVPOST</button>
            </a>
            <a href="https://citrushack.com/">
            <button  className="buttons">BACK TO EVENT SITE</button>
            </a>

            </div>
        );
    }
}


export default NavbarMobile;

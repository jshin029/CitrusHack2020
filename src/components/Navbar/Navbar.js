import React, { Component } from 'react';

import './Navbar.css';



class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
          redirectSub: false,
        }
      }

    render() {
        return (
            <div className="navbar__container">
                <button  className="buttons">HOME</button>
                <button  className="buttons">ABOUT</button>
                <button  className="buttons">FAQ</button>
                <button  className="buttons">SPONSORS</button>
            </div>
        );
    }
}


export default Navbar;

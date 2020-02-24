import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
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
                           
                <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              ><button  data-scroll href="#Home" className="buttons">   
                  HOME
                  </button>
                </Link>
              
                  <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button  data-scroll href="#About" className="buttons">    ABOUT</button>
                </Link>
                 <Link
                activeClass="active"
                to="faq"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              ><button  data-scroll href="#Faq" className="buttons">FAQ</button>     
                
                </Link>
                <Link
                activeClass="active"
                to="sponsors"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              ><button  data-scroll href="#Sponsors" className="buttons">SPONSORS</button></Link>
                
            </div>
        );
    }
}


export default Navbar;

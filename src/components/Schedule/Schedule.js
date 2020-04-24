import React, { Component } from 'react';
// import SideNav from './SideNav';
import { Animated } from 'react-animated-css';
import Schedule_Sat from '../Schedule_Sat/Schedule_Sat';
import './Schedule.css'
import Schedule_Sun from '../Schedule_Sun/Schedule_Sun';
const icon = require('../assets/citrus_icon.png');
// import LiveMobileNavbar from './LiveMobileNavbar';
// import Schedule from '../Schedule_Sat/Schedule_Sat';



class Schedule extends Component {
  state = {
  }

  render() {
    return(
      <Animated animationIn="fadeIn" isVisible={true}>
         {/* <div className = "livemobilenavbar"><LiveMobileNavbar /></div> */}
         <div className="fboxParent">
        <div className="scheduleBG">
         
        <div className="SAT"> <Schedule_Sat/> </div>
        <Schedule_Sun/>

        
         
         

         </div>
         <div className="col-3 Live__navbar notMobile">
            <img className="Live__icon" src={ icon }></img>
            <h1 className="Live__header">CITRUS <br/>HACK</h1>
            <h2 className="Live__sub-header"><a href="https://www.citrushack.com/#/live">HOME</a></h2>
            <h2 className="Live__sub-header"><a href="https://citrus-hack.typeform.com/to/z1W5bH">CHECK IN</a></h2>
            <h2 className="Live__sub-header"><a href ="https://www.canva.com/design/DAD5-coBkBY/ezx11qndMlb44XvhQnM_kA/view?utm_content=DAD5-coBkBY">HACKER GUIDE</a></h2>
            <h2 className="Live__sub-header"><a href="https://github.com/citrushack/CitrusHack20-HackerResources">RESOURCES</a></h2>
            <h2 className="Live__sub-header"><a href="https://citrushack2020.devpost.com/">DEVPOST</a></h2> 
            <h2 className="Live__sub-header"><a href="https://citrushack.com/">BACK TO EVENT SITE</a></h2>
          </div>

          
         </div>
        
        
            {/* <SideNav/> */}
      
          
      
      </Animated>
    )
  }



}

export default Schedule;

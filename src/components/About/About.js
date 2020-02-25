import React from 'react';
import './About.css';
import aboutGraphic from '../assets/vortex1.svg';

const dots = require('../assets/dots.svg');
const dots2 = require('../assets/dots2.svg');
const rocket = require('../assets/rocket-soft.svg');

function About() {
  return (
    <section className="About__section">
      <div className="row">
        <div className="col-7" style={{paddingLeft: '12%'}}>
          <h1 className="About__header">About Us</h1>
          <p className="About__description">
            Citrus Hack is where hundreds of students from all over Southern California (and a few from out-of-state) come together and form teams, aiming to build a project of their own from scratch over the duration of 24 hours. Citrus Hack is focused on the brilliant partnership between education and competition. </p>
          <img className="About__dots2" src={dots2} />
          <div className="row About__boxes">
            <div className="col-3 About__box">
              <h1 className="About__box_title1">2015</h1>
              <p className="About__box_text">Year Founded</p>
            </div>
            <div className="col-3 About__box">
              <h1 className="About__box_title2">400+</h1>
              <p className="About__box_text">Our Hackers</p>
            </div>
            <div className="col-3 About__box">
              <h1 className="About__box_title3">24</h1>
              <p className="About__box_text">Hours</p>
            </div>
          </div>
          <img className="About__dots" src={dots}></img>
        </div>
        <div className="col-5">
          <div className="About__imageContainer">
            <img className="About__image" src={rocket} alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;

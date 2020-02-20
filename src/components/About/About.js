import React from 'react';
import './About.css';
import citrusAbout from '../assets/Citrus_ICON@400x-8.png';

function About() {
  return (
    <section className="About__section">
      <div className="row justify-content-center">
        <div className="col-8">
          <h2 className="About__caption caption">About Us</h2>
          <p className="About__description description">
Citrus Hack is where hundreds of students from all over Southern California (and a few from out-of-state) come together and form teams, aiming to build a project of their own from scratch over the duration of 36 hours. Citrus Hack is focused on the brilliant partnership between education and competition. While “hackers” compete for prizes, they hone their technical skills along the way.          </p>
          <div className="row justify-content-center">
          </div>
        </div>
        <div className="col-4">
          <div className="About__imageContainer">
            <img id="About__image" src={citrusAbout} alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;

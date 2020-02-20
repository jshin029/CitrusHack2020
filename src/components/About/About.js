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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut erat et turpis blandit posuere tempus et diam. Aenean eget porta leo. Quisque sed blandit orci. Donec nec ipsum sapien. Maecenas tincidunt augue non nulla ultricies tempor.
          </p>
          <div className="row justify-content-center">
            <div className="col-4">
              <div className="About__boxContainer">hi</div>
            </div>
            <div className="col-4">
              <div className="About__boxContainer"></div>
            </div>
            <div className="col-4">
              <div className="About__boxContainer"></div>
            </div>
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
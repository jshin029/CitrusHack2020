import React, { Component } from 'react';
import './Tracks.css';

const jupiter = require('../assets/jupiter.svg');
const saturn = require('../assets/saturn.svg');
const mars = require('../assets/mars.svg');


class Tracks extends Component {



  render(){
    return(
      <div className="Tracks__container" style={{paddingLeft: '12%', paddingRight: '12%'}}>
        <div className="row">
          <h1 className="Tracks__header">Tracks</h1>
        </div>
        <div className="row Tracks__row">
          <div className="col Tracks__inner-container" style={{marginRight: '1%'}}>
            <div className="Tracks__img-container">
              <img src={jupiter} className="Tracks__jupiter"></img>
            </div>
            <h2 className="Tracks__sub-header">Jupiter</h2>
            <p className="Tracks__description">Ruler of the skies, Jupiter holds reign to the space it claims. As Citrus Hack 2020's theme and track, Jupiter projects aim to explore new horizons that we call outer space.</p>
          </div>
          <div className="col Tracks__inner-container" style={{marginLeft: '1%', marginRight: '1%'}}>
            <div className="Tracks__img-container">
              <img src={saturn} className="Tracks__saturn"></img>
            </div>
            <h2 className="Tracks__sub-header">Saturn</h2>
            <p className="Tracks__description">As a symbol of agriculture, the Saturn track is dedicated to sustainability of the planet. Saturn projects address solutions to our environmental challenges.</p>
          </div>
          <div className="col Tracks__inner-container" style={{marginLeft: '1%'}}>
            <div className="Tracks__img-container">
              <img src={mars} className="Tracks__saturn"></img>
            </div>
            <h2 className="Tracks__sub-header">Mars</h2>
            <p className="Tracks__description">The explosive growth of cybersecurity is dedicated to the fiery attributes of Mars. Mars projects focus on increasing the feeling of safety and security within our planet.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Tracks;

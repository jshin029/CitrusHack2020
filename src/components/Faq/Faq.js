import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Icon } from 'antd';
import AOS from 'aos';
import './Faq.css';

const dots3 = require('../assets/dots3.svg');

class Faq extends Component {
  render(){
    return(
      <div className="container-fluid Faq">
        <div className="row faq">
          <h1 className="Faq__header">FAQ</h1>
          <div className="col-4 Faq__col">
            <div className="Faq__inner_container" style={{animation: `moveUpDown ${Math.floor(Math.random() * 5) + 2}s linear infinite`}}>
              <h1 className="Faq__inner_title">What is a hackathon?</h1>
              <p className="Faq__inner_text">A hackathon is a place where you and hundreds of other people learn, build, and create new technologies over the course of one weekend! Hackathons let you try learning a new skill, commit to that crazy idea you've never had time for, or make new friendships and strengthen old ones.</p>
            </div>
            <div className="Faq__inner_container" style={{marginTop: '10%', animation: `moveUpDown ${Math.floor(Math.random() * 5) + 2}s linear infinite`}}>
              <h1 className="Faq__inner_title">Do I need a team?</h1>
              <p className="Faq__inner_text">Teams are not required, but are recommended. Teams are capped at 4 members and you will have an opportunity to form teams at the start of the event as well.</p>
            </div>
          </div>
          <div className="col-4 Faq__col">
            <div className="Faq__inner_container" style={{marginTop: '8%', animation: `moveUpDown ${Math.floor(Math.random() * 5) + 2}s linear infinite`}}>
              <h1 className="Faq__inner_title">Who can attend?</h1>
              <p className="Faq__inner_text">Any college or high school students of any major over 18 years of age from anywhere in the world are eligible (This includes graduate students). If you are enrolled at a UC campus but not yet 18, you are also eligible to participate. </p>
            </div>
            <div className="Faq__inner_container" style={{marginTop: '14%', animation: `moveUpDown ${Math.floor(Math.random() * 5) + 2}s linear infinite`}}>
              <h1 className="Faq__inner_title">Is Citrus Hack free?</h1>
              <p className="Faq__inner_text">Absolutely! There is no cost to attend, but do bring your own hacking device(s)! Meals, refreshments, and snacks will be provided throughout the event. </p>
            </div>
          </div>
          <div className="col-4 Faq__col">
            <div className="Faq__inner_container" style={{animation: `moveUpDown ${Math.floor(Math.random() * 5) + 2}s linear infinite`}}>
              <h1 className="Faq__inner_title">Travel Reimbursements</h1>
              <p className="Faq__inner_text">We will be providing travel reimbursements to any participants who is carpooling to the event with 3 or more people. Unfortunately, no buses will be provided this year. </p>
            </div>
            <div className="Faq__inner_container" style={{marginTop: '12%', animation: `moveUpDown ${Math.floor(Math.random() * 5) + 2}s linear infinite`}}>
              <h1 className="Faq__inner_title">What should I bring?</h1>
              <p className="Faq__inner_text">A valid student or government-issued ID is required for admission. Consider bringing a hacking machine (monitors, hardware kits, etc.), chargers,  headphones, and computer peripherals. Feel free to bring your own hardware parts as well. Soldering will be allowed at the event for a limited time. Make sure to bring a change of clothes, a toothbrush, and any other necessities. Don’t forget your sleeping bag if you plan on staying overnight! </p>
            </div>
            <img className="Faq__dots" src={dots3} />
          </div>
        </div>
        <div className="faqMobile">
        <h1 className="Faq__header">FAQ</h1>
        <div className="Faq__inner_container" >
              <h1 className="Faq__inner_title">What is a hackathon?</h1>
              <p className="Faq__inner_text">A hackathon is a place where you and hundreds of other people learn, build, and create new technologies over the course of one weekend! Hackathons let you try learning a new skill, commit to that crazy idea you've never had time for, or make new friendships and strengthen old ones.</p>
            </div>
            <div className="Faq__inner_container">
              <h1 className="Faq__inner_title">Do I need a team?</h1>
              <p className="Faq__inner_text">Teams are not required, but are recommended. Teams are capped at 4 members and you will have an opportunity to form teams at the start of the event as well.</p>
            </div>
            <div className="Faq__inner_container">
              <h1 className="Faq__inner_title">Who can attend?</h1>
              <p className="Faq__inner_text">We welcome all undergraduate and graduate students to attend. </p>
            </div>
            <div className="Faq__inner_container">
              <h1 className="Faq__inner_title">Is Citrus Hack free?</h1>
              <p className="Faq__inner_text">Absolutely! There is no cost to attend, but do bring your own hacking device(s)!</p>
            </div>
            <div className="Faq__inner_container" >
              <h1 className="Faq__inner_title">Is there free food?</h1>
              <p className="Faq__inner_text">Yes! Meals, refreshments, and snacks will be provided throughout the event</p>
            </div>
            <div className="Faq__inner_container" >
              <h1 className="Faq__inner_title">What should I bring?</h1>
              <p className="Faq__inner_text">Student IDs are required. Consider bringing a hacking machine, headphones, and computer peripherals. Feel free to bring your own parts as well but note that soldering is not allowed at Citrus Hack.</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Faq;

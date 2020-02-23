import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Icon } from 'antd';
import AOS from 'aos';
import './Faq.css';


class Arrow extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
    this.state = {
      collapse: false
    };
  }

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render(){
    return(
      <div>
        <div className="flex">
          <div className="faqTitle">{this.props.title}</div>
          <Icon onClick={this.toggle} className="arrowIcon" type="down" />
        </div>
        <Collapse isOpen={this.state.collapse}>
          <Card className="cardStyling">
            <CardBody className="faqText">{this.props.body}</CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }
}

class Faq extends Component {


  render(){
    return(
      <div className="container-fluid Faq">
        <div className="row">
          <h1 className="Faq__header">FAQ</h1>
          <div className="col-6">
              <div>
                 <Arrow title={'What is a hackathon?'} body={"A hackathon is a place where you and hundreds of other people learn, build, and create new technologies over the course of one weekend! Hackathons let you try learning a new skill, commit to that crazy idea you've never had time for, or make new friendships and strengthen old ones."} />
               </div>
          </div>
          <div className="col-6">
          </div>
        </div>
      </div>
    )
  }
}

export default Faq;

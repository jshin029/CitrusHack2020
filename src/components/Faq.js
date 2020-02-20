import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import AOS from 'aos';
import { Icon } from 'antd';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


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
            <div className="subfaqTitle" style={{fontSize: '30px'}}>{this.props.title}</div>
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
            <div>
                            <div style={{width: '100%', textAlign: 'center', }}>
              <h1 className="sec3Title" style={{fontSize: '40px', fontWeight:'750', color:'#373A56'}}>FAQs</h1>
            </div>
            <Container fluid className="noPadding">
              <Row className="noMarginFAQ">
                <Col className="noPadding">
                  <div className="faqBubble" >
                    <div className="primaryFaq" style={{textAlign: 'center'}}>
                      <Arrow style={{fontSize: '30px'}} title={'What is a hackathon?'} body={"A hackathon is a place where you and hundreds of other people learn, build, and create new technologies over the course of one weekend! Hackathons let you try learning a new skill, commit to that crazy idea you've never had time for, or make new friendships and strengthen old ones."} />
                    </div>
                    <div className="secondaryFaq" style={{textAlign: 'center'}}>
                      <Arrow className="title" title={'Who can attend?'} body={'We welcome all undergraduate students from UCR, RCC, and CBU to attend. High school students in the surrounding area are also encouraged to attend!'} />
                    </div>
                    <div className="secondaryFaq" style={{textAlign: 'center'}}>
                      <Arrow className="title" title={'Is there free food?'} body={'Yes! Meals, refreshments, and snacks will be provided throughout the event'} />
                    </div>
                    <div className="secondaryFaq" style={{textAlign: 'center'}}>
                      <Arrow className="title" title={'Do I need a team?'} body={'Teams are not required, but are recommended. Teams are capped at 4 members and you will have an opportunity to form teams at the start of the event as well.'} />
                    </div>

                  </div>
                </Col>
                <Col className="noPadding">
                  <div className="faq2Bubble">
                    <div style={{textAlign: 'center'}}>
                      <Arrow title={'Is Cutie Hack free?'} body={'Absolutely! There is no cost to attend, but do bring your own hacking device(s)!'} />
                    </div>
                    <div className="secondaryFaq" style={{textAlign: 'center'}}>
                      <Arrow title={'What should I bring?'} body={'Student IDs are required. Consider bringing a hacking machine, headphones, and computer peripherals. Feel free to bring your own parts as well but note that soldering is not allowed at Cutie Hack.'} />
                    </div>
                    <div className="secondaryFaq" style={{textAlign: 'center'}}>
                      <Arrow title={"What if I don't know how to code?"} body={'Cutie Hack is a beginner friendly hackathon and open to all skill levels. During the event take the time to checkout workshops and collaborate with others!'} />
                    </div>
                    <div className="secondaryFaq" style={{textAlign: 'center'}}>
                      <Arrow title={'What if I still have questions?'} body={"Email us at citrushack@gmail.com. We love answering questions!"} />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            </div>
        )
    }
}

export default Faq;
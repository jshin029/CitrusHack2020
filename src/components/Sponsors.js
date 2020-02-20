import React, { Component } from 'react';
import { Icon } from 'antd';
import './css/Sponsors.css';
import { Row, Container, Col } from 'react-bootstrap';
const tangerine = require('./assets/tangerine.png');
const cutieIcon = require('./assets/cutieHome.png');
const cutieFooter = require('./assets/cutieFooter.png');
const acm = require('./assets/acm.png');
const ieee = require('./assets/ieee.png');
const volunteer = require('./assets/CUTIE_volunteers.png');
const mentor = require('./assets/CUTIE_mentors.png');
const aspb = require('./assets/aspb.png');
const beans = require('./assets/beans.png');
const blackberry = require('./assets/blackberry.png');
const blackstone = require('./assets/blackstone.png');
const wolfram = require('./assets/wolfram.svg');
const xyz = require('./assets/xyz.png');
const gcap = require('./assets/gcap.png');
class Sponsors extends Component {


    render() {
        return (
            <div className="Sponsors">
            <div className="section4">
            <div style={{width: '100%', textAlign: 'center'}}>
     
                <div style={{marginTop: '18%'}}>
                    <h1 className="sec4Title">Sponsors</h1>
                    <Container style={{marginTop: '60px'}} fluid className="noPadding">
                        <Row className="noMarginSponsor">
                            <Col className="noPaddingSponsor">
                                <a href="https://aspb.ucr.edu/">
                                    <img className="acm" src={aspb}></img>
                                </a>
                            </Col>
                            <Col className="noPaddingSponsor">
                                <a href="https://www.badabeansnacks.com/">
                                    <img className="ieee" src={beans}></img>
                                </a>
                            </Col>
                            <Col className="noPaddingSponsor">
                                <a href="https://www.blackstonelaunchpad.org/">
                                    <img className="ieee" src={blackstone}></img>
                                </a>
                            </Col>
                            <Col className="noPaddingSponsor">
                                <a href="https://www.gcapucr.com/">
                                    <img className="ieee" src={gcap}></img>
                                </a>
                            </Col>
                            <Col className="noPaddingSponsor">
                                <a href="https://www.wolframalpha.com/">
                                    <img className="ieee" src={wolfram}></img>
                                </a>
                            </Col>
                            <Col className="noPaddingSponsor">
                                <a href="https://gen.xyz/">
                                    <img className="ieee" src={xyz}></img>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        {/* <img className="homeFooter" src={cutieFooter}></img> */}
        </div>



        <div className="footer">
            <div className="footerWrap">
                <div style={{margin: 'auto'}}>
                    <a href="https://www.facebook.com/cutiehack/"><Icon className="footerIcon2" type="facebook" /></a>
                    <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=citrushack@gmail.com'"><Icon className="footerIcon" type="mail" /></a>
                    <a href="https://twitter.com/citrushack"><Icon className="footerIcon" type="twitter-square" theme="filled" /></a>
                    <a href="https://www.instagram.com/citrushack_ucr/"><Icon className="footerIcon3" type="instagram" /></a>
                </div>
            </div>
            <div style={{textAlign: 'center'}}>
                <p className="footerText">Made with ♥ in Riverside, CA</p>
            </div>
            <div style={{paddingBottom: '0.5%', textAlign: 'center'}}>
                <p className="footerText">© 2020 Citrus Hack</p>
            </div>
        </div>


</div>
            );
}
}


export default Sponsors;






// <div>
// <h1 className="sec4Title">SPECIAL THANKS TO</h1>
// <Container style={{marginTop: '100px'}} fluid className="noPadding">
//     <Row className="noMarginSponsor">
//         <Col className="noPaddingSponsor">
//             <a href="https://gen.xyz/">
//                 <img className="xyz" src={xyz}></img>
//             </a>
//         </Col>
//         <Col className="noPaddingSponsor">
//             <a href="https://www.badabeansnacks.com/">
//                 <img className="beans" src={beans}></img>
//             </a>
//         </Col>
//     </Row>
//     <Row className="noMarginSponsor" style={{marginTop: '160px'}}>
//         <Col className="noPaddingSponsor">
//             <a href="https://www.wolframalpha.com//">
//                 <img className="wolfram" src={wolfram}></img>
//             </a>
//         </Col>
//         <Col className="noPaddingSponsor">
//             <a href="https://www.blackstonelaunchpad.org/">
//                 <img className="blackstone" src={blackstone}></img>
//             </a>
//         </Col>
//     </Row>
//     <Row className="noMarginSponsor" style={{marginTop: '180px'}}>
//         <Col className="noPaddingSponsor">
//             <a href="https://aspb.ucr.edu/">
//                 <img className="aspb" src={aspb}></img>
//             </a>
//         </Col>
//         <Col className="noPaddingSponsor">
//             <a href="https://www.gcapucr.com/">
//                 <img className="gcap" src={gcap}></img>
//             </a>
//         </Col>
//     </Row>
// </Container>
// </div>



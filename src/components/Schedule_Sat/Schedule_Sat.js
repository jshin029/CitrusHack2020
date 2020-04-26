import React, { Component } from 'react';
// import SideNav from './SideNav';
import { Animated } from 'react-animated-css';
import './Schedule_Sat.css'
const icon = require('../assets/citrus_icon.png');
// import LiveMobileNavbar from './LiveMobileNavbar';


class Schedule_Sat extends Component {
  state = {
  }

  render() {
    return(

        <div className="scheduleLeft">
            <div className="day">SATURDAY</div>
        <div className="container innerSchedule">
          <div className="row" style={{height: '105%'}}>
            <div className="col xs=12 scheduleSec1">
              <h4 className="scheduleHeaders">LOGISTICS</h4>
              <Animated animationIn="fadeIn" isVisible={true}>
              <div style={{width: '35%', border: '1px solid #F7DE98', margin: 'auto', marginTop: '-4px', marginBottom: '12px'}}></div>
              </Animated>
                <div className="scheduleSlot">
                  <div className="scheduleSection">
                    <div className="innerLeftSchedule">Check In</div>
                    <div className="innerRightSchedule">7:00AM-12:00PM</div>
                  </div>
                  <a href="https://citrus-hack.typeform.com/to/z1W5bH"><div className="scheduleLoc">Check in Link</div></a>
                </div>
                <div className="scheduleSlot">
                  <div className="scheduleSection">
                    <div className="innerLeftSchedule">Opening Ceremony</div>
                    <div className="innerRightSchedule">9:00AM-10:00AM</div>
                  </div>
                  <a href="https://www.youtube.com/watch?v=_SB0XmXNaus"><div className="scheduleLoc">Youtube Live</div></a>
                </div>
                <div className="scheduleSlot">
                  <div className="scheduleSection">
                    <div className="innerLeftSchedule">Hacking Begins</div>
                    <div className="innerRightSchedule">11:00AM</div>
                    </div>
                  <div className="scheduleLoc"></div>
                </div>
                {/* <div className="scheduleSlot">
                  <div className="scheduleSection">
                    <div className="innerLeftSchedule">Hacking</div>
                    <div className="innerRightSchedule">9:00AM-9:00PM</div>
                  </div>
                  <div className="scheduleLoc">WCH</div>
                </div> */}
                {/* <div className="scheduleSlot">
                  <div className="scheduleSection">
                    <div className="innerLeftSchedule">Lunch</div>
                    <div className="innerRightSchedule">12:30PM-2:00PM</div>
                  </div>
                  <div className="scheduleLoc">Bytes</div>
                </div> */}
                {/* <div className="scheduleSlot">
                  <div className="scheduleSection">
                    <div className="innerLeftSchedule">Dinner</div>
                    <div className="innerRightSchedule">6:00PM-8:00PM</div>
                  </div>
                  <div className="scheduleLoc">Bytes</div>
                </div> */}
                {/* <div className="scheduleSlot">
                  <div className="scheduleSection">
                    <div className="innerLeftSchedule">Demos</div>
                    <div className="innerRightSchedule">9:15PM-10:30PM</div>
                  </div>
                  <div className="scheduleLoc">WCH 205/206</div>
                </div> */}
                {/* <div className="scheduleSlot">
                  <div className="scheduleSection">
                    <div className="innerLeftSchedule">Closing Ceremony</div>
                    <div className="innerRightSchedule">10:30PM-11:00PM</div>
                  </div>
                  <div className="scheduleLoc">MSE 104</div>
                </div> */}
            </div>
            <div className="mobileSeparate"></div>
            <div className="col xs={12} lg={4} scheduleSec2">
              <h4 className="scheduleHeaders">WORKSHOPS</h4>
              <div style={{width: '35%', border: '1px solid #F7DE98', margin: 'auto', marginTop: '-4px', marginBottom: '12px'}}></div>
              <div className="scheduleSlot">
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">Google Cloud Wkshp</div>
                  <div className="innerRightSchedule">12:00PM-1:00PM</div>
                </div>
                <a href="https://meet.google.com/sct-mjgy-ucf"><div className="scheduleLoc">Workshop Room 1</div></a>
              </div>
              <div className="scheduleSlot">
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">ACM Intro to Git</div>
                  <div className="innerRightSchedule">12:00PM-1:00PM</div>
                </div>
                <a href="https://meet.google.com/dur-vbav-vjk"><div className="scheduleLoc">Workshop Room 2</div></a>
              </div>
              <div className="scheduleSlot">
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">Speaker: See-Mong Tan</div>
                  <div className="innerRightSchedule">2:00PM-2:30PM</div>
                </div>
                <a href="https://meet.google.com/sct-mjgy-ucf"><div className="scheduleLoc">Workshop Room 1</div></a>
              </div>
              <div className="scheduleSlot">
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">Speaker: Tammy Ma</div>
                  <div className="innerRightSchedule">3:00PM-3:30PM</div>
                </div>
                <a href="https://meet.google.com/dur-vbav-vjk"><div className="scheduleLoc">Workshop Room 2</div></a>
              </div>
              <div className="scheduleSlot">
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">Intro to Android Dev</div>
                  <div className="innerRightSchedule">4:00PM-5:00PM</div>
                </div>
                <a href="https://meet.google.com/sct-mjgy-ucf"><div className="scheduleLoc">Workshop Room 1</div></a>
              </div>
              <div className="scheduleSlot">
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">Web Development</div>
                  <div className="innerRightSchedule">4:00PM-5:00PM</div>
                </div>
                <a href="https://meet.google.com/dur-vbav-vjk"><div className="scheduleLoc">Workshop Room 2</div></a>
              </div>
              <div className="scheduleSlot">
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">Intro to Linux </div>
                  <div className="innerRightSchedule">5:00PM-6:00PM</div>
                </div>
                <a href="https://meet.google.com/sct-mjgy-ucf"><div className="scheduleLoc">Workshop Room 1</div></a>
              </div>
              <div className="scheduleSlot">
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">IEEE Python Webservers </div>
                  <div className="innerRightSchedule">5:00PM-6:00PM</div>
                </div>
                <a href="https://meet.google.com/dur-vbav-vjk"><div className="scheduleLoc">Workshop Room 2</div></a>
              </div>
              <div className="scheduleSlot">
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">Resume Workshop</div>
                  <div className="innerRightSchedule">6:30PM-7:30PM</div>
                </div>
                <a href="https://meet.google.com/sct-mjgy-ucf"><div className="scheduleLoc">Workshop Room 1</div></a>
              </div>
              <div className="scheduleSlot">
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">Linkedin 101</div>
                  <div className="innerRightSchedule">6:30PM-7:30PM</div>
                </div>
                <a href="https://meet.google.com/dur-vbav-vjk"><div className="scheduleLoc">Workshop Room 2</div></a>
              </div>
              <div className="scheduleSlot">
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">Meet the Organizers</div>
                  <div className="innerRightSchedule">9:00PM-10:00PM</div>
                </div>
                <a href="https://meet.google.com/sct-mjgy-ucf"><div className="scheduleLoc">Workshop Room 1</div></a>
              </div>
              <div className="scheduleSlot">
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">Graphic Design 101</div>
                  <div className="innerRightSchedule">9:00PM-10:00PM</div>
                </div>
                <a href="https://meet.google.com/dur-vbav-vjk"><div className="scheduleLoc">Youtube Live</div></a>
              </div>
              {/* <div className="scheduleSlot">
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">How to Pitch Your Project</div>
                  <div className="innerRightSchedule">6:30PM-7:30PM</div>
                </div>
                <div className="scheduleLoc">Bourns A125</div>
              </div> */}
            </div>
            <div className="mobileSeparate"></div>
            <div className="col xs={12} lg={4} scheduleSec3">
            <h4 className="scheduleHeaders">ACTIVITIES</h4>
            <div style={{width: '35%', border: '1px solid #F7DE98', margin: 'auto', marginTop: '-4px', marginBottom: '12px'}}></div>
              <div className="scheduleSlot">
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">Team Building</div>
                  <div className="innerRightSchedule">10:00AM-11:00AM</div>
                </div>
                <a href="https://hangouts.google.com/call/iSXbPN32qwjf1_ty5PMEAEEE?no_rd"><div className="scheduleLoc">Activity Room</div></a>
              </div>
              <div className="scheduleSlot">
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">Google Cloud OH</div>
                  <div className="innerRightSchedule">11:00AM-9:00AM</div>
                </div>
                <a href="https://meet.google.com/ymm-pqng-jrq"><div className="scheduleLoc">Google Cloud Room</div></a>
              </div>
              <div className="scheduleSlot">
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">MLH Capture the Flag</div>
                  <div className="innerRightSchedule">1:00PM-2:00PM</div>
                </div>
                <div className="scheduleLoc">Discord</div>
              </div>

              <div className="scheduleSlot" style={{paddingTop: '100px'}}>
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">Dalgona Coffee Competition</div>
                  <div className="innerRightSchedule">6:30PM-7:30PM</div>
                </div>
                <a href="https://hangouts.google.com/call/iSXbPN32qwjf1_ty5PMEAEEE?no_rd"> <div className="scheduleLoc">Activity Room</div></a>
              </div>
              <div className="scheduleSlot" style={{paddingTop: '100px'}}>
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">MLH Code in the Dark</div>
                  <div className="innerRightSchedule">8:00PM-9:00PM</div>
                </div>
                <a href="https://hangouts.google.com/call/iSXbPN32qwjf1_ty5PMEAEEE?no_rd"><div className="scheduleLoc">Activity Room</div></a>
              </div>
              <div className="scheduleSlot" style={{paddingTop: '100px'}}>
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">1517 Office Hours</div>
                  <div className="innerRightSchedule">8:00PM-9:00PM</div>
                </div>
                <a href="https://meet.google.com/ssy-impw-jqy"> <div className="scheduleLoc">Sponsor Room</div></a>
              </div>
              <div className="scheduleSlot" style={{paddingTop: '100px'}}>
                <div className="scheduleSection">
                  <div className="innerLeftSchedule">Jackbox Games</div>
                  <div className="innerRightSchedule">10:00PM-11:00PM</div>
                </div>
                <a href="https://hangouts.google.com/call/iSXbPN32qwjf1_ty5PMEAEEE?no_rd"> <div className="scheduleLoc">Activity Room</div></a>
              </div>
            </div>
          </div>
        </div>
        </div>
        )
  }



}

export default Schedule_Sat;

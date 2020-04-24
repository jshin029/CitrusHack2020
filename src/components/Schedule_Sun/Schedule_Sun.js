import React, { Component } from 'react';
// import SideNav from './SideNav';
import { Animated } from 'react-animated-css';
import './Schedule_Sun.css'
const icon = require('../assets/citrus_icon.png');
// import LiveMobileNavbar from './LiveMobileNavbar';


class Schedule_Sun extends Component {
  state = {
  }

  render() {
    return(



<div className="scheduleLeft">
<div className="day">SUNDAY</div>
<div className="container innerSchedule">
  <div className="row" style={{height: '110%'}}>
    <div className="col xs=12 scheduleSec1">
      <h4 className="scheduleHeaders">LOGISTICS</h4>
      <Animated animationIn="fadeIn" isVisible={true}>
      <div style={{width: '35%', border: '1px solid #F7DE98', margin: 'auto', marginTop: '-4px', marginBottom: '12px'}}></div>
      </Animated>
        <div className="scheduleSlot">
          <div className="scheduleSection">
            <div className="innerLeftSchedule">Hacking Ends</div>
            <div className="innerRightSchedule">11:00AM</div>
          </div>
          <div className="scheduleLoc"></div>
        </div>
        <div className="scheduleSlot">
          <div className="scheduleSection">
            <div className="innerLeftSchedule">Judging</div>
            <div className="innerRightSchedule">12:00PM-3:00PM</div>
          </div>
          <div className="scheduleLoc"></div>
        </div>
        {/* <div className="scheduleSlot">
          <div className="scheduleSection">
            <div className="innerLeftSchedule">Deliberations</div>
            <div className="innerRightSchedule">1:30PM-2:00PM</div>
            </div>
          <div className="scheduleLoc"></div>
        </div> */}
        <div className="scheduleSlot">
          <div className="scheduleSection">
            <div className="innerLeftSchedule">Closing Ceremony</div>
            <div className="innerRightSchedule">3:30PM-4:30PM</div>
          </div>
          <div className="scheduleLoc">Youtube Link</div>
        </div>
        {/* <div className="scheduleSlot">
          <div className="scheduleSection">
            <div className="innerLeftSchedule">Lunch</div>
            <div className="innerRightSchedule">12:30PM-2:00PM</div>
          </div>
          <div className="scheduleLoc">Bytes</div>
        </div>
        <div className="scheduleSlot">
          <div className="scheduleSection">
            <div className="innerLeftSchedule">Dinner</div>
            <div className="innerRightSchedule">6:00PM-8:00PM</div>
          </div>
          <div className="scheduleLoc">Bytes</div>
        </div>
        <div className="scheduleSlot">
          <div className="scheduleSection">
            <div className="innerLeftSchedule">Demos</div>
            <div className="innerRightSchedule">9:15PM-10:30PM</div>
          </div>
          <div className="scheduleLoc">WCH 205/206</div>
        </div>
        <div className="scheduleSlot">
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
      {/* <div className="scheduleSlot">
        <div className="scheduleSection">
          <div className="innerLeftSchedule">Meet the Organizers</div>
          <div className="innerRightSchedule">2:00AM-3:00AM</div>
        </div>
        <div className="scheduleLoc">MSE 104</div>
      </div> */}
      <div className="scheduleSlot">
        <div className="scheduleSection">
          <div className="innerLeftSchedule">Devpost Troublshooting</div>
          <div className="innerRightSchedule">8:00AM-9:00AM</div>
        </div>
        <a href="https://meet.google.com/sct-mjgy-ucf"><div className="scheduleLoc">Workshop Room 1</div></a>
      </div>
      {/* <div className="scheduleSlot">
        <div className="scheduleSection">
          <div className="innerLeftSchedule">Intro to Git</div>
          <div className="innerRightSchedule">10:00AM-11:00AM</div>
        </div>
        <div className="scheduleLoc">WCH 110</div>
      </div>
      <div className="scheduleSlot">
        <div className="scheduleSection">
          <div className="innerLeftSchedule">Front End Web Dev.</div>
          <div className="innerRightSchedule">11:30AM-12:30PM</div>
        </div>
        <div className="scheduleLoc">Bourns A125</div>
      </div>
      <div className="scheduleSlot">
        <div className="scheduleSection">
          <div className="innerLeftSchedule">Intro Google API's</div>
          <div className="innerRightSchedule">11:30AM-12:30PM</div>
        </div>
        <div className="scheduleLoc">WCH 110</div>
      </div>
      <div className="scheduleSlot">
        <div className="scheduleSection">
          <div className="innerLeftSchedule">Intro to Flask</div>
          <div className="innerRightSchedule">1:30PM-2:30PM</div>
        </div>
        <div className="scheduleLoc">Bourns A125</div>
      </div>
      <div className="scheduleSlot">
        <div className="scheduleSection">
          <div className="innerLeftSchedule">IOS App Dev.</div>
          <div className="innerRightSchedule">1:30PM-2:30PM</div>
        </div>
        <div className="scheduleLoc">WCH 110</div>
      </div>
      <div className="scheduleSlot">
        <div className="scheduleSection">
          <div className="innerLeftSchedule">Intro to Linux</div>
          <div className="innerRightSchedule">3:00PM-4:00PM</div>
        </div>
        <div className="scheduleLoc">Bourns A125</div>
      </div>
      <div className="scheduleSlot">
        <div className="scheduleSection">
          <div className="innerLeftSchedule">MLH Workshop</div>
          <div className="innerRightSchedule">3:00PM-4:00PM</div>
        </div>
        <div className="scheduleLoc">WCH 110</div>
      </div>
      <div className="scheduleSlot">
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
          <div className="innerLeftSchedule">Midnight Mukbang</div>
          <div className="innerRightSchedule">12:00AM-1:00AM</div>
        </div>
        <div className="scheduleLoc">Activity Room</div>
      </div>
      <div className="scheduleSlot">
        <div className="scheduleSection">
          <div className="innerLeftSchedule">shellshock.io Tournament</div>
          <div className="innerRightSchedule">4:00AM-5:30AM</div>
        </div>
        <div className="scheduleLoc">Activity Room</div>
      </div>
      <div className="scheduleSlot">
        <div className="scheduleSection">
          <div className="innerLeftSchedule">Music Session</div>
          <div className="innerRightSchedule">7:00AM-8:00AM</div>
        </div>
        <div className="scheduleLoc">Activity Room</div>
      </div>
      {/* <div className="scheduleSlot">
        <div className="scheduleSection">
          <div className="innerLeftSchedule">Raffle 3</div>
          <div className="innerRightSchedule">9:00AM</div>
        </div>
        <div className="scheduleLoc">?????</div>
      </div> */}
      {/* <div className="scheduleSlot">
        <div className="scheduleSection">
          <div className="innerLeftSchedule">Raffle 4</div>
          <div className="innerRightSchedule">1:00PM</div>
        </div>
        <div className="scheduleLoc">Bytes</div>
      </div> */}
      {/* <div className="scheduleSlot">
        <div className="scheduleSection">
          <div className="innerLeftSchedule">Typing Contest</div>
          <div className="innerRightSchedule">5:00PM-5:30PM</div>
        </div>
        <div className="scheduleLoc">Bytes</div>
      </div> */}
    </div>
  </div>
</div>
</div>

)
  }



}
export default Schedule_Sun;
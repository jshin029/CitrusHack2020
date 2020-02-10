import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
import Home from './components/Home';
import Subscribe from './components/Subscribe';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
        <div className='app' style={{backgroundColor: '#ececee'}}>
          <Navbar />
          <Home />
      </div>
  );
}

export default App;
        // <HashRouter basename="/">
        //   <Switch>
        //     <Route exact path="/" component={Home}/>
        //     <Route path="/login" component={Login}/>
        //     <Route path="/forgotpassword" component={ForgotPassword}/>
        //     <Route path="/passwordreset/:token" component={PasswordReset}/>
        //     <Route path="/administratorDashboard" component={AdminDashboard}/>
        //     <Route path="/schedule" component={Schedule}/>
        //     <Route path="/map" component={Map}/>
        //     <Route path="/judges" component={Judges}/>
        //     <Route path="/live" component={Live}/>
        //     <PrivateRoute path='/profile' component={Profile} isAuthenticated={this.props.currentUser.profile}/>
        //   </Switch>
        // </HashRouter>

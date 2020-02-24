import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';


function App() {
  return (
        <div className='app' style={{backgroundColor: '#ececee'}}>
          <Navbar />
          <Home />
          <About />
          <Faq />
          <Footer />
      </div>
  );
}

export default App;

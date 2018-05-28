import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {Routes} from './Routes';
import Footer from './components/FooterContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <div style={{height:"2px", paddingTop:"49px"}} ></div>
        <Routes/>
        <Footer/>
      </div>
    );
  }
}

export default App;

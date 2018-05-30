import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {Routes} from './Routes';
import Footer from './components/FooterContainer';
import {withRouter} from 'react-router-dom';
import AdminNavBar from './components/admin/AdminNavBar';

class App extends Component {

  // state = {
  //   user: {}
  // }

  //     componentWillMount(){
  //       //if(!localStorage.getItem("user")) return this.props.history.push('/');
  //       if(localStorage.getItem("user")){
  //         let user = localStorage.getItem("user");
  //         this.setState({user})
  //         return;
  //       }
  //   }

  render() {
    // const {user} = this.state;
    return (
      
      <div className="App">
        <AdminNavBar/>
        <NavBar />
        <div style={{height:"2px", paddingTop:"49px"}} ></div>
        <Routes/>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);

import React, { Component } from 'react'
import SideBar from './common/sideBar';
import NavTop from './common/navTop';
import Content from './common/Content';
import Footer from './common/Footer'

export default class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <SideBar/>
        
        <div id="content-wrapper" className="d-flex flex-column">

          <div id="content">
            <NavTop/>  
          </div>
          <div className="container-fluid">
            <Content />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

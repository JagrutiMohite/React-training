import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SideBar from './common/sideBar';
import NavTop from './common/navTop';
import Dashboard from './COVID-19/Dashboard';
import Footer from './common/Footer';
import Covid from './COVID-19/Covid';
import Search from './COVID-19/Search';
import Report from './COVID-19/Report';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div id="wrapper">
          <SideBar/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <NavTop/>  
            
            <div className="container-fluid">
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/covid">
                <Covid />
              </Route>
              <Route path="/search">
                <Search/>
              </Route>
              <Route path="/report">
                <Report />
              </Route>
            </Switch>
            </div>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

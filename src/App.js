import './App.css';
import React, { Component } from 'react'

import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';


export default class App extends Component {
  pageSize=12;
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/'><News key="science" pageSize={this.pageSize} countryCode='in' category='science'/></Route>
          <Route exact path='/business'><News key="business" pageSize={this.pageSize} countryCode='in' category='business'/></Route>
          <Route exact path='/entertainment'><News key="entertainment" pageSize={this.pageSize} countryCode='in' category='entertainment'/></Route>
          <Route exact path='/general'><News key="general" pageSize={this.pageSize} countryCode='in' category='general'/></Route>
          <Route exact path='/health'><News key="health" pageSize={this.pageSize} countryCode='in' category='health'/></Route>
          <Route exact path='/science'><News key="science" pageSize={this.pageSize} countryCode='in' category='science'/></Route>
          <Route exact path='/sports'><News key="sports" pageSize={this.pageSize} countryCode='in' category='sports'/></Route>
          <Route exact path='/technology'><News key="technology" pageSize={this.pageSize} countryCode='in' category='technology'/></Route>
        </Switch>
        </Router>
      </div>
      
    )
  }
}

import './App.css';
import React, { Component } from 'react'

import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  pageSize=12;
  apikey="57aa3216c1454446802c55b591c26616" //process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
setProgress=(progress)=>{
  this.setState({progress:progress})

}

  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress= {this.state.progress}
        
      />
        <Switch>
          <Route exact path='/'><News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={this.pageSize} countryCode='in' category='science'/></Route>
          <Route exact path='/business'><News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={this.pageSize} countryCode='in' category='business'/></Route>
          <Route exact path='/entertainment'><News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={this.pageSize} countryCode='in' category='entertainment'/></Route>
          <Route exact path='/general'><News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} countryCode='in' category='general'/></Route>
          <Route exact path='/health'><News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={this.pageSize} countryCode='in' category='health'/></Route>
          <Route exact path='/science'><News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={this.pageSize} countryCode='in' category='science'/></Route>
          <Route exact path='/sports'><News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={this.pageSize} countryCode='in' category='sports'/></Route>
          <Route exact path='/technology'><News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={this.pageSize} countryCode='in' category='technology'/></Route>
        </Switch>
        </Router>
      </div>
      
    )
  }
}

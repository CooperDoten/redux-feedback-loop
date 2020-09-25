import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'



class Understanding extends Component {
    onNext= () => {
        //we need withRouter() to use
        //props.history.push(this is what page we are pushing to)
        this.props.history.push('/3');
          }  
  render() {
    return (
      <div className="App">
         <Router>
          <input type="number" placeholder="Understanding"/>
          <button onClick={this.onNext}>Next</button>
        </Router>
      </div>
     
    );
  }
}

export default connect()(withRouter((Understanding)));
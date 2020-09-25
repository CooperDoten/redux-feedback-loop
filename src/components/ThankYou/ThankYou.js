import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'



class ThankYou extends Component {
    onNext= () => {
        //we need withRouter() to use
        //props.history.push(this is what page we are pushing to)
        this.props.history.push('/');
    }
  render() {
   /*
   to do:
   make sure they fill out all the necessary inputs to submit
   */
    return (
      <div className="App">
         <Router>
             <p>THANK YOU FOR SUBMITTING</p>
          <button onClick={this.onNext}>Review Again</button>
        </Router>
      </div>
     
    );
  }
}

export default connect()(withRouter((ThankYou)));
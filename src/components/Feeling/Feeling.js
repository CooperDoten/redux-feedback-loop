import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Understanding from '../Understanding/Understanding'


class Feeling extends Component {

  onNext= () => {
    //we need withRouter() to use
    //props.history.push(this is what page we are pushing to)
    this.props.history.push('/2');
      }
  render() {

   
    return (
      <div className="App">
         <Router>
      
          <input type="number" placeholder="Feeling"/>
          <button onClick={this.onNext}>Next</button>
        </Router>
      </div>
     
    );
  }
}

export default connect()(withRouter((Feeling)));

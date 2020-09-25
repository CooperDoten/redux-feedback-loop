import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';



class Feeling extends Component {
  render() {
   
    return (
      <div className="App">
         <Router>
      
          <input type="number" placeholder="Feeling"/>
          <button><Link to="/2">Next</Link></button>
        </Router>
      </div>
     
    );
  }
}

export default connect()(Feeling);

import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import Feeling from '../Feeling/Feeling'


class App extends Component {
  render() {
    return (
      
      <div className="App">
          <Router>
            <header className="App-header">
              <h1 className="App-title">Feedback!</h1>
              <h4><i>Don't forget it!</i></h4>
            </header>
            <br/>
            <Feeling/>
        </Router>
      </div>
    );
  }
}

export default connect()(App);

import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comment/Comment';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou'



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
            <Route path="/" exact>
              <Feeling/>
            </Route>
            <Route path="/2" exact>
              <Understanding/>
           </Route>
            <Route path="/3" exact>
              <Support/>
            </Route>
            <Route path="/4" exact>
              <Comments/>
            </Route>
            <Route path="/5" exact>
              <Review/>
            </Route>
            <Route path="/6" exact>
              <ThankYou/>
            </Route>
        </Router>
      </div>
    );
  }
}

export default connect()(App);

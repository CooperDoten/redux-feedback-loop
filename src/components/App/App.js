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
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#74F2CE'
        },
        secondary: {
            main: '#ffc6ff'
        }
    }
});
class App extends Component {
  componentDidMount() {
    this.getFeedback();
  }  
  getFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback',
    }).then(response => {
      console.log('GET /feedback', response);
      this.props.dispatch({
          type: 'SET_ADMIN_REVIEW',
          payload: response.data
      });
    }).catch(err => {
      console.err('GET err', err);
    });
  }
  render() {
    return (
      
      <div className="App">
        <ThemeProvider theme={theme}>
          <Router>
            <header className="App-header">
              <h1 className="App-title">Prime Feedback Portal</h1>
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
            <Route path="/admin" exact>
              <Admin getFeedback ={this.getFeedback}/>
            </Route>
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default connect()(App);

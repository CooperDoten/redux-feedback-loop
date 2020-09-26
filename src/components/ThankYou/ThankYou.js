import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';



class ThankYou extends Component {
  onNext= () => {
    //props.history.push(this is what page we are pushing to)
    this.props.history.push('/');
  }
  render() {
   /*
   to do:
   make sure they fill out all the necessary inputs to submit
   */
    return (
      <div className="fb-div">
         <Router>
         <div className="fb-input-wrapper">
              <p>THANK YOU FOR SUBMITTING</p>
            <Button onClick={this.onNext}>Review Again</Button>
          </div>
        </Router>
      </div>
     
    );
  }
}

export default connect()(withRouter((ThankYou)));
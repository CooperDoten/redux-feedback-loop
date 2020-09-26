import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Card, CardContent} from '@material-ui/core';



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
         <Card className="fb-input-wrapper">
             <CardContent>
              <h1>Thank you for submitting</h1>
              <Button onClick={this.onNext}>Review Again</Button>
            </CardContent>
          </Card>
        </Router>
      </div>
     
    );
  }
}

export default connect()(withRouter((ThankYou)));
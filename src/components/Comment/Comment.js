import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './Comment.css';
import { TextField, Button, Card, CardContent } from '@material-ui/core';

class Comment extends Component {
  //setting local state
  state={
    comment: ''
  }
  //set value to user input
  addComments = (event) => {
    this.setState({
      comment: event.target.value
    });
    console.log(this.state.comment);
  }
  //check if user has input
  onNext= () => {
    if(this.state.comment === ''){
      alert('Please add a comment to continue');
    }
    else{
      this.props.dispatch({
        //send a comment
        type: "ADD_COMMENT",
        payload: this.state.comment
      });
        //push to next page on NEXT click
        this.props.history.push('/5');
    }
  }
  onBack = () => {
    //push to previous page on BACK click
    this.props.history.push('/3');
  }
  render() {
    return (
      <div className="fb-div">
         <Router>
         <Card className="fb-input-wrapper">
             <CardContent>
               <h1 className="fb-h1">Please comment on how you felt about your day</h1>
                <TextField 
                  id="filled-multiline-static"
                  multiline
                  rows={4}
                  label="Comments"
                  variant="filled"
                  type="text" 
                  onChange={this.addComments}/>
                <Button onClick={this.onNext}
                  id="review"
                  variant="contained" 
                  color="primary">Next</Button>
                <Button
                    id="review"
                    onClick={this.onBack}
                    variant="contained" 
                    color="secondary">Back</Button>
            </CardContent>
          </Card>
        </Router>
      </div>
    );
  }
}
export default connect()(withRouter((Comment)));
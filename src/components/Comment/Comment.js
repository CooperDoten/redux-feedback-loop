import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './Comment.css';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';


class Comment extends Component {

  state={
    comment: ''
  }
  addComments = (event) => {
    this.setState({
      comment: event.target.value
    });
    console.log(this.state.comment);
  }
  
  onNext= () => {
    if(this.state.comment === ''){
      alert('Please add a comment to continue');
    }
    else{
      this.props.dispatch({
        //send a feeling 
        type: "ADD_COMMENT",
        payload: this.state.comment
      })
        //props.history.push(this is what page we are pushing to)
        this.props.history.push('/5');
    }
  }
  render() {
    return (
      <div className="fb-div">
         <Router>
         <div className="fb-input-wrapper">
            <TextField 
                    id="filled-multiline-static"
                    multiline
                    rows={4}
                    label="Comments"
                    variant="filled"
                    type="text" 
                    onChange={this.addComments}/>
            <Button onClick={this.onNext}
                    variant="contained" 
                    color="primary">Next</Button>
          </div>
        </Router>
      </div>
     
    );
  }
}

export default connect()(withRouter((Comment)));
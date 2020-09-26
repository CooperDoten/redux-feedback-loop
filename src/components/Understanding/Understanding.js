import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';



class Understanding extends Component {
  state={
    understanding: ''
  }
  addingUnderstanding = (event) => {
    this.setState({
      understanding: event.target.value
    });
    console.log(this.state.understanding);
  }

  onNext= () => {
    if(this.state.understanding === ''){
      alert('Please add a rating to continue');
    }
    else{
    this.props.dispatch({
      //send understanding
      type: "ADD_UNDERSTANDING",
      payload: this.state.understanding
    })
    //props.history.push(this is what page we are pushing to)
    this.props.history.push('/3');
    }
  }  
  render() {
    console.log(this.state.understanding)
    return (
      <div className="fb-div">
         <Router>
          <div className="fb-input-wrapper">
          <h1 className="fb-h1">How was your understanding today?</h1>
            <TextField
                  type="number" 
                  required id="standard-required" 
                  label="Required"
                  placeholder="1-10"
                  onChange={this.addingUnderstanding}/>
            <Button
                    onClick={this.onNext}
                    variant="contained" 
                    color="primary">Next</Button>
          </div>
        </Router>
      </div>
     
    );
  }
}

export default connect()(withRouter((Understanding)));
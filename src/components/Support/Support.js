import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';


class Support extends Component {
  state={
    support: ''
  }
  addSupport = (event) => {
    this.setState({
      support: event.target.value
    });
    console.log(this.state.support);
  }
  
  onNext= () => {
    if(this.state.support === ''){
      alert('Please add a rating to continue');
    }
    else{
    this.props.dispatch({
      //send some support SOS!!
      type: "ADD_SUPPORT",
      payload: this.state.support
    })
    //props.history.push(this is what page we are pushing to)
     this.props.history.push('/4');
    }
  }
  render() {
    return (
      <div className="fb-div">
         <Router>
         <div className="fb-input-wrapper">
            <h1 className="fb-h1">How do you feel supported today?</h1>
            <TextField
                  type="number" 
                  required id="standard-required" 
                  label="Required"
                  placeholder="1-10"
                  onChange={this.addSupport}/>
            <Button onClick={this.onNext}
                    variant="contained" 
                    color="primary">Next</Button>
          </div>
        </Router>
      </div>
     
    );
  }
}

export default connect()(withRouter((Support)));
import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { TextField, Button, Card, CardContent } from '@material-ui/core';


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
    if(this.state.support === '' || this.state.feeling < 1 || this.state.feeling > 10){
      alert('Please add a rating between 1-10 to continue');
    }
    else{
    this.props.dispatch({
      //send some support SOS!!
      type: "ADD_SUPPORT",
      payload: this.state.support
    });
    //props.history.push(this is what page we are pushing to)
     this.props.history.push('/4');
    }
  }
  render() {
    return (
      <div className="fb-div">
         <Router>
         <Card className="fb-input-wrapper">
             <CardContent>
                <h1 className="fb-h1">How supported do you feel today?</h1>
                <TextField
                  type="number" 
                  required id="standard-required" 
                  label="Required"
                  placeholder="1-10"
                  onChange={this.addSupport}/>
                <Button onClick={this.onNext}
                  variant="contained" 
                  color="primary">Next</Button>
            </CardContent>
          </Card>
        </Router>
      </div>
     
    );
  }
}

export default connect()(withRouter((Support)));
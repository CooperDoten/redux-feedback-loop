import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { TextField, Button, Card, CardContent } from '@material-ui/core';



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
    if(this.state.understanding === '' || this.state.understanding < 1 || this.state.understanding > 10){
      alert('Please add a rating between 1-10 to continue');
    }
    else{
    this.props.dispatch({
      //send understanding
      type: "ADD_UNDERSTANDING",
      payload: this.state.understanding
    });
    //props.history.push(this is what page we are pushing to)
    this.props.history.push('/3');
    }
  }  
  onBack = () => {
    this.props.history.push('/')
  }
  render() {
    console.log(this.state.understanding)
    return (
      <div className="fb-div">
         <Router>
            <Card className="fb-input-wrapper">
             <CardContent>
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
                <Button
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

export default connect()(withRouter((Understanding)));
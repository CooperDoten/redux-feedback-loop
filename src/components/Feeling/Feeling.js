import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { TextField, Button, Card, CardContent } from '@material-ui/core';
import './Feeling.css'

class Feeling extends Component {

  state={
    feeling: ''
  }
  addingFeelings = (event) => {
    this.setState({
      feeling: event.target.value
    });
    console.log(this.state.feeling);
  }

  onNext= () => {
    if(this.state.feeling === '' || this.state.feeling < 1 || this.state.feeling > 10){
      alert('Please enter a rating between 1-10 to continue');
    }
    else{
      this.props.dispatch({
        //send a feeling 
        type: "ADD_FEELING",
        payload: this.state.feeling
      });
      //props.history.push(this is what page we are pushing to)
      this.props.history.push('/2');
    }
  }
  render() {
    console.log(this.state.feeling)
    return (
      <div className="fb-div">
         <Router> 
           <Card className="fb-input-wrapper">
             <CardContent>
                <h1 className="fb-h1">How are you feeling today?</h1>
                <TextField 
                  type="number" 
                  required id="standard-required" 
                  label="Required"
                  placeholder="1-10"
                  //onChange capture feeling
                  onChange={this.addingFeelings}/>
                  {/*onClick send state of feeling to onNext */}
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

export default connect()(withRouter((Feeling)));

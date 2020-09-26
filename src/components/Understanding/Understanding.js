import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'



class Understanding extends Component {
  state={
    understanding: 0
  }
  addingUnderstanding = (event) => {
    this.setState({
      understanding: event.target.value
    });
    console.log(this.state.understanding);
  }

    onNext= () => {
      this.props.dispatch({
        //send understanding
        type: "ADD_UNDERSTANDING",
        payload: this.state.understanding
      })
        //props.history.push(this is what page we are pushing to)
        this.props.history.push('/3');
          }  
  render() {
    console.log(this.state.understanding)
    return (
      <div className="App">
         <Router>
          <input type="number" 
                placeholder="Understanding"
                onChange={this.addingUnderstanding}/>
          <button onClick={this.onNext}>Next</button>
        </Router>
      </div>
     
    );
  }
}

export default connect()(withRouter((Understanding)));
import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'



class Support extends Component {
  state={
    support: 0
  }
  addSupport = (event) => {
    this.setState({
      support: event.target.value
    });
    console.log(this.state.support);
  }
  
  onNext= () => {
    this.props.dispatch({
      //send some support SOS!!
      type: "ADD_SUPPORT",
      payload: this.state.support
    })
    //props.history.push(this is what page we are pushing to)
     this.props.history.push('/4');
        }
  render() {
    return (
      <div className="App">
         <Router>
          <input type="number" 
                placeholder="Support"
                onChange={this.addSupport}/>
          <button onClick={this.onNext}>Next</button>
        </Router>
      </div>
     
    );
  }
}

export default connect()(withRouter((Support)));
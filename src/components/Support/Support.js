import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'



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
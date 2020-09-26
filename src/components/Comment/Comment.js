import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'



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
      <div className="App">
         <Router>
          <input type="text" 
                  placeholder="comments"
                  onChange={this.addComments}/>
          <button onClick={this.onNext}>Next</button>
        </Router>
      </div>
     
    );
  }
}

export default connect()(withRouter((Comment)));
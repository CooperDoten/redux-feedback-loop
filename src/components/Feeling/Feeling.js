import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';



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
    if(this.state.feeling === ''){
      alert('Please add a rating to continue');
    }
    else{
      this.props.dispatch({
        //send a feeling 
        type: "ADD_FEELING",
        payload: this.state.feeling
      })
      //props.history.push(this is what page we are pushing to)
      this.props.history.push('/2');
    }
  }
  render() {
    console.log(this.state.feeling)
    return (
      <div className="App">
         <Router> 
           <h3>How are you feeling today?</h3>
          <input type="number" 
                  placeholder="Feeling"
              //onChange capture feeling
              onChange={this.addingFeelings}/>
              {/*onClick send state of feeling to onNext */}
          <button onClick={this.onNext}>Next</button>
        </Router>
      </div>
    );
  }
}

export default connect()(withRouter((Feeling)));

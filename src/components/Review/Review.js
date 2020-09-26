import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'



class Review extends Component {
  onNext= () => {
    axios({
      method: 'POST',
      url: '/feedback',
      data: this.props.reduxState
    }).then(response => {
      console.log('POST /feedback', response);
    }).catch(err => {
      console.err('POST err', err);
    });
    //props.history.push(this is what page we are pushing to)
    this.props.history.push('/6');
  }
  render() {
   /*
   to do:
   make sure they fill out all the necessary inputs to submit
   */
    return (
      <div className="App">
         <Router>
          <table>
            <thead>
              <tr>
                <th>Feeling</th>
                <th>Understanding</th>
                <th>Support</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>{this.props.reduxState.addFeeling}</td>
                  <td>{this.props.reduxState.addUnderstanding}</td>
                  <td>{this.props.reduxState.addSupport}</td>
                  <td>{this.props.reduxState.addComment}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.onNext}>Submit</button>
        </Router>
      </div>
     
    );
  }
}
const mapStateToProps = (reduxState) => {
  return{
    reduxState
  }
}

export default connect(mapStateToProps)(withRouter((Review)));
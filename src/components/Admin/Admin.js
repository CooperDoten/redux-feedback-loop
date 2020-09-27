import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {Button, Table, Box} from '@material-ui/core';
//import TableItem from './TableItem'

class Admin extends Component {
  componentDidMount() {
    this.getFeedback();
  }  
  getFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback',
    }).then(response => {
      console.log('GET /feedback', response);
      this.props.dispatch({
          type: 'SET_ADMIN_REVIEW',
          payload: response.data
      })
    }).catch(err => {
      console.err('GET err', err);
    });
    //props.history.push(this is what page we are pushing to)
  }
  render() {
     let tableArray = this.props.reduxState.adminTable.adminReview;
     console.log(tableArray);
    //  for(let i=0; i<tableArray.length; i++){
    //    let feelings = tableArray
    //  }
    return (
      <div className="review-div">
        <div className="fb-div">
          <Router>
            <Table>
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
                       {/* To Do: loop over array and render info on DOM */}
                    </tr>
              </tbody>
            </Table>
          </Router>
        </div>
      </div>
     
    );
  }
}
const mapStateToProps = (reduxState) => {
  return{
    reduxState
  }
}

export default connect(mapStateToProps)(withRouter((Admin)));
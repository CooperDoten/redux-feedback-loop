import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Table, Box} from '@material-ui/core';
import TableItem from './TableItem';


class Admin extends Component {

state = {
  feeling: [],
  support: [],
  understanding: [],
  comment: []
}
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
      });
      for(let i=0; i<response.data.length; i++){        
          // feeling = response.data[i].feeling;
          // support = response.data[i].support;
          // understanding = response.data[i].understanding;
          // comment = response.data[i].comment;
      }
    }).catch(err => {
      console.err('GET err', err);
    });
  }
  render() {
    //*********** TO DOOOOOO:
    // figure out how to loop through this data and append to DOM */
    // let feeling = [];
    // let support = [];
    // let understanding = [];
    // let comment = [];
     let tableArray = this.props.reduxState.adminTable.adminReview;
     console.log(tableArray);
     console.log(this.state.feeling)
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
                       <td>{this.state.feeling}</td>
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
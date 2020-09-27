import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {Button, Table, Box} from '@material-ui/core';




class TableItem extends Component {

  render() {

    return (
      <div className="review-div">
        <div className="fb-div">
          <Router>

               
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

export default connect(mapStateToProps)(withRouter((TableItem)));
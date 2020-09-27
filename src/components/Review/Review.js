import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {Button, Table, Box, Card, CardContent} from '@material-ui/core';

class Review extends Component {
  //AXIOS POST to send new data to DB
  onNext= () => {
    axios({
      method: 'POST',
      url: '/feedback',
      data: this.props.reduxState.feedBack
    }).then(response => {
      console.log('POST /feedback', response);
    }).catch(err => {
      console.err('POST err', err);
    });
    //push to next page on NEXT click
    this.props.history.push('/6');
  }
  render() {
    return (
      <div className="review-div">
        <div className="fb-div">
          <Router>
          <Card className="fb-input-wrapper">
              <CardContent>
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
                        <td>{this.props.reduxState.feedBack.feeling}</td>
                        <td>{this.props.reduxState.feedBack.understanding}</td>
                        <td>{this.props.reduxState.feedBack.support}</td>
                        <td>{this.props.reduxState.feedBack.comment}</td>
                    </tr>
                  </tbody>
                </Table>
              </CardContent>
            </Card>
          </Router>
        </div>
          <Box 
            className="review-btn-div">
           <Button onClick={this.onNext}
               variant="contained" 
               color="primary">Submit</Button>
          </Box>
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
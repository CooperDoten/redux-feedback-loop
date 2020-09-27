import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import TableItem from './TableItem';
import './Admin.css'

class Admin extends Component {
  render() {
     console.log(this.props);
    return (
      <div className="review-div">
        <div className="fb-div">
          <Router>
            <table>
              <thead>
                <tr>
                  <th>Review ID</th>
                  <th>Feeling</th>
                  <th>Understanding</th>
                  <th>Support</th>
                  <th>Comment</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                  {this.props.adminTable.map((item) => {
                    return(
                      <TableItem 
                        key={item.id}
                        id={item.id}
                        feeling={item.feeling}
                        understanding={item.understanding}
                        support={item.support}
                        comment={item.comments}
                        getFeedback={this.props.getFeedback}/>
                    );
                  })}
              </tbody>
            </table>
          </Router>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => {
  return{
    adminTable: reduxState.adminTable
  }
}

export default connect(mapStateToProps)(withRouter((Admin)));
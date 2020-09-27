import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';

class TableItem extends Component {
//use our GET function to grab data
componentDidMount() {
    this.props.getFeedback();
}
//DELETE tr based on ID of feedback
onDelete = () => {
  console.log('in on delete', this.props.id);
  axios({
    method: 'DELETE',
    //send DELETE to ID of the item that was clicked
    url: `/feedback/${this.props.id}`
  }).then((response) => {
    //refresh page
    this.props.getFeedback();
  });
}
  render() {
    return (
      <tr>
          <td>{this.props.id}</td>
          <td>{this.props.feeling}</td>
          <td>{this.props.understanding}</td>
          <td>{this.props.support}</td>
          <td>{this.props.comment}</td>
          <td><DeleteIcon 
                onClick={this.onDelete}/></td>
      </tr>
    );
  }
}
const mapStateToProps = (reduxState) => {
  return{
    reduxState
  }
}
export default connect(mapStateToProps)(withRouter((TableItem)));
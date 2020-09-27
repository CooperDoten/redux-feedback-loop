import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class TableItem extends Component {

  render() {

    return (
      <tr>
          <td>{this.props.id}</td>
          <td>{this.props.feeling}</td>
          <td>{this.props.understanding}</td>
          <td>{this.props.support}</td>
          <td>{this.props.comment}</td>
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
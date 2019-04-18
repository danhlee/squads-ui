import React, { Component } from 'react';
import { mapDispatchToProps, mapStateToProps } from '../../redux/actionCreators';
import { connect } from 'react-redux';

class ConfusionMatrix extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    const { modelEvalData } = this.props;

    return (
      <div>
        <div className="center"> Confusion Matrix </div>
        <table className="table white_background border_solid">
          <tbody>
            <tr>
              <td></td>
              <th> blue (predicted) </th>
              <th> red (predicted) </th>
            </tr>
            <tr>
              <th> blue (actual) </th>
              <td> {modelEvalData.confusionMatrix[0]} </td>
              <td> {modelEvalData.confusionMatrix[1]} </td>
            </tr>
            <tr>
              <th> red (actual) </th>
              <td> {modelEvalData.confusionMatrix[2]} </td>
              <td> {modelEvalData.confusionMatrix[3]} </td>
            </tr>
          </tbody>
        </table>
      </div>

    );

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfusionMatrix);
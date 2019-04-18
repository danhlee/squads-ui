import React, { Component } from 'react';
import { mapDispatchToProps, mapStateToProps } from '../../redux/actionCreators';
import { connect } from 'react-redux';

class ConfusionMatrixTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    const { modelEvalData } = this.props;

    return (
      <div>
        <div className="center"> Confusion Matrix Table </div>
        <table className="table white_background border_solid">
          <tbody>
            <tr>
              <td></td>
              <th> blue </th>
              <th> red </th>
            </tr>
            <tr>
              <th> true-positive (TP) </th>
              <td> {modelEvalData.confusionMatrix[0]} </td>
              <td> {modelEvalData.confusionMatrix[3]} </td>
            </tr>
            <tr>
              <th> false-negative (FN)  </th>
              <td> {modelEvalData.confusionMatrix[1]} </td>
              <td> {modelEvalData.confusionMatrix[2]} </td>
            </tr>
            <tr>
              <th> false-positive (FP)  </th>
              <td> {modelEvalData.confusionMatrix[2]} </td>
              <td> {modelEvalData.confusionMatrix[1]} </td>
            </tr>
            <tr>
              <th> true-negative (TN)  </th>
              <td> {modelEvalData.confusionMatrix[3]} </td>
              <td> {modelEvalData.confusionMatrix[0]} </td>
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
)(ConfusionMatrixTable);
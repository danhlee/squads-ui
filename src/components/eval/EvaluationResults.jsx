import React, { Component } from 'react';
import { mapDispatchToProps, mapStateToProps } from '../../redux/actionCreators';
import { connect } from 'react-redux';

class EvaluationResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  showPrecision() {
    const {modelEvalData} = this.props;

    if (modelEvalData.confusionMatrix[0] !== '' && modelEvalData.confusionMatrix[1] !== '' && modelEvalData.confusionMatrix[2] !== '' && modelEvalData.confusionMatrix[3] !== '') {
      let precisionArray = [];
      
      let TP_blue = parseFloat(modelEvalData.confusionMatrix[0]);
      let FP_blue = parseFloat(modelEvalData.confusionMatrix[2]);

      let TP_red = parseFloat(modelEvalData.confusionMatrix[3]);
      let FP_red = parseFloat(modelEvalData.confusionMatrix[1]);

      let precision_blue = TP_blue / (TP_blue + FP_blue);
      let precision_red = TP_red / (TP_red + FP_red);
      let precision_avg = (precision_blue + precision_red) / 2;

      precisionArray.push(<td key="precision_blue"> {precision_blue} </td>);
      precisionArray.push(<td key="precision_red"> {precision_red} </td>);
      precisionArray.push(<td key="precision_avg"> {precision_avg} </td>);

      return precisionArray;
    }
    else {
      let precisionArray = [];
      
      precisionArray.push(<td key="precision_blue"> </td>);
      precisionArray.push(<td key="precision_red"> </td>);
      precisionArray.push(<td key="precision_avg"> </td>);
      return precisionArray;
    }
  }
  showRecall() {
    const {modelEvalData} = this.props;

    if (modelEvalData.confusionMatrix[0] !== '' && modelEvalData.confusionMatrix[1] !== '' && modelEvalData.confusionMatrix[2] !== '' && modelEvalData.confusionMatrix[3] !== '') {
      let precisionArray = [];
      
      let TP_blue = parseFloat(modelEvalData.confusionMatrix[0]);
      let FN_blue = parseFloat(modelEvalData.confusionMatrix[1]);

      let TP_red = parseFloat(modelEvalData.confusionMatrix[3]);
      let FN_red = parseFloat(modelEvalData.confusionMatrix[2]);

      let recall_blue = TP_blue / (TP_blue + FN_blue);
      let recall_red = TP_red / (TP_red + FN_red);
      let recall_avg = (recall_blue + recall_red) / 2;

      precisionArray.push(<td key="recall_blue"> {recall_blue} </td>);
      precisionArray.push(<td key="recall_red"> {recall_red} </td>);
      precisionArray.push(<td key="recall_avg"> {recall_avg} </td>);

      return precisionArray;
    }
    else {
      let precisionArray = [];
      
      precisionArray.push(<td key="recall_blue"> </td>);
      precisionArray.push(<td key="recall_red"> </td>);
      precisionArray.push(<td key="recall_avg"> </td>);
      return precisionArray;
    }
  }
  showAccuracy() {
    const {modelEvalData} = this.props;

    if (modelEvalData.confusionMatrix[0] !== '' && modelEvalData.confusionMatrix[1] !== '' && modelEvalData.confusionMatrix[2] !== '' && modelEvalData.confusionMatrix[3] !== '') {
      let precisionArray = [];
      
      let sumOfTPandTN = parseFloat(modelEvalData.confusionMatrix[0]) + parseFloat(modelEvalData.confusionMatrix[3]);
      let total = parseFloat(modelEvalData.confusionMatrix[0]) + parseFloat(modelEvalData.confusionMatrix[1]) + parseFloat(modelEvalData.confusionMatrix[2]) + parseFloat(modelEvalData.confusionMatrix[3]);
      let accuracy = sumOfTPandTN / total;

      precisionArray.push(<td key="accuracy_blue"> {accuracy} </td>);
      precisionArray.push(<td key="accuracy_red"> {accuracy} </td>);
      precisionArray.push(<td key="accuracy_avg"> {accuracy} </td>);

      return precisionArray;
    }
    else {
      let precisionArray = [];
      
      precisionArray.push(<td key="accuracy_blue"> </td>);
      precisionArray.push(<td key="accuracy_red"> </td>);
      precisionArray.push(<td key="accuracy_avg"> </td>);
      return precisionArray;
    }
  }



  render() {
    const { modelEvalData } = this.props;

    return (
      <div>
        <div className="center"> Evaluation Results </div>
        <table className="table white_background border_solid">
          <tbody>
            <tr>
              <td></td>
              <th> blue </th>
              <th> red </th>
              <th> avg </th>
            </tr>
            <tr>
              <th> precision </th>
              {this.showPrecision()}
            </tr>
            <tr>
              <th> recall </th>
              {this.showRecall()}
            </tr>
            <tr>
              <th> accuracy </th>
              {this.showAccuracy()}
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
)(EvaluationResults);
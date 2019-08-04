import React, { Component } from 'react';
import { Row, Col, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { SEED, GATHER, TRAIN, TREE_MODEL, getRequest, getRequestTrain, getRequestGather, RANDOM_FOREST_MODEL } from '../utility/fetch';
import { mapDispatchToProps, mapStateToProps } from '../redux/actionCreators';
import ConfusionMatrix from './eval/ConfusionMatrix';
import ConfusionMatrixTable from './eval/ConfusionMatrixTable';
import EvaluationResults from './eval/EvaluationResults';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedModel: TREE_MODEL,
      dropdownOpen: false,
      textResponse: '',
      apiKeyValue: '',
      summoner: ''
    }
    this.initializeWithSeedData = this.initializeWithSeedData.bind(this);
    this.gatherAndInsertNewData = this.gatherAndInsertNewData.bind(this);
    this.trainSelectedModel = this.trainSelectedModel.bind(this);
    this.toggle = this.toggle.bind(this);
    this.textResponseCallback = this.textResponseCallback.bind(this);
    this.dataResponseCallback = this.dataResponseCallback.bind(this);
    this.clearResponses = this.clearResponses.bind(this);
    this.onChangeApiKey = this.onChangeApiKey.bind(this);
    this.onChangeSummoner = this.onChangeSummoner.bind(this);
  }

  initializeWithSeedData() {
    console.log('initializing db with seed match data...');
    let response = getRequest(SEED, this.textResponseCallback);
    this.setState({
      textResponse: response
    });
  }

  gatherAndInsertNewData() {
    console.log('gathering new match data from Riot API and adding to db...');
    let response = getRequestGather(GATHER, this.textResponseCallback, this.state.apiKeyValue, this.state.summoner);
    this.setState({
      textResponse: response
    });
  }

  trainSelectedModel(event) {
    let modelText = event.target.innerText;

    console.log('event.target.innerText = ' + event.target.innerText);

    let response = '';

    // default is TREE_MODEL
    if (modelText === 'Random Forest') {
      response = getRequestTrain(TRAIN, RANDOM_FOREST_MODEL, this.textResponseCallback, this.dataResponseCallback);

    } else {
      response = getRequestTrain(TRAIN, TREE_MODEL, this.textResponseCallback, this.dataResponseCallback);
    }

    this.setState({
      trainResponse: response
    });
  }

  textResponseCallback(textResponse) {
    this.setState({
      textResponse: textResponse
    });
  }

  dataResponseCallback(modelEvalData) {
    const { setModelEvalData } = this.props;
    setModelEvalData(modelEvalData);
  }

  clearResponses() {
    this.setState({
      textResponse: '',
    });
  }

  getModelName() {
    const { modelEvalData } = this.props;

    if (modelEvalData.modelName === 'TREE') {
      return 'Decision Tree Model Evaluation';
    }
    else if (modelEvalData.modelName === 'RAND') {
      return 'Random Forest Model Evaluation';
    }
    else {
      return '';
    }
  }

  onChangeApiKey(event) {
    this.setState({
      apiKeyValue: event.target.value
    })
  }
  onChangeSummoner(event) {
    this.setState({
      summoner: event.target.value
    })
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="container-fluid black_background">
        <Row className="margin_top_30 padding_top_bot_15">
          <Col sm={{ size: 4, offset: 4 }}>
            <InputGroup >
              <InputGroupAddon addonType="prepend">API KEY</InputGroupAddon>
              <Input onChange={this.onChangeApiKey}/>
            </InputGroup>
            <InputGroup >
              <InputGroupAddon addonType="prepend">SUMMONER</InputGroupAddon>
              <Input onChange={this.onChangeSummoner}/>
            </InputGroup>
          </Col>

        </Row>
        <Row className="margin_top_30 padding_top_bot_15 border_bottom center">
          <Col className="col-lg-4 col-md-2 col-sm-2 col-xs-2"></Col>
          <Col>
            <Button onClick={this.initializeWithSeedData} color="info">seed</Button>
          </Col>
          <Col>
            <Button onClick={this.gatherAndInsertNewData} color="primary">gather</Button>
          </Col>
          <Col>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle color="warning" caret>
                <span
                  onClick={this.toggle}
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={this.state.dropdownOpen}
                >train
                </span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={this.trainSelectedModel}>Decision Tree</DropdownItem>
                <DropdownItem onClick={this.trainSelectedModel}>Random Forest</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col className="col-lg-4 col-md-2 col-sm-2 col-xs-2"></Col>
        </Row>

        <Row className="padding_top_bot_15 lightgrey_background border_bottom center">
          <Col id="text_response" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h6 className="ital" >{this.state.textResponse}</h6>
          </Col>
        </Row>

        <Row className="padding_top_bot_15 lightgrey_background center">
          <Col id="modelName">
            <h5>{this.getModelName()}</h5>
          </Col>
        </Row>

        <Row className="padding_top_bot_15 lightgrey_background center">
          <Col id="confusion_matrix" >
            <ConfusionMatrix />
          </Col>
          <Col id="confusion_matrix_table" >
            <ConfusionMatrixTable />
          </Col>
          <Col id="model_evaluation_results" >
            <EvaluationResults />
          </Col>
        </Row>

        <Row className="padding_top_bot_15">
          <Col id="clear_response_link" className="center">
            <Button onClick={this.clearResponses} color="link">clear</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
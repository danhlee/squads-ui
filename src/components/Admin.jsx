import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { SEED, GATHER, TRAIN, TREE_MODEL, getRequest, RANDOM_FOREST_MODEL } from '../utility/fetch';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { mapDispatchToProps, mapStateToProps } from '../redux/actionCreators';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedModel: TREE_MODEL,
      dropdownOpen: false,
      seedResponse: '',
      gatherResponse: '',
      trainResponse: ''
    }
    this.initializeWithSeedData = this.initializeWithSeedData.bind(this);
    this.gatherAndInsertNewData = this.gatherAndInsertNewData.bind(this);
    this.trainSelectedModel = this.trainSelectedModel.bind(this);
    this.toggle = this.toggle.bind(this);
    this.responseCallback = this.responseCallback.bind(this);
    this.clearResponses = this.clearResponses.bind(this);
  }

  initializeWithSeedData() {
    console.log('initializing db with seed match data...');
    let response = getRequest(SEED, this.responseCallback);
  }

  gatherAndInsertNewData() {
    console.log('gathering new match data and adding to db...');
    let response = getRequest(GATHER, this.responseCallback);
    this.setState({
      gatherResponse: response
    });
  }

  trainSelectedModel(event) {
    let modelText = event.target.innerText;

    console.log('event.target.innerText = ' + event.target.innerText);

    let response = '';

    if (modelText === 'Decision Tree') {
      response = getRequest(TRAIN, this.responseCallback, TREE_MODEL);

    } else if (modelText === 'Random Forest') {
      response = getRequest(TRAIN, this.responseCallback, RANDOM_FOREST_MODEL);
    }

    this.setState({
      trainResponse: response
    });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  responseCallback(endpoint, textResponse) {
    if (endpoint === SEED) {
      this.setState({
        seedResponse: textResponse
      });
    } else if (endpoint === GATHER) {
      this.setState({
        gatherResponse: textResponse
      });
    }
    else if (endpoint === TRAIN) {
      this.setState({
        trainResponse: textResponse
      });
    }
  }

  clearResponses() {
    this.setState({
      seedResponse: '',
      gatherResponse: '',
      trainResponse: ''
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Row className="margin_top_30">
          <Col id="seed_btn" className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center">
            <Button onClick={this.initializeWithSeedData} color="info">seed</Button>
          </Col>

          <Col id="seed_response" className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            {this.state.seedResponse}
          </Col>
        </Row>

        <Row>
          <Col id="gather_btn" className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center">
            <Button onClick={this.gatherAndInsertNewData} color="primary">gather</Button>
          </Col>

          <Col id="gather_response" className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            {this.state.gatherResponse}
          </Col>
        </Row>

        <Row>
          <Col id="train_btn" className="col-lg-6 col-md-12 col-sm-12 col-xs-12 center">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle color="warning" caret>
                <span
                  onClick={this.toggle}
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={this.state.dropdownOpen}>train
                </span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={this.trainSelectedModel}>Decision Tree</DropdownItem>
                <DropdownItem onClick={this.trainSelectedModel}>Random Forest</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>

          <Col id="train_response" className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            {this.state.trainResponse}
          </Col>
        </Row>
        <Row >
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
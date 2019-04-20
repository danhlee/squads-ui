import React, { Component } from 'react';
import { Row, Col, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import RosterTable from './RosterTable';
import Results from './Results';
import { mapDispatchToProps, mapStateToProps } from '../redux/actionCreators';
import { connect } from 'react-redux';
import { PREDICT, TREE_MODEL, RANDOM_FOREST_MODEL, postRequest } from '../utility/fetch';

class Draft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: '',
      confidence: '',
      clearFields: false,
      dropdownOpen: false,
    }

    this.getPrediction = this.getPrediction.bind(this);
    this.clearFields = this.clearFields.bind(this);
    this.allRolesSelected = this.allRolesSelected.bind(this);
    this.resetClearFields = this.resetClearFields.bind(this);
    this.createRoster = this.createRoster.bind(this);
    this.setWinner = this.setWinner.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  getPrediction(event) {
    // if all 10 champs present get roster from store
    if (this.allRolesSelected()) {

      let modelText = event.target.innerText;
      let selectedModel = '';

      console.log('event.target.innerText = ' + event.target.innerText);

      // default is TREE_MODEL
      if (modelText === 'Random Forest') {
        selectedModel = RANDOM_FOREST_MODEL;

      } else {
        selectedModel = TREE_MODEL;
      }

      console.log('creating json object...');
      let json_roster = this.createRoster();

      console.log('json_roster = ' + json_roster);
      console.log(json_roster);

      console.log('getting prediction using ' + selectedModel + '...');
      postRequest(PREDICT, selectedModel, json_roster, this.setWinner);

    }
    else {
      console.log('not all roles selected...');
      this.setState({
        winner: 'invalid',
        confidence: 'invalid'
      });
    }
  }

  setWinner(winningTeamId, confidenceScore) {
    this.setState({
      winner: winningTeamId,
      confidence: confidenceScore
    });
  }

  createRoster() {
    const { rosterIds } = this.props;

    // TEST ROSTERS
    const test_case_100 = {
      "roster": {
        "b_top": "240",
        "b_jung": "64",
        "b_mid": "1",
        "b_bot": "29",
        "b_sup": "63",
        "r_top": "17",
        "r_jung": "24",
        "r_mid": "238",
        "r_bot": "51",
        "r_sup": "432"
      }
    };
    const test_case_200 = {
      "roster": {
        "b_top": "78",
        "b_jung": "35",
        "b_mid": "61",
        "b_bot": "119",
        "b_sup": "40",
        "r_top": "23",
        "r_jung": "141",
        "r_mid": "4",
        "r_bot": "22",
        "r_sup": "201"
      }
    }

    let request_roster = {
      "roster": {
        "b_top": rosterIds.b_top,
        "b_jung": rosterIds.b_jung,
        "b_mid": rosterIds.b_mid,
        "b_bot": rosterIds.b_bot,
        "b_sup": rosterIds.b_sup,
        "r_top": rosterIds.r_top,
        "r_jung": rosterIds.r_jung,
        "r_mid": rosterIds.r_mid,
        "r_bot": rosterIds.r_bot,
        "r_sup": rosterIds.r_sup
      }
    }

    return request_roster;
  }

  resetClearFields() {
    this.setState({
      clearFields: false
    })
  }

  allRolesSelected() {
    const { rosterIds } = this.props;
    let allSelected = true;

    for (var role in rosterIds) {
      if (rosterIds.hasOwnProperty(role)) {
        if (rosterIds[role] === '0') {
          allSelected = false;
          break;
        }
      }
    }

    console.log('allRolesSelected = ' + allSelected);
    return allSelected;
  }

  clearFields() {
    const { setRoster, setRosterIds } = this.props;

    setRoster({
      b_top: '',
      b_jung: '',
      b_mid: '',
      b_bot: '',
      b_sup: '',
      r_top: '',
      r_jung: '',
      r_mid: '',
      r_bot: '',
      r_sup: ''
    });

    setRosterIds({
      b_top: '0',
      b_jung: '0',
      b_mid: '0',
      b_bot: '0',
      b_sup: '0',
      r_top: '0',
      r_jung: '0',
      r_mid: '0',
      r_bot: '0',
      r_sup: '0'
    });

    this.setState({
      winner: '',
      confidence: '',
      clearFields: true
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Row className="black_background">
          <Col id="team_100_blue" className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <RosterTable team_color={'b'} clearFields={this.state.clearFields} resetClearFields={this.resetClearFields} />
          </Col>

          <Col id="team_200_red" className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <RosterTable team_color={'r'} clearFields={this.state.clearFields} resetClearFields={this.resetClearFields} />
          </Col>
        </Row>

        <Row className="black_background padding_top_30">
          <Col id="gather_btn" className="col-lg-12 col-md-12 col-sm-12 col-xs-12 center">
            <div id="prediction-container" className="center">
              {/* <Button onClick={this.getPrediction} color="success">predict</Button> */}
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle color="success" caret>
                    <span
                      onClick={this.toggle}
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={this.state.dropdownOpen}
                    > predict
                  </span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={this.getPrediction}>Decision Tree</DropdownItem>
                    <DropdownItem onClick={this.getPrediction}>Random Forest</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Button onClick={this.clearFields} color="link">clear</Button>
            </div>

          </Col>
        </Row>

        <Row className="black_background">
          <Col>
            <Results winner={this.state.winner} confidence={this.state.confidence}/>
          </Col>
        </Row>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Draft);
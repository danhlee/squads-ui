import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import RosterTable from './RosterTable';
import Results from './Results';
import {mapDispatchToProps, mapStateToProps} from '../redux/actionCreators.js';
import {connect} from 'react-redux';

class Draft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: ''
    }

    this.getPrediction = this.getPrediction.bind(this);
    this.clearFields = this.clearFields.bind(this);
  }

  getPrediction() {
    console.log('getting predictions...');
    fetch('https://squalorarchives-squads-api.herokuapp.com/')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
  }

  clearFields() {
    const {setRoster, setRosterIds} = this.props;
    
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

  }

  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Col id="team_100_blue" className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <RosterTable team_color={'b'} />
          </Col>

          <Col id="team_200_red" className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <RosterTable team_color={'r'} />
          </Col>
        </Row>

        <Row>
          <Col>
            <div id="prediction-container" className="center">
              <Button onClick={this.getPrediction} color="success">predict</Button>
              <Button onClick={this.clearFields} color="link">clear</Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Results winner={this.state.winner} />
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
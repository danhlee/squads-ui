import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import RosterTable from './RosterTable'


class Draft extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Col id="team_100_blue" className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <RosterTable team_color={'b'} />
          </Col>

          <Col id="team_200_red" className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <RosterTable team_color={'r'} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Draft;
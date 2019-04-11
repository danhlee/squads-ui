import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import RosterTable from './RosterTable'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {
    return (
      <div class="container-fluid">
        <Row>
          <Col id="team_100_blue" className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <RosterTable team={'100_blue'} />
          </Col>

          <Col id="team_200_red" className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <RosterTable team={'200_red'} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
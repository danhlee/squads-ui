import React, { Component } from 'react';


class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {
    if (this.props.winner === '100') {
      return (
        <div className="team_100_blue center margin_top_50 padding_all_30">
          Blue team wins!
        </div>
      );
    }
    else if (this.props.winner === '200') {
      return (
        <div className="team_200_red center margin_top_50 padding_all_30">
          Red team wins!
        </div>
      );
    }
    else if (this.props.winner === 'invalid') {
      return (
        <div className="invalid_yellow center margin_top_50 padding_all_30">
          PLEASE SELECT A CHAMPION FOR EVERY ROLE!
        </div>
      );
    }
    else {
      return (
        <div className="center margin_top_30">
          
        </div>
      );
    }

  }
}

export default Results;
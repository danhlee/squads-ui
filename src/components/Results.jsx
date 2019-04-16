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
        <div className="team_100_blue center margin_top_50">
          Blue team wins!
        </div>
      );
    } 
    else if (this.props.winner === '200') {
      return (
        <div className="team_200_red center margin_top_50">
          Red team wins!
        </div>
      );
    }
    else if (this.props.winner === 'error') {
      <div className="center margin_top_50">
          PLEASE SELECT A CHAMPION FOR EVERY ROLE!
      </div>
    } 
    else {
      return (
        <div className="center margin_top_50">
          
        </div>
      );
    }
    
  }
}

export default Results;
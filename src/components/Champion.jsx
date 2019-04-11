import React, { Component } from 'react';

class Champion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {
    return (
      <div>
        
          <div className={"champion_0"} ></div>
          <div className="figure-caption">TESTNAM {this.props.id}</div>
        
      </div>
    );
  }
}

export default Champion;
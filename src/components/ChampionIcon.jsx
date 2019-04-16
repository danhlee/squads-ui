import React, { Component } from 'react';

class ChampionIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    this.getClassName = this.getClassName.bind(this);
  }

  getClassName() {
    let championClass = 'champion_' + this.props.id;
    return championClass;
  }

  render() {
    return (
      <div>
        <div className={this.getClassName()} ></div>
        <div className="figure-caption"> {this.props.name}</div>
      </div>
    );
  }
}

export default ChampionIcon;
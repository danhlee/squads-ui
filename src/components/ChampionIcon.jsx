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

    // console.log('CHAMP CLASS = ' + championClass);

    return championClass;
  }

  render() {
    console.log('name = ' + this.props.name)
    return (
      <div>
        <div className={this.getClassName()} ></div>
        <div className="figure-caption"> {this.props.name}</div>
      </div>
    );
  }
}

export default ChampionIcon;
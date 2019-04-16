import React, { Component } from 'react';
import ChampionIcon from './ChampionIcon';
import InputWrapper from './InputWrapper';
import {mapDispatchToProps, mapStateToProps} from '../redux/actionCreators';
import {connect} from 'react-redux';

class RosterTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: this.props.team_color + '_top',
      jung: this.props.team_color + '_jung',
      mid: this.props.team_color + '_mid',
      bot: this.props.team_color + '_bot',
      sup: this.props.team_color + '_sup'
    }

    this.getChampionId = this.getChampionId.bind(this);
    this.getChampionName = this.getChampionName.bind(this);
    this.getColorClass = this.getColorClass.bind(this);
  }

  // retrieving championId from the store
  getChampionId(role) {
    console.log('role = ' + role)
    console.log('this.props.roster = ' + this.props.roster);
    
    if (role === 'b_top') {
      return this.props.rosterIds.b_top;
    } else if (role === 'b_jung') {
      return this.props.rosterIds.b_jung;
    } else if (role === 'b_mid') {
      return this.props.rosterIds.b_mid;
    } else if (role === 'b_bot') {
      return this.props.rosterIds.b_bot;
    } else if (role === 'b_sup') {
      return this.props.rosterIds.b_sup;
    } else if (role === 'r_top') {
      return this.props.rosterIds.r_top;
    } else if (role === 'r_jung') {
      return this.props.rosterIds.r_jung;
    } else if (role === 'r_mid') {
      return this.props.rosterIds.r_mid;
    } else if (role === 'r_bot') {
      return this.props.rosterIds.r_bot;
    } else if (role === 'r_sup') {
      return this.props.rosterIds.r_sup;
    }
  }

  // get champion name from the store
  getChampionName(role) {    
    console.log('this.props.roster.b_top = ' + this.props.roster.b_top);

    if (role === 'b_top') {
      return this.props.roster.b_top;
    } else if (role === 'b_jung') {
      return this.props.roster.b_jung;
    } else if (role === 'b_mid') {
      return this.props.roster.b_mid;
    } else if (role === 'b_bot') {
      return this.props.roster.b_bot;
    } else if (role === 'b_sup') {
      return this.props.roster.b_sup;
    } else if (role === 'r_top') {
      return this.props.roster.r_top;
    } else if (role === 'r_jung') {
      return this.props.roster.r_jung;
    } else if (role === 'r_mid') {
      return this.props.roster.r_mid;
    } else if (role === 'r_bot') {
      return this.props.roster.r_bot;
    } else if (role === 'r_sup') {
      return this.props.roster.r_sup;
    }
  }

  getColorClass() {
    if (this.props.team_color === 'b') {
      return 'team_100_blue';
    }
    else if (this.props.team_color === 'r') {
      return 'team_200_red';
    }
  }

  render() {
    const state = this.state;
    return (
      <table className="table">
        <thead className={this.getColorClass()}>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Search</th>
            <th scope="col">Champion</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th>TOP</th>
            <th>
              <InputWrapper role={state.top} clearFields={this.props.clearFields} resetClearFields={this.props.resetClearFields} />
            </th>
            <th><ChampionIcon id={this.getChampionId(state.top)} name={this.getChampionName(state.top)} /></th>
          </tr>
          <tr>
            <th>JUNGLE</th>
            <th>
              <InputWrapper role={state.jung} clearFields={this.props.clearFields} resetClearFields={this.props.resetClearFields}  />
            </th>
            <th><ChampionIcon id={this.getChampionId(state.jung)} name={this.getChampionName(state.jung)} /></th>
          </tr>
          <tr>
            <th>MIDDLE</th>
            <td>
              <InputWrapper role={state.mid} clearFields={this.props.clearFields} resetClearFields={this.props.resetClearFields} />
            </td>
            <th><ChampionIcon id={this.getChampionId(state.mid)} name={this.getChampionName(state.mid)} /></th>
          </tr>
          <tr>
            <th>BOTTOM</th>
            <td>
              <InputWrapper role={state.bot} clearFields={this.props.clearFields} resetClearFields={this.props.resetClearFields}  />
            </td>
            <th><ChampionIcon id={this.getChampionId(state.bot)} name={this.getChampionName(state.bot)} /></th>
          </tr>
          <tr>
            <th>SUPPORT</th>
            <td>
              <InputWrapper role={state.sup} clearFields={this.props.clearFields} resetClearFields={this.props.resetClearFields} />
            </td>
            <th><ChampionIcon id={this.getChampionId(state.sup)} name={this.getChampionName(state.sup)} /></th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RosterTable);
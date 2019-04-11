import React, { Component } from 'react';
import Champion from './Champion';
import Autosuggest from 'react-autosuggest';
import championIds from '../data/championId.json';
import championIdsString from '../data/championIdString.json';

class RosterTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Search</th>
            <th scope="col">Champion</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th>TOP</th>
            <th><input type="text"></input></th>
            <th><Champion id={1}/></th>
          </tr>
          <tr>
            <th>JUNGLE</th>
            <th><input type="text"></input></th>
            <th><Champion id={1}/></th>
          </tr>
          <tr>
            <th>MIDDLE</th>
            <td>[__________]</td>
            <th><Champion id={1}/></th>
          </tr>
          <tr>
            <th>ADC</th>
            <td>[__________]</td>
            <th><Champion id={1}/></th>
          </tr>
          <tr>
            <th>SUPPORT</th>
            <td>[__________]</td>
            <th><Champion id={1}/></th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default RosterTable;
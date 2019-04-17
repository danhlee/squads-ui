import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import c from '../data/champions.json';
import {mapDispatchToProps, mapStateToProps} from '../redux/actionCreators';
import {connect} from 'react-redux';


const champions = c.championArray;

export function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return champions.filter(champion => regex.test(champion.name));
}

export function getSuggestionValue(champion) {
  return champion.name;
}

export function renderSuggestion(champion) {
  return (
    <span key={champion.id}> {champion.name}</span>
  );
}

class InputWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: []
    }
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
  }

  componentDidUpdate() {
    if (this.props.clearFields === true && this.state.value !== '') {
      console.log('clearing input values....')
      this.setState({
        value: ''
      });
      this.props.resetClearFields();
    }

  }

  onChange(event, { newValue, method }) {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) {

    let role = this.props.role;

    if (role === 'b_top') {
      this.props.setRoster({
        b_top: suggestion.name
      });
      this.props.setRosterIds({
        b_top: suggestion.id
      })
    } else if (role === 'b_jung') {
      this.props.setRoster({
        b_jung: suggestion.name
      });
      this.props.setRosterIds({
        b_jung: suggestion.id
      })
    } else if (role === 'b_mid') {
      this.props.setRoster({
        b_mid: suggestion.name
      });
      this.props.setRosterIds({
        b_mid: suggestion.id
      })
    } else if (role === 'b_bot') {
      this.props.setRoster({
        b_bot: suggestion.name
      });
      this.props.setRosterIds({
        b_bot: suggestion.id
      })
    } else if (role === 'b_sup') {
      this.props.setRoster({
        b_sup: suggestion.name
      });
      this.props.setRosterIds({
        b_sup: suggestion.id
      })
    } else if (role === 'r_top') {
      this.props.setRoster({
        r_top: suggestion.name
      });
      this.props.setRosterIds({
        r_top: suggestion.id
      })
    } else if (role === 'r_jung') {
      this.props.setRoster({
        r_jung: suggestion.name
      });
      this.props.setRosterIds({
        r_jung: suggestion.id
      })
    } else if (role === 'r_mid') {
      this.props.setRoster({
        r_mid: suggestion.name
      });
      this.props.setRosterIds({
        r_mid: suggestion.id
      })
    } else if (role === 'r_bot') {
      this.props.setRoster({
        r_bot: suggestion.name
      });
      this.props.setRosterIds({
        r_bot: suggestion.id
      })
    } else if (role === 'r_sup') {
      this.props.setRoster({
        r_sup: suggestion.name
      });
      this.props.setRosterIds({
        r_sup: suggestion.id
      })
    }
  }

  
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "type a champion's name...",
      value,
      onChange: this.onChange
    };


    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        className="cursor_text"
        onSuggestionSelected={this.onSuggestionSelected}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputWrapper);
import React, {Component} from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import Container from './Container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'HOME'
    }
    this.setPageName = this.setPageName.bind(this);
  }

  setPageName(newPageName) {

    if (newPageName !== this.state.pageName) {
      this.setState({
        pageName: newPageName
      })  
    }
  }

  render() {
    return (
      <div>
        <Navbar setPageNameCB={this.setPageName} />
        <Container pageName={this.state.pageName} />
      </div>
    );
  }
}

export default App;
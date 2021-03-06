import React, {Component} from 'react';
import Navigationbar from './Navigationbar';
import PageContainer from './PageContainer';

import '../styles/App.css';
import '../styles/Champions.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'DRAFT'
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
      <div className="black_background">
        <Navigationbar setPageNameCB={this.setPageName} />
        <PageContainer pageName={this.state.pageName} />
      </div>
    );
  }
}

export default App;
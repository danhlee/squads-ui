import React, {Component} from 'react';
import Home from './Home';
import Admin from './Admin'
import About from './About'

class Container extends Component {
  constructor(props) {
    super(props);
    this.showPage = this.showPage.bind(this);
  }

  showPage() {
    const { pageName } = this.props;
    if (pageName == 'HOME') {
      return (
        <div>
          <Home/>
        </div>
      );
    }
    else if (pageName == 'ADMIN') {
      return (
        <div>
          <Admin/>
        </div>
      );
    }
    else {
      return (
        <div>
          <About/>
        </div>
      );
    }
  }
  
  render() {
    return (
      <div>
        {this.showPage()}
      </div>
    );
  }
}

export default Container;
import React, {Component} from 'react';
import Draft from './Draft';
import Admin from './Admin'

class PageContainer extends Component {
  constructor(props) {
    super(props);
    this.showPage = this.showPage.bind(this);
  }

  showPage() {
    const { pageName } = this.props;
    if (pageName == 'DRAFT') {
      return (
        <div>
          <Draft/>
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
          FUTURE PAGES HERE
        </div>
      );
    }
  }
  
  render() {
    return (
      <div className="white_background">
        {this.showPage()}
      </div>
    );
  }
}

export default PageContainer;
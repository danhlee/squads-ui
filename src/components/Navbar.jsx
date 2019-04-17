import React, {Component} from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'HOME'
    }
    this.selectPage = this.selectPage.bind(this);
  }

  selectPage(event) {
    console.log('selecting page... ' + event.target.id);
    console.log();
    this.props.setPageNameCB(event.target.id);
  }

  render() {
    return (
      <div id="navbar">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          
          <div className="navbar-brand cursor_pointer" id="DRAFT" onClick={this.selectPage} >SQUADS</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item cursor_pointer">
                <a id="DRAFT" onClick={this.selectPage} className="nav-link nav-link-ltr" role="button"> Draft </a>
              </li>
              <li className="nav-item cursor_pointer">
                <a id="ADMIN" onClick={this.selectPage} className="nav-link nav-link-ltr" role="button"> Admin </a>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    );
  }
}

export default Navbar;
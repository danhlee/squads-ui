import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class Navigationbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'HOME',
      dropdownOpen: false,
      navbarTogglerOpen: false
    }
    this.selectPage = this.selectPage.bind(this);
    this.dropDownToggle = this.dropDownToggle.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  selectPage(event) {
    console.log('selecting page... ' + event.target.id);
    console.log();
    this.props.setPageNameCB(event.target.id);

  }

  toggle() {
    this.setState({ navbarTogglerOpen: !this.state.navbarTogglerOpen });
  }

  dropDownToggle() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  render() {
    return (
      <div id="navbar">

        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="navbar-brand cursor_pointer" id="DRAFT" onClick={this.selectPage} >SQUADS</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item cursor_pointer">
                <a id="DRAFT" onClick={this.selectPage} className="nav-link nav-link-ltr" role="button"> Draft </a>
              </li>
              <li className="nav-item cursor_pointer">
                <a id="ADMIN" onClick={this.selectPage} className="nav-link nav-link-ltr" role="button"> Admin </a>
              </li>
            </ul>
          </div>
        </nav> */}
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark white_text" >
          <NavbarBrand id="DRAFT" className="navbar-brand cursor_pointer" onClick={this.selectPage} >SQUADS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.navbarTogglerOpen} navbar>
            <Nav className="navbar-nav mr-auto" navbar>
              <NavItem className="nav-item cursor_pointer">
                <NavLink id="DRAFT" onClick={this.selectPage} className="nav-link nav-link-ltr">Draft</NavLink>
              </NavItem>
              <NavItem className="nav-item cursor_pointer">
                <NavLink id="ADMIN" onClick={this.selectPage} className="nav-link nav-link-ltr">Admin</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="nav-link-ltr" nav caret>
                  TBD: Train
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Decision Tree
                  </DropdownItem>
                  <DropdownItem>
                    Random Forest
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset DB
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigationbar;
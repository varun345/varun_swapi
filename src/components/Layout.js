import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavLink} from 'reactstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../images/Star_Wars_Yellow_Logo.svg';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    return (
      <div className="app">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mainNav">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="navbar-brand" tag={Link} to="/">
                  <img src={logo} style={{
                    width: "70",
                    height: "30"
                  }} alt=""/>
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink tag={Link} to="/"> <i className="fa fa-home"></i> Home </NavLink>
              </li>
             
              <li className="nav-item active">
                <NavLink tag={Link} to="/films"><i className="fa fa-film"></i> Films</NavLink>
              </li>

              <li className="nav-item active">
                <NavLink tag={Link} to="/search"><i className="fa fa-search"></i> Search Film</NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <main className="row justify-content-center no-gutters">
          {this.props.children}
        </main>

        <div className="row justify-content-center no-gutters">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link disabled" href=""> Developed By </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" target="_blank" rel="noopener noreferrer">Varun Kumar</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  light: PropTypes.bool,
  inverse: PropTypes.bool,
  full: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  toggleable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  NavLink,
} from 'reactstrap';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class About extends Component {
  render() {

    return (
      <div>
        <div className="col main-card">
          <div className="card text-center">
            <div className="card-header">
              About
            </div>
            <div className="card-body">
              <h4 className="card-title"> All Star Wars Movie </h4>
              <p> With the help of Star Wars API (SWAPI)  . I'm fetching all films with there details and Characters. By using technology [ React + Redux + ReactDOM + Bootstarp + Vanilla ES6 ]  </p>
              <p className="card-text"> <strong> Please click below to visit on film page . </strong> </p>

            </div>
            <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <NavLink className="btn btn-info" tag={Link} to="/films"> <i className="fa fa-download"></i>  Click Here ( Films ) </NavLink>
              </div>
            </div>
          </div>
          </div>
        </div>
        
      </div>
    )
  }
}
export default About;

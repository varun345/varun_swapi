/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { NavLink,} from 'reactstrap';


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class NavCards extends Component {
  render() {

    return (
      <div className="col main-card ">
        <div className="card-header">
          Swapi Endpoints
        </div>
        <div className="row nav-cards">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <NavLink className="btn btn-warning" tag={Link} to="/people"> <i className="fa fa-users"></i> People</NavLink>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <NavLink className="btn btn-warning" tag={Link} to="/starships"> <i className="fa fa-space-shuttle"></i> Starships</NavLink>
              </div>
            </div>
          </div>
          
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <NavLink className="btn btn-danger" tag={Link} to="/films"> <i className="fa fa-film"></i> Films </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default NavCards;

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import ImageSearch from '../components/Imagesearch';
import FilterBar from '../components/Filter-bar';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  NavLink,
} from 'reactstrap';
import algoliasearch from 'algoliasearch/lite';
// import { useAlert } from "react-alert";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';

import './App.css';
import PropTypes from 'prop-types';


const searchClient = algoliasearch(
  'P6JK4Q8K2I',
  'cc18899c4a686ebdea1bb129bdb056e5'
);


const APIKEY = "2cf3e324d5ce322f9dae29cec22c02d6";
let baseURL = "https://api.themoviedb.org/3/";
let url = "".concat(baseURL, "configuration?api_key=", APIKEY);

// const alert = useAlert();


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/



class FilmsList extends Component {

  notify = () => toast.success(" Wow Successfully added in Fevourite List!");

  render() {

    let data = this.props.films;
    let filmList = data.map((films) => {
      let people = films.characters;
      let planets = films.planets;
      let species = films.species;
      let starships = films.starships;
      let vehicles = films.vehicles;
      let title = films.title;
      let collapseTarget = title.split(' ').slice(-1)[0];

      return (
        <div key={films.episode_id} className="col-lg-3 col-md-4 col-sm-12 col-xs-12 main-card">
          <div className="card-header">
            <FilterBar people={people}  starships={starships}  filterWorld={this.props.filter} filterStarships={this.props.filterStarships} stateReset={this.props.stateReset}/>
          </div>

          <div className="">

            <div className="profile col-fluid">
              <div className="card bg-dark text-white">
                <ImageSearch className="card-img" name={films.title}/>
                <div className="card-img-overlay">
                  <p className="card-title"><strong>{films.title}</strong></p>
                </div>
              </div>
            </div>
            <div className="profile-container col">
              <div className="profile-header">
                <div className="row">
                  <div className="col card-header">
                   
                     <center>
                     <NavLink className="btn btn-primary" tag={Link} to={`/film-endpoint/films/${films.episode_id}/${films.title}`}> Click Here For Details </NavLink>
                     <NavLink className="btn btn-danger text-white" onClick={this.notify}> <i className="pull-right fa fa-heart"> </i> <strong> Add Favourite </strong> </NavLink>
                      <ToastContainer />
                      <a href="" data-toggle="collapse" data-target={"#" + collapseTarget} aria-expanded="false" aria-hidden="false" aria-controls="collapseExample" > 
                        <i className="fa fa-angle-double-down" ></i> Click To Toggle
                      </a> </center>
                   
                  </div>
                </div>

                <div className="profile-detail">
                  <dl className="dl-horizontal">
                    <dt className="dt">
                      Director
                    </dt>
                    <dd className="dd">
                      {films.director}
                    </dd>
                    <dt className="dt">Episode</dt>
                    <dd className="dd">
                      {films.episode_id}
                    </dd>
                  </dl>
                </div>
                <div className="collapse" id={collapseTarget}>
                  <dl className="dl-horizontal">
                    <dt className="dt">Producer</dt>
                    <dd className="dd">
                      {films.producer}
                    </dd>
                    <dt className="dt">Release Datae</dt>
                    <dd className="dd">
                      {films.release_date}
                    </dd>
                  </dl>
                  <div className="card">
                    <div className="card-header">
                      Opening Crawl
                    </div>
                    <div className="card-body">
                      {films.opening_crawl}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      )
    })

    return (
      <div className="row justify-content-center no-gutters">
       <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
      <InstantSearch indexName="varun_swapi" searchClient={searchClient}>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch> <br />

        <center>   <NavLink className="btn btn-warning text-blue" > <i className="pull-right fa fa-heart"> </i> <strong> FAVOURITE LIST ( All added favourite film will be listed here )  </strong></NavLink>  </center> <br /><br /><hr />
        </div>

        {filmList}
        
      </div>
    )



     function Hit(props) {
  return (
    <div>
      
      <div className="hit-name">
        <Highlight attribute="title" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="opening_crawl" hit={props.hit} />
      </div>
       <div className="hit-description">
        <strong> <Highlight attribute="url" hit={props.hit} /> </strong>
      </div>
      
    </div>

  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};


  }
}

export default FilmsList;

import React, { Component } from 'react';
import MovieRow from './MovieRow.js';
// import  { APIKEY, baseURL } from '../Films'



const APIKEY = "2cf3e324d5ce322f9dae29cec22c02d6";
let baseURL = "https://api.themoviedb.org/3/";
let url = "".concat(baseURL, "configuration?api_key=", APIKEY);

class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		// this.performSearch()
	}

	performSearch(keyWord) {

		let urlSearch = "".concat(baseURL, 'search/movie?api_key=', APIKEY, "&query=", keyWord) 
		console.log(urlSearch)


		fetch(urlSearch)
		.then(res=>res.json())
		.then((data)=> {

			const results = data.results
			var movieRows = []

			if (keyWord.length >0 ) {
				for (var i = results.length - 1; i >= 0; i--) {
					results.poster_src = "https://image.tmdb.org/t/p/w185" + results[i].poster_path
					const movieRow = <MovieRow key={results[i].id} movie={results[i]} posterSrc={results.poster_src}/>
					movieRows.push(movieRow)
				}
			}
			
			this.setState({rows: movieRows})
		})

	}


	searchChangeHandler(event) {
		console.log(event.target.value)
		const boundObject = this
		const searchTerm = event.target.value
		boundObject.performSearch(searchTerm)
	}

	render() {
		return (
			
			<div className="Search">
			<input style={{
				fontSize: 17,
				display: 'block',
				width: "99%",
				paddingTop: 8,
				paddingBottom: 8,
				paddingLeft: 16,
				borderRadius: 10,
				borderColor: 'orange',
				borderStyle : 'solid',
				borderWidth: 2,
			}} onChange={this.searchChangeHandler.bind(this)} placeholder="Search Film"/>

			<div className="moviesRows">
				{this.state.rows}
			</div>
			</div>
		);
	}
}

export default SearchBar;

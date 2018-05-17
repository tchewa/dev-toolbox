import React, { Component } from 'react';
import './App.css';

class MovieLibrary extends Component {
	constructor(props) {
		super(props);
		this.state = 
			{
				movies: [],
				title: '',
				genre: '',
				year: '',
				movieCopy: ""
			};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.value;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		let movieCopy = this.state.movies.slice();
		console.log(movieCopy);
		movieCopy.push(this.state.movies);

		this.setState({ movies: movieCopy, movieCopy: "" });
	}

	// deleteMovie = i => {
	// 	let movieCopy = this.state.movies.slice();

	// 	movieCopy.splice(i, 1);

	// 	this.setState({ movies: movieCopy });
	// }

	render() {
		let movieTile = this.state.movies.map((e, i) => {
			return (
				<div key={i} className="movie-tile">
					<button  className="deleteMovie">X</button>
					<div className="movie-info">
						<h2 className="movie-title">{this.state.title}</h2>
						<p className="movie-genre">{this.state.genre}</p>
						<p className="movie-year">{this.state.year}</p>
					</div>
				</div>
			);
		});
		return (
			<div className="movie-library-container">
				<div className="header-bar">
					<h1>My Movie Library</h1>
				</div>
				<div className="movie-form-container">
					<form onSubmit ={this.handleSubmit}>
						<label>Title</label>
						<input type="textfield" name="title" value={this.state.title} onChange={this.handleInputChange} placeholder="Enter Movie Title" />
						<label>Genre</label>
						<input type="textfield" name="genre" value={this.state.genre} onChange={this.handleInputChange} placeholder="Enter the Genre" />
						<label>Year</label>
						<input type="textfield" name="year" value={this.state.year} onChange={this.handleInputChange} placeholder="Enter the Year" />
						<button type="submit" className="add-movie" value="Add Movie">Add Movie</button>
					</form>
				</div>
				<div className="movie-tile-container">
					{movieTile}
				</div>
			</div>
		);
	}
}

export default MovieLibrary;

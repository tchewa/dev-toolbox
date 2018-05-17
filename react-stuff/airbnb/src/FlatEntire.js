import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import FlatSingle from './FlatSingle';
import './FlatSingle.css';
import './FlatApp.css';
import './marker.css';
import Marker from './marker.js';


class FlatEntire extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flats: [],
			allFlats: [],
			selectedFlat: null,
			search: ""
		};
	}

	componentDidMount() {
		const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
		fetch(url)
			.then( response => response.json())
			.then((data) => {
				this.setState({
					flats: data,
					allFlats: data
				});
			})
	}

	selectFlat = (flat) => {
		this.setState({
			selectedFlat: flat
		});
	}

	handleSearch = (event) => {
		console.log(event);
		this.setState({
			search: event.target.value,
			flats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name))
		});
	}

	render() {
		let center = {
			lat: 48.8566,
			lng: 2.3522
		}

		if (this.state.selectedFlat) {
			center = {
				lat: this.state.selectedFlat.lat,
				lng: this.state.selectedFlat.lng
			}
		}

		return (
			<div className="app">
				<div className="main">
					<div className="search">
						<input 
							type="text"
							placeholder="Search..."
							value={this.state.search}
							onChange={this.handleSearch} />
					</div>
					<div className="flats">
						{this.state.flats.map((flat) => {
							return <FlatSingle 
								flat={flat} 
								key={flat.name} 
								selectFlat={this.selectFlat} />
						})}
					</div>
				</div>
				<div className="map">
					<GoogleMapReact 
						center={center}
						zoom={13}
					>
						{this.state.flats.map((flat) => {
							return <Marker selected={flat === this.state.selectedFlat} lat={flat.lat} lng={flat.lng} text={flat.price} key={flat.name} />
						})}
					</GoogleMapReact>
				</div>
			</div>
		);
	}
}

export default FlatEntire;
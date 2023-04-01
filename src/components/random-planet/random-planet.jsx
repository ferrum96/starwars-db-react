import { Component } from "react";
import SwapiService from "../../services/swapi-service"

import "./random-planet.css"

export default class RandomPlanet extends Component {

	constructor() {
		super();
		this.state = {
			planet: {}
		}
		this.swapiService = new SwapiService();
		this.updatePlanet();
	}

	componentDidMount() {
		this.interval = setInterval(() => this.updatePlanet(), 5000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	updatePlanet() {
		const id = Math.floor(Math.random() * 15) + 2;
		
		this.swapiService
			.getPlanetById(id)
			.then(planet => this.setState({ planet }));
	}

	render() {
		const { planet: { id, name, population, rotationPeriod, diameter } } = this.state;

		return (
			<div className="random-planet jumbotron rounded">
				<img className="planet-image"
					src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="asda" />
				<div>
					<h4>{name}</h4>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<span className="term">Population</span>
							<span>{population}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Rotation Period</span>
							<span>{rotationPeriod}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Diameter</span>
							<span>{diameter}</span>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
import React, { Component } from "react";
import "./random-planet.css"
import SwapiService from "../../services/swapi-service"
import Loader from "../loader/loader";
import ErrorBoundry from "../error-boudry/error-boundry";

export default class RandomPlanet extends Component {

	swapiService = new SwapiService();

	state = {
		planet: null,
		loading: true,
		error: false
	}

	componentDidMount() {
		this.updatePlanet();
		this.interval = setInterval(this.updatePlanet, 6000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	onPlanetLoaded = (planet) => {
		this.setState({
			planet,
			loading: false
		});
	}

	onError = () => {
		this.setState({
			error: true,
			loading: false
		});
	}

	updatePlanet = () => {
		const id = Math.floor(Math.random() * 15) + 2;

		this.swapiService
			.getPlanetById(id)
			.then(planet => this.onPlanetLoaded(planet))
			.catch(this.onError);
	}

	render() {
		const { planet, loading } = this.state;

		return (
			<ErrorBoundry>
				<div className="random-planet jumbotron rounded">
					{loading ? <Loader /> : <PlanetView planet={planet} />}
				</div>
			</ErrorBoundry>
		)
	}
}

const PlanetView = ({ planet }) => {
	const { id, name, population, rotationPeriod, diameter } = planet;

	return (
		<React.Fragment>
			<img className="planet-image"
				src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={`planet ${id}`} />
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
		</React.Fragment>
	)
}
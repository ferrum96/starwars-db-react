import React, { Component } from "react";

import "./planet-details.css"
import SwapiService from "../../services/swapi-service";
import Loader from "../loader/loader";
import ErrorButton from "../error-button/error-button";

export default class PlanetDetails extends Component {

	swapiService = new SwapiService();

	state = {
		planet: {},
		loading: true,
		error: false
	}

	componentDidMount() {
		this.updatePlanet();
	}

	componentDidUpdate(prevProps) {
		if (this.props.selectedPlanetId !== prevProps.selectedPlanetId) {
			this.setState({ loading: true })
			this.updatePlanet();
		}
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

	updatePlanet() {
		const { selectedPlanetId } = this.props;

		this.swapiService
			.getPlanetById(selectedPlanetId)
			.then(planet => this.onPlanetLoaded(planet))
			.catch(this.onError);
	}

	render() {
		const { planet, loading, error } = this.state;

		return (
			error ? null :
				<div className="planet-details card">
					{loading ? <Loader /> : <PlanetView planet={planet} />}
				</div>
		)
	}
}

const PlanetView = ({ planet }) => {
	const { id, name, population, rotationPeriod, diameter } = planet;

	return (
		<React.Fragment>
			<img className="planet-image"
				src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={`planet ${id}`} />
			<div className="card-body">
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
				<ErrorButton />
			</div>
		</React.Fragment>
	)
}
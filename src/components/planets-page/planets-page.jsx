import { Component } from "react";
import ListItems from "../list-items/list-items";
import ErrorIndicator from "../error-indicator/error-indicator";

import "./planets-page.css"
import SwapiService from "../../services/swapi-service";
import PlanetDetails from "../planet-details/planet-details";


export default class PlanetsPage extends Component {

	swapiService = new SwapiService();

	state = {
		selectedPlanetId: 2,
		hasError: false
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	onSelectedPlanet = (selectedPlanetId) => {
		this.setState({ selectedPlanetId });
	}

	render() {

		const { selectedPlanetId, hasError } = this.state;

		if (hasError) {
			return <ErrorIndicator />
		}

		return (
			<div className="planets-page row mb2">
				<div className="col-md-6">
					<ListItems
						onSelectedItem={this.onSelectedPlanet}
						getData={this.swapiService.getAllPlanets}
						renderItem={({ name, diameter }) => `${name} ( ${diameter} )`} />
				</div>
				<div className="col-md-6">
					<PlanetDetails selectedPlanetId={selectedPlanetId} />
				</div>
			</div>
		);
	}
}
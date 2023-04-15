import { Component } from "react";
import ListItems from "../list-items/list-items";

import "./planets-page.css"
import SwapiService from "../../services/swapi-service";
import PlanetDetails from "../planet-details/planet-details";
import RowPage from "../row-page/row-page";
import ErrorBounry from "../error-boudry/error-boundry";


export default class PlanetsPage extends Component {

	swapiService = new SwapiService();

	state = {
		selectedPlanetId: 2
	}

	onSelectedPlanet = (selectedPlanetId) => {
		this.setState({ selectedPlanetId });
	}

	render() {

		const { selectedPlanetId } = this.state;
		const listPlanets = (
			<ListItems
				onSelectedItem={this.onSelectedPlanet}
				getData={this.swapiService.getAllPlanets}
				renderItem={({ name, diameter }) => `${name} ( ${diameter} )`} />
		);
		const planetDetails = (
			<PlanetDetails selectedPlanetId={selectedPlanetId} />
		);

		return (
			<ErrorBounry>
				<RowPage left={listPlanets} right={planetDetails} />
			</ErrorBounry>
		);
	}
}
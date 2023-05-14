import { Component } from "react";
import "./planets-page.css"
import RowPage from "../row-page/row-page";
import ErrorBoundry from "../error-boudry/error-boundry";
import { PlanetList } from "../sw-components/lists";
import PlanetDetails from "../sw-components/planet-details";

export default class PlanetsPage extends Component {

	state = {
		selectedPlanetId: 2
	}

	onSelectedPlanet = (selectedPlanetId) => {
		this.setState({ selectedPlanetId });
	}

	render() {
		const { selectedPlanetId } = this.state;

		const listPlanets = (
			<PlanetList onSelectedItem={this.onSelectedPlanet} />
		);
		const planetDetails = (
			<PlanetDetails selectedItemId={selectedPlanetId} />
		);

		return (
			<ErrorBoundry>
				<RowPage left={listPlanets} right={planetDetails} />
			</ErrorBoundry>
		);
	}
}
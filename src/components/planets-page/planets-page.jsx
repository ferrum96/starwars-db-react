import { Component } from "react";
import "./planets-page.css"
import ListItems from "../list-items/list-items";
import SwapiService from "../../services/swapi-service";
import RowPage from "../row-page/row-page";
import ItemDetails, { Record } from "../item-details/item-details";
import ErrorBoundry from "../error-boudry/error-boundry";

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
		const { getAllPlanets, getPlanetById, getPlanetImageUrl } = this.swapiService;

		const listPlanets = (
			<ListItems
				onSelectedItem={this.onSelectedPlanet}
				getData={getAllPlanets}
				renderItem={({ name, diameter }) => `${name} ( ${diameter} )`} />
		);
		const planetDetails = (
			<ItemDetails
				selectedItemId={selectedPlanetId}
				getData={getPlanetById}
				getImageUrl={getPlanetImageUrl} >
					<Record field='population' label='Population' />
					<Record field='rotationPeriod' label='Rotation Period' />
					<Record field='diameter' label='Diameter' />
			</ItemDetails>
		);

		return (
			<ErrorBoundry>
				<RowPage left={listPlanets} right={planetDetails} />
			</ErrorBoundry>
		);
	}
}
import { Component } from "react";
import ListItems from "../list-items/list-items";

import "./starships-page.css"
import SwapiService from "../../services/swapi-service";
import StarshipDetails from "../starship-details/starship-details";
import RowPage from "../row-page/row-page";
import ErrorBounry from "../error-boudry/error-boundry";


export default class StarshipsPage extends Component {

	swapiService = new SwapiService();

	state = {
		selectedStarshipId: 5
	}

	onSelectedStarship = (selectedStarshipId) => {
		this.setState({ selectedStarshipId });
	}

	render() {

		const { selectedStarshipId } = this.state;
		const listStarships = (
			<ListItems
				onSelectedItem={this.onSelectedStarship}
				getData={this.swapiService.getAllStarships}
				renderItem={({ name, costInCredits }) => `${name} ( ${costInCredits} )`} />
		);
		const starshipDetails = (
			<StarshipDetails selectedStarshipId={selectedStarshipId} />
		);

		return (
			<ErrorBounry>
				<RowPage left={listStarships} right={starshipDetails} />
			</ErrorBounry>
		);
	}
}
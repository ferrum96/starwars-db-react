import { Component } from "react";
import ListItems from "../list-items/list-items";
import ErrorIndicator from "../error-indicator/error-indicator";

import "./starships-page.css"
import SwapiService from "../../services/swapi-service";
import StarshipDetails from "../starship-details/starship-details";


export default class StarshipsPage extends Component {

	swapiService = new SwapiService();

	state = {
		selectedStarshipId: 5,
		hasError: false
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	onSelectedStarship = (selectedStarshipId) => {
		this.setState({ selectedStarshipId });
	}

	render() {

		const { selectedStarshipId, hasError } = this.state;

		if (hasError) {
			return <ErrorIndicator />
		}

		return (
			<div className="planets-page row mb2">
				<div className="col-md-6">
					<ListItems
						onSelectedItem={this.onSelectedStarship}
						getData={this.swapiService.getAllStarships}
						renderItem={({ name, costInCredits }) => `${name} ( ${costInCredits} )`} />
				</div>
				<div className="col-md-6">
					<StarshipDetails selectedStarshipId={selectedStarshipId} />
				</div>
			</div>
		);
	}
}
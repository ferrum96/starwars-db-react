import { Component } from "react";
import "./starships-page.css"
import RowPage from "../row-page/row-page";
import ErrorBoundry from "../error-boudry/error-boundry";
import StarshipDetails from "../sw-components/starship-details";
import { StarshipList } from "../sw-components/lists";

export default class StarshipsPage extends Component {

	state = {
		selectedStarshipId: 5
	}

	onSelectedStarship = (selectedStarshipId) => {
		this.setState({ selectedStarshipId });
	}

	render() {
		const { selectedStarshipId } = this.state;

		const listStarships = (
			<StarshipList onSelectedItem={this.onSelectedStarship} />
		);
		const starshipDetails = (
			<StarshipDetails selectedItemId={selectedStarshipId} />
		);

		return (
			<ErrorBoundry>
				<RowPage left={listStarships} right={starshipDetails} />
			</ErrorBoundry>
		);
	}
}
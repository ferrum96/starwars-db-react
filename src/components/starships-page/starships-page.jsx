import { Component } from "react";
import "./starships-page.css"
import ListItems from "../list-items/list-items";
import SwapiService from "../../services/swapi-service";
import RowPage from "../row-page/row-page";
import ItemDetails, { Record } from "../item-details/item-details";
import ErrorBoundry from "../error-boudry/error-boundry";

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
		const { getAllStarships, getStarshipById, getStarshipImageUrl } = this.swapiService;

		const listStarships = (
			<ListItems
				onSelectedItem={this.onSelectedStarship}
				getData={getAllStarships}
				renderItem={({ name, costInCredits }) => `${name} ( ${costInCredits} )`} />
		);
		const starshipDetails = (
			<ItemDetails
				selectedItemId={selectedStarshipId}
				getData={getStarshipById}
				getImageUrl={getStarshipImageUrl} >
				<Record field='model' label='Model' />
				<Record field='manufacturer' label='Manufacturer' />
				<Record field='costInCredits' label='Cost In Credits' />
				<Record field='length' label='Length' />
				<Record field='crew' label='Crew' />
				<Record field='passengers' label='Passengers' />
				<Record field='cargoCapacity' label='Cargo Capacity' />
			</ItemDetails>
		);

		return (
			<ErrorBoundry>
				<RowPage left={listStarships} right={starshipDetails} />
			</ErrorBoundry>
		);
	}
}
import { Component } from "react";
import "./people-page.css";
import ListItems from "../list-items/list-items";
import SwapiService from "../../services/swapi-service";
import RowPage from "../row-page/row-page";
import ItemDetails, { Record } from "../item-details/item-details";
import ErrorBoundry from "../error-boudry/error-boundry";

export default class PeoplePage extends Component {

	swapiService = new SwapiService();

	state = {
		selectedPersonId: 1
	}

	onSelectedPerson = (selectedPersonId) => {
		this.setState({ selectedPersonId });
	}

	render() {

		const { selectedPersonId } = this.state;
		const { getAllPeople, getPersonById, getPersonImageUrl } = this.swapiService;

		const listPeople = (
			<ListItems
				onSelectedItem={this.onSelectedPerson}
				getData={getAllPeople}
				renderItem={({ name, gender }) => `${name} ( ${gender} )`} />
		);
		const personDetails = (
			<ItemDetails
				selectedItemId={selectedPersonId}
				getData={getPersonById}
				getImageUrl={getPersonImageUrl} >
					<Record field='gender' label='Gender' />
					<Record field='birthYear' label='Birth year' />
					<Record field='eyeColor' label='Eye Color' />
			</ItemDetails>
		);

		return (
			<ErrorBoundry>
				<RowPage left={listPeople} right={personDetails} />
			</ErrorBoundry>
		);
	}
}
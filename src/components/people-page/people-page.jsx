import { Component } from "react";
import ListItems from "../list-items/list-items";
import PersonDetails from "../person-details/person-details";

import "./people-page.css"
import SwapiService from "../../services/swapi-service";
import RowPage from "../row-page/row-page";
import ErrorBounry from "../error-boudry/error-boundry";

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
		const listPeople = (
			<ListItems
				onSelectedItem={this.onSelectedPerson}
				getData={this.swapiService.getAllPeople}
				renderItem={({ name, gender }) => `${name} ( ${gender} )`} />
		);
		const personDetails = (
			<PersonDetails selectedPersonId={selectedPersonId} />
		);

		return (
			<ErrorBounry>
				<RowPage left={listPeople} right={personDetails} />
			</ErrorBounry>
		);
	}
}
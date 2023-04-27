import { Component } from "react";
import "./people-page.css";
import SwapiService from "../../services/swapi-service";
import RowPage from "../row-page/row-page";
import ErrorBoundry from "../error-boudry/error-boundry";
import { PersonList } from "../sw-components/lists";
import { PersonDetails } from "../sw-components/details";

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
			<PersonList onSelectedItem={this.onSelectedPerson} />
		);
		const personDetails = (
			<PersonDetails selectedItemId={selectedPersonId} />
		);

		return (
			<ErrorBoundry>
				<RowPage left={listPeople} right={personDetails} />
			</ErrorBoundry>
		);
	}
}
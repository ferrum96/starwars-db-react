import { Component } from "react";
import "./people-page.css";
import RowPage from "../row-page/row-page";
import ErrorBoundry from "../error-boudry/error-boundry";
import PersonDetails from "../sw-components/person-details";
import { PersonList } from "../sw-components/lists";

export default class PeoplePage extends Component {

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
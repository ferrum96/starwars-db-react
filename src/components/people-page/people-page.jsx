import { Component } from "react";
import ListItems from "../list-items/list-items";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";

import "./people-page.css"
import SwapiService from "../../services/swapi-service";


export default class PeoplePage extends Component {

	swapiService = new SwapiService();

	state = {
		selectedPersonId: 1,
		hasError: false
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	onSelectedPerson = (selectedPersonId) => {
		this.setState({ selectedPersonId });
	}

	render() {

		const { selectedPersonId, hasError } = this.state;

		if (hasError) {
			return <ErrorIndicator />
		}

		return (
			<div className="people-page row mb2">
				<div className="col-md-6">
					<ListItems
						onSelectedItem={this.onSelectedPerson}
						getData={this.swapiService.getAllPeople}
						renderItem={({ name, gender }) => `${name} ( ${gender} )`} />
				</div>
				<div className="col-md-6">
					<PersonDetails selectedPersonId={selectedPersonId} />
				</div>
			</div>
		);
	}
}
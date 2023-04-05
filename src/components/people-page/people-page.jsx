import { Component } from "react";
import ListItems from "../list-items/list-items";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";

import "./people-page.css"


export default class PeoplePage extends Component {

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

		const{ selectedPersonId, hasError } = this.state;

		if (hasError) {
			return <ErrorIndicator />
		}

		return (
			<div className="person-page row mb2">
				<div className="col-md-6">
					<ListItems onSelectedPerson={this.onSelectedPerson} />
				</div>
				<div className="col-md-6">
					<PersonDetails selectedPersonId={selectedPersonId} />
				</div>
			</div>
		);
	}
}
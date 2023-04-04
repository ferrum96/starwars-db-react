import { Component } from "react";

import "./app.css"
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ListItems from "../list-items/list-items";
import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

	swapiService = new SwapiService();

	state = {
		personId: 1
	}

	onSelectedItem = (personId) => {
		this.setState({ personId });
	}

	render() {
		const { personId } = this.state;

		return (
			<div className="container">
				<Header />
				<RandomPlanet />
				<div className="row mb2">
					<div className="col-md-6">
						<ListItems onSelectedItem={this.onSelectedItem} />
					</div>
					<div className="col-md-6">
						<PersonDetails personId={personId} />
					</div>
				</div>
			</div>
		)
	}
}
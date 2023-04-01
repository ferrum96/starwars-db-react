import { Component } from "react";

import "./app.css"
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ListItems from "../list-items/list-items";
import PersonDetails from "../person-details/person-details";

export default class App extends Component {
	state = {
		person: {
			id: '1',
			name: 'Luke Skywalker',
			gender: 'male',
			birthYear: '19BBY',
			eyeColor: 'blue'
		}
	}

	onSelectedItem = (person) => {
		this.setState({ person });
		console.log(person)
	}

	render() {

		const { person } = this.state;

		return (
			<div className="container">
				<Header />
				<RandomPlanet />
				<div className="row mb2">
					<div className="col-md-6">
						<ListItems onSelectedItem={this.onSelectedItem} />
					</div>
					<div className="col-md-6">
						<PersonDetails person={person} />
					</div>
				</div>
			</div>
		)
	}
}
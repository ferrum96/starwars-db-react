import { Component } from "react";

import "./app.css"
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ListItems from "../list-items/list-items";
import PersonDetails from "../person-details/person-details";

export default class App extends Component {
	render() {
		return (
		<div className="container">
			<Header />
			<RandomPlanet />

			<div className="row mb2">
				<div className="col-md-6">
					<ListItems />
				</div>
				<div className="col-md-6">
					<PersonDetails />
				</div>
			</div>
		</div>
		)
	}
}
import { Component } from "react";

import "./app.css"
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button/error-button";
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../people-page/people-page";
import PlanetsPage from "../planets-page/planets-page";
import StarshipsPage from "../starships-page/starships-page";

export default class App extends Component {

	swapiService = new SwapiService();

	state = {
		hasError: false
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {

		const { hasError } = this.state;

		if (hasError) {
			return <ErrorIndicator />
		}

		return (
			<div className="container">
				<Header />
				<RandomPlanet />
				<ErrorButton />
				<PeoplePage />
				<PlanetsPage />
				<StarshipsPage />
			</div>
		)
	}
}
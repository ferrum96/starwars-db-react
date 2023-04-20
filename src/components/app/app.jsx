import { Component } from "react";
import "./app.css"
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button/error-button";
import PeoplePage from "../people-page/people-page";
import PlanetsPage from "../planets-page/planets-page";
import StarshipsPage from "../starships-page/starships-page";
import ErrorBoundry from "../error-boudry/error-boundry";

export default class App extends Component {

	swapiService = new SwapiService();

	render() {
		return (
			<div className="container">
				<ErrorBoundry>
					<Header />
					<RandomPlanet />
					<ErrorButton />
					<PeoplePage />
					<PlanetsPage />
					<StarshipsPage />
				</ErrorBoundry>
			</div>
		)
	}
}
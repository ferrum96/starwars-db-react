import { Component } from "react";
import "./app.css"
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ErrorButton from "../error-button/error-button";
import PeoplePage from "../people-page/people-page";
import PlanetsPage from "../planets-page/planets-page";
import StarshipsPage from "../starships-page/starships-page";
import ErrorBoundry from "../error-boudry/error-boundry";

export default class App extends Component {

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
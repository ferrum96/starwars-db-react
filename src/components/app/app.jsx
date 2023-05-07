import { Component } from "react";
import "./app.css"
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../people-page/people-page";
import PlanetsPage from "../planets-page/planets-page";
import StarshipsPage from "../starships-page/starships-page";
import ErrorBoundry from "../error-boudry/error-boundry";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

	swapiService = new SwapiService();

	render() {
		return (
			<div className="container">
				<ErrorBoundry>
					<SwapiServiceProvider value={this.swapiService}>
						<Header />
						<RandomPlanet />
						<PeoplePage />
						<PlanetsPage />
						<StarshipsPage />
					</SwapiServiceProvider>
				</ErrorBoundry>
			</div>
		)
	}
}
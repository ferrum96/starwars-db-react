import withData from "../hoc-helpers/with-data";
import ListItems from "../list-items/list-items";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const withChildFunction = (Wrapped, func) => {
	return (props) => {
		return (
			<Wrapped {...props}>
				{func}
			</Wrapped>
		);
	}
};

const renderPersonLabel = ({ name, gender }) => `${name} ( ${gender} )`;
const renderPlanetLabel = ({ name, diameter }) => `${name} ( ${diameter} )`;
const renderStarshipLabel = ({ name, costInCredits }) => `${name} ( ${costInCredits} )`;

const mapPersonMethodsToProps = ({ getAllPeople }) => {
	return {
		getData: getAllPeople,
	}
}

const mapPlanetMethodsToProps = ({ getAllPlanets }) => {
	return {
		getData: getAllPlanets,
	}
}

const mapStarshipsMethodsToProps = ({ getAllStarships }) => {
	return {
		getData: getAllStarships,
	}
}

const PersonList = withSwapiService(withData(withChildFunction(ListItems, renderPersonLabel)), mapPersonMethodsToProps);
const PlanetList = withSwapiService(withData(withChildFunction(ListItems, renderPlanetLabel)), mapPlanetMethodsToProps);
const StarshipList = withSwapiService(withData(withChildFunction(ListItems, renderStarshipLabel)), mapStarshipsMethodsToProps);

export {
	PersonList,
	PlanetList,
	StarshipList
}
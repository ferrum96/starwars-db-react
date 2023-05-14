import compose from "../hoc-helpers/compose";
import withChildFunction from "../hoc-helpers/with-child-function";
import withSwapiService from "../hoc-helpers/with-swapi-service";
import withData from "../hoc-helpers/with-data";
import ListItems from "../list-items/list-items";

const renderPersonLabel = ({ name, gender }) => `${name} ( ${gender} )`;
const renderPlanetLabel = ({ name, diameter }) => `${name} ( ${diameter} )`;
const renderStarshipLabel = ({ name, costInCredits }) => `${name} ( ${costInCredits} )`;

const mapPersonMethodsToProps = ({ getAllPeople }) => {
	return { getData: getAllPeople }
}

const mapPlanetMethodsToProps = ({ getAllPlanets }) => {
	return { getData: getAllPlanets }
}

const mapStarshipsMethodsToProps = ({ getAllStarships }) => {
	return { getData: getAllStarships }
}

const PersonList = compose(
	withSwapiService(mapPersonMethodsToProps),
	withData,
	withChildFunction(renderPersonLabel)
)(ListItems);

const PlanetList = compose(
	withSwapiService(mapPlanetMethodsToProps),
	withData,
	withChildFunction(renderPlanetLabel)
)(ListItems);

const StarshipList = compose(
	withSwapiService(mapStarshipsMethodsToProps),
	withData,
	withChildFunction(renderStarshipLabel)
)(ListItems);

export {
	PersonList,
	PlanetList,
	StarshipList
}
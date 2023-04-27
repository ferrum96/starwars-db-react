import withData from "../hoc-helpers/with-data";
import SwapiService from "../../services/swapi-service";
import ListItems from "../list-items/list-items";

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

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

const PersonList = withData(withChildFunction(ListItems, renderPersonLabel), getAllPeople);
const PlanetList = withData(withChildFunction(ListItems, renderPlanetLabel), getAllPlanets);
const StarshipList = withData(withChildFunction(ListItems, renderStarshipLabel), getAllStarships);

export {
	PersonList,
	PlanetList,
	StarshipList
}
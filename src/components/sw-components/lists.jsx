import withData from "../hoc-helpers/with-data";
import SwapiService from "../../services/swapi-service";
import ListItems from "../list-items/list-items";

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const PersonList = withData(ListItems, getAllPeople);
const PlanetList = withData(ListItems, getAllPlanets);
const StarshipList = withData(ListItems, getAllStarships);

export {
	PersonList,
	PlanetList,
	StarshipList
}
export default class SwapiService {

	_apiBaseUrl = "https://swapi.dev/api";
	_apiImageUrl = "https://starwars-visualguide.com/assets/img";

	getResourse = async (resourse) => {
		const resUrl = this._apiBaseUrl + resourse;
		const res = await fetch(resUrl);
		if (!res.ok) {
			throw new Error(`Could not fetch ${resUrl} , received ${res.status}`)
		}
		return await res.json();
	}

	getImageUrl = (resourse, id) => {
		return `${this._apiImageUrl}/${resourse}/${id}.jpg`
	}

	getAllPeople = async () => {
		const res = await this.getResourse("/people/");
		return res.results.map(this._transformPerson);
	}

	getPersonById = async (id) => {
		const person = await this.getResourse(`/people/${String(id)}/`);
		return this._transformPerson(person);
	}

	getAllPlanets = async () => {
		const res = await this.getResourse("/planets/");
		return res.results.map(this._transformPlanet);
	}

	getPlanetById = async (id) => {
		const planet = await this.getResourse(`/planets/${String(id)}/`);
		return this._transformPlanet(planet);
	}

	getAllStarships = async () => {
		const res = await this.getResourse("/starships/");
		return res.results.map(this._transformStarship);
	}

	getStarshipById = async (id) => {
		const starship = await this.getResourse(`/starships/${String(id)}/`);
		return this._transformStarship(starship);
	}

	getPersonImageUrl = ({ id }) => {
		return this.getImageUrl('characters', id);
	}

	getStarshipImageUrl = ({ id }) => {
		return this.getImageUrl('starships', id);
	}

	getPlanetImageUrl = ({ id }) => {
		return this.getImageUrl('planets', id);
	}

	_extractId = (item) => {
		const idRegExp = /\/([0-9]*)\/$/;
		const id = item.url.match(idRegExp)[1];
		return id;
	}

	_transformPerson = (person) => {
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color
		}
	}

	_transformPlanet = (planet) => {
		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		}
	}

	_transformStarship = (starship) => {
		return {
			id: this._extractId(starship),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.cost_in_credits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargo_capacity
		}
	}
}
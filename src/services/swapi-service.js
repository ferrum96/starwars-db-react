class SwapiService {

	_apiBaseUrl = "https://swapi.dev/api";

	getResourse = async (resourse) => {
		const resUrl = this._apiBaseUrl + resourse;
		const res = await fetch(resUrl);
		if (!res.ok) {
			throw new Error(`Could not fetch ${resUrl} , received ${res.status}`)
		}
		return await res.json();
	}

	async getAllPeople() {
		const res = await this.getResourse("/people/");
		return res.results;
	}

	async getPersonById(id) {
		return await this.getResourse(`/people/${String(id)}/`);
	}

	async getAllPlanets() {
		const res = await this.getResourse("/planets/");
		return res.results;
	}

	async getPlanetById(id) {
		return await this.getResourse(`/planets/${String(id)}/`);
	}

	async getAllStarships() {
		const res = await this.getResourse("/starships/");
		return res.results;
	}

	async getStarshipById(id) {
		return await this.getResourse(`/starships/${String(id)}/`);
	}
}
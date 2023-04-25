import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";

const { getPersonById,
	getPlanetById,
	getStarshipById,
	getPersonImageUrl,
	getPlanetImageUrl,
	getStarshipImageUrl
} = new SwapiService();

const PersonDetails = ({ selectedItemId }) => {
	return (
		<ItemDetails
			selectedItemId={selectedItemId}
			getData={getPersonById}
			getImageUrl={getPersonImageUrl} >
			<Record field='gender' label='Gender' />
			<Record field='birthYear' label='Birth year' />
			<Record field='eyeColor' label='Eye Color' />
		</ItemDetails>
	);
};
const PlanetDetails = ({ selectedItemId }) => {
	return (
		<ItemDetails
			selectedItemId={selectedItemId}
			getData={getPlanetById}
			getImageUrl={getPlanetImageUrl} >
			<Record field='population' label='Population' />
			<Record field='rotationPeriod' label='Rotation Period' />
			<Record field='diameter' label='Diameter' />
		</ItemDetails>
	);
};
const StarshipDetails = ({ selectedItemId }) => {
	return (
		<ItemDetails
			selectedItemId={selectedItemId}
			getData={getStarshipById}
			getImageUrl={getStarshipImageUrl} >
			<Record field='model' label='Model' />
			<Record field='manufacturer' label='Manufacturer' />
			<Record field='costInCredits' label='Cost In Credits' />
			<Record field='length' label='Length' />
			<Record field='crew' label='Crew' />
			<Record field='passengers' label='Passengers' />
			<Record field='cargoCapacity' label='Cargo Capacity' />
		</ItemDetails>
	);
};

export {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
}
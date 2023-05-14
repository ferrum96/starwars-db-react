import React from "react";
import withSwapiService from "../hoc-helpers/with-swapi-service";
import ItemDetails, { Record } from "../item-details/item-details";

const StarshipDetails = (props) => {

	return (
		<ItemDetails {...props} >
			<Record field='model' label='Model' />
			<Record field='manufacturer' label='Manufacturer' />
			<Record field='costInCredits' label='Cost In Credits' />
			<Record field='length' label='Length' />
			<Record field='crew' label='Crew' />
			<Record field='passengers' label='Passengers' />
			<Record field='cargoCapacity' label='Cargo Capacity' />
		</ItemDetails>
	);
}

const mapMethodsToProps = ({ getStarshipById, getStarshipImageUrl }) => {
	return {
		getData: getStarshipById,
		getImageUrl: getStarshipImageUrl
	}
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
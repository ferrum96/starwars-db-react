import React from "react";
import withSwapiService from "../hoc-helpers/with-swapi-service";
import ItemDetails, { Record } from "../item-details/item-details";

const PersonDetails = ({ selectedItemId, swapiService }) => {
	const { getPersonById, getPersonImageUrl } = swapiService;

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
}

export default withSwapiService(PersonDetails);
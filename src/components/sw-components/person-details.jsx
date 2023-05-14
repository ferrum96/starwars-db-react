import React from "react";
import withSwapiService from "../hoc-helpers/with-swapi-service";
import ItemDetails, { Record } from "../item-details/item-details";

const PersonDetails = (props) => {

	return (
		<ItemDetails {...props} >
			<Record field='gender' label='Gender' />
			<Record field='birthYear' label='Birth year' />
			<Record field='eyeColor' label='Eye Color' />
		</ItemDetails>
	);
}

const mapMethodsToProps = ({ getPersonById, getPersonImageUrl }) => {
	return {
		getData: getPersonById,
		getImageUrl: getPersonImageUrl
	}
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);
import React from "react";
import withSwapiService from "../hoc-helpers/with-swapi-service";
import ItemDetails, { Record } from "../item-details/item-details";

const PlanetDetails = (props) => {

	return (
		<ItemDetails {...props} >
			<Record field='population' label='Population' />
			<Record field='rotationPeriod' label='Rotation Period' />
			<Record field='diameter' label='Diameter' />
		</ItemDetails>
	);
}

const mapMethodsToProps = ({ getPlanetById, getPlanetImageUrl }) => {
	return {
		getData: getPlanetById,
		getImageUrl: getPlanetImageUrl
	}
}

export default withSwapiService(PlanetDetails, mapMethodsToProps);
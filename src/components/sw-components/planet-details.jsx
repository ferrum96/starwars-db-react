import React from "react";
import withSwapiService from "../hoc-helpers/with-swapi-service";
import ItemDetails, { Record } from "../item-details/item-details";

const PlanetDetails = ({ selectedItemId, swapiService }) => {
	const { getPlanetById, getPlanetImageUrl } = swapiService;

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
}

export default withSwapiService(PlanetDetails);
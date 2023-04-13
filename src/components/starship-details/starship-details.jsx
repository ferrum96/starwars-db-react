import React, { Component } from "react";

import "./starship-details.css"
import Loader from "../loader/loader";
import ErrorButton from "../error-button/error-button";
import SwapiService from "../../services/swapi-service";

export default class StarshipDetails extends Component {

	swapiService = new SwapiService();

	state = {
		starship: {},
		loading: true,
		error: false
	}

	componentDidMount() {
		this.updateStarship();
	}

	componentDidUpdate(prevProps) {
		if (this.props.selectedStarshipId !== prevProps.selectedStarshipId) {
			this.setState({ loading: true })
			this.updateStarship();
		}
	}

	onStarshipLoaded = (starship) => {
		this.setState({
			starship,
			loading: false
		});
	}

	onError = () => {
		this.setState({
			error: true,
			loading: false
		});
	}

	updateStarship() {
		const { selectedStarshipId } = this.props;

		this.swapiService
			.getStarshipById(selectedStarshipId)
			.then(starship => this.onStarshipLoaded(starship))
			.catch(this.onError);
	}

	render() {
		const { starship, loading, error } = this.state;

		return (
			error ? null :
				<div className="starship-details card">
					{loading ? <Loader /> : <StarshipView starship={starship} />}
				</div>
		)
	}
}

const StarshipView = ({ starship }) => {
	const { id, name, model, manufacturer, costInCredits, length, crew, passengers, cargoCapacity } = starship;

	console.log(id)

	return (
		<React.Fragment>
			<img className="starship-image"
				src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt={`starship ${id}`} />
			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Model</span>
						<span>{model}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Manufacturer</span>
						<span>{manufacturer}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Cost In Credits</span>
						<span>{costInCredits}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Length</span>
						<span>{length}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Crew</span>
						<span>{crew}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Cost In Credits</span>
						<span>{costInCredits}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Passengers</span>
						<span>{passengers}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Cargo Capacity</span>
						<span>{cargoCapacity}</span>
					</li>
				</ul>
				<ErrorButton />
			</div>
		</React.Fragment>
	)
}
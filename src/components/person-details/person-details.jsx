import React, { Component } from "react";

import "./person-details.css"
import SwapiService from "../../services/swapi-service";
import Loader from "../loader/loader";

export default class PersonDetails extends Component {

	swapiService = new SwapiService();

	state = {
		person: null,
		loading: true,
		error: false
	}

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId) {
			this.updatePerson();
			this.setState({ loading: true })
		}
	}

	onPersonLoaded = (person) => {
		this.setState({
			person,
			loading: false
		});
	}

	onError = () => {
		this.setState({
			error: true,
			loading: false
		});
	}

	updatePerson() {
		const { personId } = this.props;

		if (!personId) {
			return;
		}

		this.swapiService
			.getPersonById(personId)
			.then(person => this.onPersonLoaded(person))
			.catch(this.onError);
	}

	render() {
		const { person, loading, error } = this.state;

		return (
			error ? null :
				<div className="person-details card">
					{loading ? <Loader /> : <PersonView person={person} />}
				</div>
		)
	}
}

const PersonView = ({ person }) => {
	const { id, name, gender, birthYear, eyeColor } = person;

	return (
		<React.Fragment>
			<img className="person-image"
				src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={`character ${id}`} />
			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Gender</span>
						<span>{gender}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Birth Year</span>
						<span>{birthYear}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Eye Color</span>
						<span>{eyeColor}</span>
					</li>
				</ul>
			</div>
		</React.Fragment>
	)
}
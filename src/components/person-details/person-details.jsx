import { Component } from "react";

import "./person-details.css"

export default class PersonDetails extends Component {
	render() {
		const { person } = this.props;

		return (
			<div className="person-details card">
				<img className="person-image"
					src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`} alt={`character ${person.id}`} />
				<div className="card-body">
					<h4>{person.name}</h4>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<span className="term">Gender</span>
							<span>{person.gender}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Birth Year</span>
							<span>{person.birthYear}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Eye Color</span>
							<span>{person.eyeColor}</span>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
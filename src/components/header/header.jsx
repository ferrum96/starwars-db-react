import { Component } from "react";

import "./header.css"

export default class Header extends Component {

	render() {
		return (
			<div className="header d-flex">
				<h3>
					<a href="/">
						Star DB
					</a>
				</h3>
				<ul className="d-flex">
					<li>
						<a href="people">People</a>
					</li>
					<li>
						<a href="planets">Planets</a>
					</li>
					<li>
						<a href="starships">Starships</a>
					</li>
				</ul>
			</div>
		)
	}
}
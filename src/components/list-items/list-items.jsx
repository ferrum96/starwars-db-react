import { Component } from "react";

import "./list-items.css"
import Loader from "../loader/loader";
import SwapiService from "../../services/swapi-service";

export default class ListItems extends Component {

	swapiService = new SwapiService();

	state = {
		listItems: [],
		loading: true
	}

	componentDidMount() {
		this.swapiService
			.getAllPeople()
			.then(this.onLoadedPerson)
			.catch(this.onError)
	}

	onLoadedPerson = (listItems) => {
		this.setState({
			listItems,
			loading: false
		})
	}

	onError = () => {
		this.setState({
			error: true,
			loading: false
		})
	}

	render() {
		const { listItems, loading, error } = this.state;

		const items = listItems.map((item) => {
			return (
				<li 
				key={item.id} 
				className="list-group-item"
				onClick={() => this.props.onSelectedItem(item)}>
					{item.name}
				</li>
			)
		});

		return (
			<ul className="item-list list-group">
				{error ? null : loading ? <Loader /> : items}
			</ul>
		)
	}
}
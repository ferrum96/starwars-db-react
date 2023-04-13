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
		const { getData } = this.props;

		getData()
			.then(this.onLoadedItems)
			.catch(this.onError)
	}

	onLoadedItems = (listItems) => {
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

	renderItems(listItems) {
		return listItems.map(({ id, ...item }) => {
			const label = this.props.renderItem(item);

			return (
				<li
					key={id}
					className="list-group-item"
					onClick={() => this.props.onSelectedItem(id)}>
					{label}
				</li>
			)
		});
	}

	render() {
		const { listItems, loading, error } = this.state;

		return (
			<ul className="item-list list-group">
				{error ? null : loading ? <Loader /> : this.renderItems(listItems)}
			</ul>
		)
	}
}
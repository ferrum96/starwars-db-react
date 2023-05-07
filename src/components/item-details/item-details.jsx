import React, { Component } from "react";
import "./item-details.css"
import SwapiService from "../../services/swapi-service";
import Loader from "../loader/loader";

const Record = ({ item, field, label }) => {
	return (
		<li className="list-group-item">
			<span className="term">{label}</span>
			<span>{item[field]}</span>
		</li>
	);
}

export { Record }

export default class ItemDetails extends Component {

	swapiService = new SwapiService();

	state = {
		item: null,
		imageUrl: null,
		loading: true
	}

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.selectedItemId !== prevProps.selectedItemId) {
			this.setState({ loading: true })
			this.updateItem();
		}
	}

	onItemLoaded = (item) => {
		this.setState({
			item,
			imageUrl: this.props.getImageUrl(item),
			loading: false
		});
	}

	updateItem() {
		const { selectedItemId, getData, getImageUrl } = this.props;

		getData(selectedItemId)
			.then((item) => {
				this.setState({
					item,
					imageUrl: getImageUrl(item),
					loading: false
				});
			});
	}

	render() {
		const { item, loading, imageUrl } = this.state;

		return (
			<div className="item-details card">
				{loading ? <Loader /> : <ItemView item={item} imageUrl={imageUrl} children={this.props.children} />}
			</div>
		)
	}
}

const ItemView = ({ item, imageUrl, children }) => {
	const { id, name } = item;

	return (
		<React.Fragment>
			<img className="item-image"
				src={imageUrl} alt={`item ${id}`} />
			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					{
						React.Children.map(children, (child) => {
							return React.cloneElement(child, { item });
						})
					}
				</ul>
			</div>
		</React.Fragment>
	)
}
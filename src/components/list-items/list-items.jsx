import "./list-items.css"
import ErrorBoundry from "../error-boudry/error-boundry";

const ListItems = (props) => {
	const { data, onSelectedItem, children: renderLabel } = props;
	const items = data.map(({ id, ...item }) => {
		return (
			<li
				key={id}
				className="list-group-item"
				onClick={() => onSelectedItem(id)}>
				{renderLabel(item)}
			</li>
		)
	});

	return (
		<ErrorBoundry>
			<ul className="item-list list-group">
				{items}
			</ul>
		</ErrorBoundry>
	)
}

export default ListItems;
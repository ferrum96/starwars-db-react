import { Component } from "react";
import Loader from "../loader/loader";
import ErrorIndicator from "../error-indicator/error-indicator";


const withData = (View) => {
	return class extends Component {

		state = {
			data: null,
			loading: true,
			error: false
		}

		componentDidMount() {
			this.props.getData()
				.then((data) => {
					this.setState({
						data,
						loading: false
					})
				})
				.catch(() => {
					this.setState({
						error: true,
						loading: false
					})
				})
		}

		render() {
			const { data, loading, error } = this.state;
			return (
				error ? <ErrorIndicator /> : loading ? <Loader /> : <View {...this.props} data={data} />
			)
		}
	}
}

export default withData;
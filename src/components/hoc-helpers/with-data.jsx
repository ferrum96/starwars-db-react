import { Component } from "react";
import ErrorBoundry from "../error-boudry/error-boundry";
import Loader from "../loader/loader";


const withData = (View) => {
	return class extends Component {

		state = {
			data: null
		}

		componentDidMount() {
			this.props.getData()
				.then((data) => {
					this.setState({
						data,
					})
				})
		}

		render() {
			const { data } = this.state;
			return (
				<ErrorBoundry>
					{!data ? <Loader /> : <View {...this.props} data={data} />}
				</ErrorBoundry>
			)
		}
	}
}

export default withData;
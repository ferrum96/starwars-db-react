import React from "react";

const RowPage = ({ left, right }) => {
	return (
		<div className="people-page row mb-2">
			<div className="col-md-6 mb-4">
				{left}
			</div>
			<div className="col-md-6 mb-4">
				{right}
			</div>
		</div>

	);
}

export default RowPage;
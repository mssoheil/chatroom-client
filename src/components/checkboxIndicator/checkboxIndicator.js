import React from "react";

const CheckBoxIndicator = props => {
	return (
		<svg id={props.id} viewBox={props.viewBox} fill={props.fill}>
			<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
		</svg>
	);
};

export default CheckBoxIndicator;

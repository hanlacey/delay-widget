import React from "react";
import "../styles/Widget.css";
import AllLines from "./AllLines";
import Description from "./Description";

export default function Widget(params) {
	const { line_id } = params;
	const timestamp = Date.now();

	const lastUpdated = new Intl.DateTimeFormat("en-GB", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	}).format(timestamp);
	return (
		<div className="Widget">
			<div id="last-updated">LAST UPDATED: {lastUpdated}</div>
			{line_id ? <Description line_id={line_id} /> : <AllLines />}
		</div>
	);
}

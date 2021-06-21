import React, { useEffect, useState } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import "../styles/Widget.css";

export default function Description(params) {
	const [description, setDescription] = useState("");

	useEffect(() => {
		api.getStatusDescriptionById(params.line_id).then((description) => {
			setDescription(description);
		});
	}, []);

	return (
		<div className="info-container">
			<div id="description">{description}</div>
			<div id="go-back">
				<Link to="/travel">Go back</Link>
			</div>
		</div>
	);
}

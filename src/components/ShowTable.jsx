import React from "react";
import { Link } from "@reach/router";
import { Button } from "react-bootstrap";
import "../styles/Widget.css";
export default function ShowTable() {
	return (
		<div className="show-table">
			<Link to="/travel">
				<Button id="show-lines">View all line statuses</Button>
			</Link>
		</div>
	);
}

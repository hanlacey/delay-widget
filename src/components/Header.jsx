import React from "react";
import { Link } from "@reach/router";
import "../styles/App.css";

export default function Header() {
	return (
		<Link to="/travel" className="Header">
			TRAVEL WIDGET
		</Link>
	);
}

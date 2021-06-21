import React, { useState, useEffect } from "react";
import Table from "./Table";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import "../styles/Widget.css";

export default function AllLines() {
	const [lineData, setLineData] = useState([]);

	function formatLineData(data) {
		const formattedLineData = data.map((line) => {
			const lineName = line.name;
			const status = line.lineStatuses[0].statusSeverityDescription;
			const link = <Link to={`${line.id}`}>View more</Link>;
			return { lineName, status, link };
		});
		setLineData(formattedLineData);
	}

	useEffect(() => {
		api
			.getAllStatuses()
			.then((data) => {
				formatLineData(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="info-container">
			<Table tableData={lineData} />
		</div>
	);
}

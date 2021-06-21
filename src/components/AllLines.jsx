import React, { useState, useEffect } from "react";
import Table from "./Table";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import "../styles/Widget.css";

export default function AllLines() {
	const [lineData, setLineData] = useState([]);
	const [isDataReady, setIsDataReady] = useState(false);

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
				setIsDataReady(true);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="info-container">
			{!isDataReady ? <p>Loading...</p> : <Table tableData={lineData} />}
		</div>
	);
}

import React, { useState, useEffect } from "react";
import Table from "./Table";
import * as api from "../utils/api";

export default function AllLines() {
	const [lineData, setLineData] = useState([]);

	function formatLineData(data) {
		const formattedLineData = data.map((line) => {
			const lineName = line.name;
			const status = line.lineStatuses[0].statusSeverityDescription;
			const link = `/${lineName}`;
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

	return <Table tableData={lineData} />;
}

import React, { useState, useEffect, useMemo } from "react";
import * as api from "../utils/api";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";
import "../styles/Table.css";

export default function Table() {
	const [lineData, setLineData] = useState([]);

	function formatLineData(data) {
		const formattedLineData = data.map((line) => {
			const lineName = line.name;
			const status = line.lineStatuses[0].statusSeverityDescription;
			const description = line.lineStatuses[0].reason;
			const link = `/${lineName}`;
			if (description) {
				return { lineName, status, description: link };
			} else {
				return {
					lineName,
					status,
					description: `There are currently no reported disruptions on the ${lineName} line.`,
				};
			}
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
	}, [lineData]);

	/////////////////////////////////////////////
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => lineData, [lineData]);
	const tableInstance = useTable({ columns, data });

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		tableInstance;

	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render("header")}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

import React, { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";
import "../styles/Table.css";

export default function Table({ tableData }) {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => tableData, [tableData]);
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

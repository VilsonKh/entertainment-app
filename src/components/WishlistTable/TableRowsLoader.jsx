import { Skeleton, TableCell, TableRow } from "@mui/material";
import React from "react";

const TableRowsLoader = ({ rowsNum }) => {
	return [...Array(rowsNum)].map((row, index) => {
		return (
			<TableRow key={index}>
				<TableCell component="th" scope="row">
					<Skeleton variant="text" style={{ background: "#363f54" }} />
				</TableCell>
				<TableCell component="th" scope="row">
					<Skeleton variant="text" style={{ background: "#363f54" }} />
				</TableCell>
				<TableCell component="th" scope="row">
					<Skeleton variant="text" style={{ background: "#363f54" }} />
				</TableCell>
				<TableCell component="th" scope="row">
					<Skeleton variant="text" style={{ background: "#363f54" }} />
				</TableCell>
				<TableCell component="th" scope="row">
					<Skeleton variant="text" style={{ background: "#363f54" }} />
				</TableCell>
				<TableCell component="th" scope="row">
					<Skeleton variant="text" style={{ background: "#363f54" }} />
				</TableCell>
			</TableRow>
		);
	});
};

export default TableRowsLoader;

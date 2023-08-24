import { Skeleton, TableCell, TableRow } from "@mui/material";
import React from "react";

//preloader with skeletons for wishlist table
const TableRowsLoader = ({ rowsNum }) => {
	return [...Array(rowsNum)].map((row, index) => {
		return (
			<TableRow key={index}>
				{[...Array(6)].map((item, i) => {
					return (
						<TableCell component="th" scope="row" key={i}>
							<Skeleton variant="text" style={{ background: "#363f54" }} />
						</TableCell>
					);
				})}
			</TableRow>
		);
	});
};

export default TableRowsLoader;

import { useDispatch, useSelector } from "react-redux";
import "./WishlistTable.scss";
import { useEffect } from "react";
import { content, contentStatus, wishlistItems } from "../../store/videosSlice";
import { fetchWishlistItems } from "../../store/thunks";
import TableRowsLoader from "./TableRowsLoader";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const WishlistTable = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchWishlistItems());
	}, [dispatch]);

	const data = useSelector(wishlistItems);
	const queryStatus = useSelector(contentStatus);

	return (
		<Table className="wislist__table" sx={{color: 'white'}}>
			<TableHead>
				<TableRow>
					<TableCell>№</TableCell>
					<TableCell>Title</TableCell>
					<TableCell>Year</TableCell>
					<TableCell>Category</TableCell>
					<TableCell>Genre</TableCell>
					<TableCell>Date</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{queryStatus === 'loading' ? 
				(<TableRowsLoader rowsNum={5}/>) : 
				data.map((item, i) => {
          const { genre, title,year,category, timestamp} = item;
					return (
						<TableRow key={i}>
							<TableCell >{`${i+1}.`}</TableCell>
							<TableCell>{title}</TableCell>
							<TableCell >{year || '-'}</TableCell>
							<TableCell>{category || '-'}</TableCell>
							<TableCell className='table__genre'>{genre || '-'}</TableCell>
							<TableCell>{new Date(timestamp).toLocaleDateString()}</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};

export default WishlistTable;

import { useDispatch, useSelector } from "react-redux";
import "./WishlistTable.scss";
import { useEffect } from "react";
import { content, contentStatus } from "../../store/videosSlice";
import { fetchWishlistItems } from "../../store/thunks";

const WishlistTable = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchWishlistItems());
	}, [dispatch]);

	const data = useSelector(content);
	const queryStatus = useSelector(contentStatus);

  let counter = 1
	return (
		<table className="wislist__table">
			<thead>
				<tr>
					<th>№</th>
					<th>Title</th>
					<th>Year</th>
					<th>Category</th>
					<th>Genre</th>
				</tr>
			</thead>
			<tbody>
				{queryStatus === 'loading' ? 
				(<p>Loading...</p>) : 
				data.map((item) => {
          const { genre, title,id,year,category} = item;
					return (
						<tr key={id}>
							<td>{`${counter++}.`}</td>
							<td>{title}</td>
							<td>{year || '-'}</td>
							<td>{category || '-'}</td>
							<td>{genre || '-'}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default WishlistTable;

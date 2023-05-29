import { useSelector } from "react-redux";
import "./WishlistTable.scss";
import { useQueryAllVideos } from "../../firebase/service";

const WishlistTable = () => {
  useQueryAllVideos()
	const wishlistItems = useSelector((state) => state.videos.wishlist);
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
				{wishlistItems.map((item) => {
          
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

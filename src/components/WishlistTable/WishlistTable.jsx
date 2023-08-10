import "./WishlistTable.scss";
import { useLoaderData } from "react-router-dom";

const WishlistTable = () => {
	const data = useLoaderData()
	const contentData = data.docs.map((doc) => doc.data())
	console.log(contentData)

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
				{contentData.map((item) => {
          
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

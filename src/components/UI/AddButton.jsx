import "./AddButton.scss";
import { Link } from "react-router-dom";

const AddButton = () => {
	return (
		<div className="addButton__container">
			<Link to={'/add'} className="addButton__button">+</Link>
		</div>
	);
};

export default AddButton;

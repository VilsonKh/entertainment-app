import { useDebugValue } from "react";
import "./AddButton.scss";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModalState } from "../../store/videosSlice";

const AddButton = () => {
	const url = useLocation();
	const dispatch = useDispatch();
	return (
		<button type="button" onClick={() => dispatch(setModalState())} className="addButton__button">
			<span>+</span>
		</button>
	);
};

export default AddButton;

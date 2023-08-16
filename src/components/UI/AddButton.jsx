import "./AddButton.scss";
import { useDispatch } from "react-redux";
import { setModalState } from "../../store/videosSlice";

const AddButton = () => {
	const dispatch = useDispatch();
	return (
		<button type="button" 
						onClick={() => dispatch(setModalState())} 
						className="addButton__button">
			<span>+</span>
		</button>
	);
};

export default AddButton;

import "./AddForm.scss";
import { useDispatch } from "react-redux";
import { setModalState } from "../../store/videosSlice";
import Form from "./Form";
const AddForm = () => {
	const dispatch = useDispatch();

	const overlayClick = (e) => {
		if (e.target.className === "addForm__container") dispatch(setModalState());
	};

	return (
		<div className="addForm__container" onClick={(e) => overlayClick(e)}>
			<Form  />
		</div>
	);
};

export default AddForm;

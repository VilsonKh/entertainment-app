import { useForm } from "react-hook-form";
import TextAreaInput from "./TextAreaInput";
import './NewReviewForm.scss';
import { postNewReview } from "../../firebase/service";
import { addUserCommet } from "../../store/videosSlice";
import { useDispatch } from "react-redux";

//form adds comments to the comments section in item card
const NewReviewForm = ({ currentLocation, setIsMessageOpen }) => {

	const dispatch = useDispatch()

	const formData = useForm({
		mode: 'onChange'
	});
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
		control
	} = formData;

	const onSubmit = async (values) => {
    setIsMessageOpen(true)
		//timeout is needed to close message automatically
    setTimeout(() => {
      setIsMessageOpen(false)
			reset()
    }, 2000);
	 	await postNewReview(currentLocation, values)
		dispatch(addUserCommet(values))
	};

	const errorIndicator = errors["name"] ? "true" : "false";

	return (
		<form className="reviewForm" onSubmit={handleSubmit(onSubmit)}>
			<h2 className="itemCard__subheading">ADD NEW COMMENT</h2>
			<input
				className="reviewForm__input reviewForm__name"
				type="text"
				placeholder="Name"
				{...register("name", {
					required: "required",
					maxLength: {
						value: 40
					}
				})}
				aria-invalid={errorIndicator}
			/>
			<TextAreaInput register={register} errors={errors} control={control}/>
			<button type="submit" className="reviewForm__submit">
				SUBMIT
			</button>
		</form>
	);
};

export default NewReviewForm;

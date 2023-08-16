import { useForm } from "react-hook-form";
import TextAreaInput from "./TextAreaInput";
import './NewReviewForm.scss';
import { useState } from "react";
import { postNewReview } from "../../firebase/service";

const NewReviewForm = ({ currentLocation, setIsMessageOpen }) => {

  const [charLength, setCharLength] = useState(0)

	const formData = useForm();
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = formData;

	const onSubmit = async (values) => {
    setIsMessageOpen(true)
    setTimeout(() => {
      reset();
      setIsMessageOpen(false)
      setCharLength(0)
    }, 2000);
		await postNewReview(currentLocation, values)
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
				})}
				aria-invalid={errorIndicator}
			/>
			<TextAreaInput rowsQuantity={4} register={register} errors={errors} setCharLength={setCharLength} charLength={charLength}/>
			<button type="submit" className="reviewForm__submit">
				SUBMIT
			</button>
		</form>
	);
};

export default NewReviewForm;

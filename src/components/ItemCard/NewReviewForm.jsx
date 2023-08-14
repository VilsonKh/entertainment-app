import { useForm } from "react-hook-form";
import TextAreaInput from "./TextAreaInput";
import { postNewReview } from "../../firebase/service";
import { useState } from "react";

const NewReviewForm = ({ currentLocation, setIsMessageOpen }) => {
	const formData = useForm();
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = formData;



	const onSubmit = async (values) => {
    setIsMessageOpen(true)
		reset();
    // setTimeout(() => {
      // setIsMessageOpen(false)
    // }, 2000);
		// await postNewReview(currentLocation, values)
	};

	const errorIndicator = errors["name"] ? "true" : "false";

	return (
		<form className="itemCard__newReviewForm" onSubmit={handleSubmit(onSubmit)}>
			<h2 className="itemCard__subheading">ADD NEW REVIEW</h2>
			<input
				className="itemCard__input itemCard__name"
				type="text"
				placeholder="Name"
				{...register("name", {
					required: "required",
				})}
				aria-invalid={errorIndicator}
			/>
			<TextAreaInput rowsQuantity={4} register={register} errors={errors} />
			<button type="submit" className="itemCard__submit">
				SUBMIT
			</button>
		</form>
	);
};

export default NewReviewForm;

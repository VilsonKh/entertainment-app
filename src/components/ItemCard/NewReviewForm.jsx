import { useForm } from "react-hook-form";
import TextAreaInput from "./TextAreaInput";
import './NewReviewForm.scss';
import { useState } from "react";
import { postNewReview } from "../../firebase/service";

const NewReviewForm = ({ currentLocation, setIsMessageOpen }) => {

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
      reset();
      setIsMessageOpen(false)
			reset()
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
					maxLength: {
						value: 40
					}
				})}
				aria-invalid={errorIndicator}
			/>
			{/* <TextAreaInput  register={register} errors={errors} setCharLength={setCharLength} charLength={charLength}/> */}
			<TextAreaInput register={register} errors={errors} control={control}/>
			<button type="submit" className="reviewForm__submit">
				SUBMIT
			</button>
		</form>
	);
};

export default NewReviewForm;

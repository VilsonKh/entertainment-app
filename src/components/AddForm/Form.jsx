import { Link } from "@mui/material";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import Input from "./Input";
import { postNewWishlistItem } from "../../firebase/service";
import { useDispatch } from "react-redux";
import { setModalState } from "../../store/videosSlice";

const Form = () => {

  const currentYear = new Date().getFullYear()
  const dispatch = useDispatch()
  const validationSchema = yup
  .object({
    email: yup.string().email('invalid email').required('required'),
    title: yup.string().max(39, 'max 40 characters').required('required'),
    genre: yup.string(),
    category: yup.string(),
    year: yup.string()
  })
  .required();

	const formData = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email : '',
      title : '',
      category: "don't know",
      genre : '',
      year : currentYear
    }
  });

  const {handleSubmit, register} = formData;
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const onSubmit = async (data) => {
    console.log(data);
    dispatch(setModalState())
    await postNewWishlistItem(data)
  };

	return (
		<>
    	<FormProvider {...formData}>
			<form  className="addForm" id="addForm">
				<legend className="form__legend">Add your film to a wishlist</legend>
				<fieldset className="addForm__fieldset">
					<label htmlFor='email' className="form__label">Your email: </label>
					<div className="form__field form__email">
						<Input inputType={'email'} inputName={'email'} required={true}/>
					</div>
				</fieldset>
				<fieldset className="addForm__fieldset">
					<label>Movie/TV Series Info</label>
					<div className="form__field">
            <Input inputType={'text'} inputName={'title'} required={true}/>
					</div>
					<div className="form__field">
            <Input inputType={'number'} inputName={'year'} required={true}/>
					</div>
					<div className="form__field">
            <Input inputType={'text'} inputName={'category'} required={false}/>
					</div>
					<div className="form__field">
						<label className="form__label">Choose genre: </label>
						<select className="form__input" id="genre" type="text" {...register("genre")}>
            <option value="don't know">don't know</option>
              <option value="action">action</option>
							<option value="fantasy">fantasy</option>
							<option value="drama">drama</option>
							<option value="cartoon">cartoon</option>
							<option value="comedy">comedy</option>
						</select>
					</div>
				</fieldset>
				<button className="form__submitButton" type="submit" form='addForm' onClick={handleSubmit(onSubmit)}>
					Submit
				</button>
			</form>
			{isPopupOpen ? (
				<div className="formPopup">
					<div className="container">
						<h1 className="formPopup__heading">Thank you for your request!</h1>
						<p className="formPopup__text">We will inform you as soon as the movie will be available.</p>
						<button className="formPopup__button">
							<Link to="/">
								Go to main page
							</Link>
						</button>
					</div>
				</div>
			) : null}
      </FormProvider>
		</>
	);
};

export default Form;

import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import Input from "./Input";
import { postNewWishlistItem } from "../../firebase/service";
import { useDispatch } from "react-redux";
import { addWishlistItem, setModalState } from "../../store/videosSlice";
import AcceptPopup from "../UI/AcceptPopup";

//form is used to add an item to a wishlist
const Form = () => {

  const currentYear = new Date().getFullYear()
  const dispatch = useDispatch()

  const validationSchema = yup
  .object({
    email: yup.string().email('invalid email').required('required'),
    title: yup.string().max(40, 'max 40 characters').required('required'),
    genre: yup.string(),
    category: yup.string().max(40, 'max 40 characters'),
    year: yup.number().typeError('only integer').positive('only positive').max(currentYear, `can't exeed ${currentYear}`)
  })
  .required();

	const formData = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email : '',
      title : '',
      category: 'movie',
      genre : "don't know",
      year : currentYear
    }
  });

  const {handleSubmit, register} = formData;
	const [isMessageOpen, setIsMessageOpen] = useState(false);

	const onSubmit = async (data) => {
    const postData = {...data, timestamp: new Date().getTime()}
		setIsMessageOpen(true)
		//timeout is needed to automatically close popup
		setTimeout(() => {
			setIsMessageOpen(false)
			dispatch(setModalState())
		}, 2000)
		dispatch(addWishlistItem(data))
    await postNewWishlistItem(postData)
  };

	return (
		<>
    	<FormProvider {...formData}>
			{!isMessageOpen ? <form  className="addForm" id="addForm">
				<legend className="form__legend">Add your film to a wishlist</legend>
				<fieldset className="addForm__fieldset">
					<label htmlFor='email' className="form__label">Your email: </label>
					<div className="form__field form__email">
						<Input inputType={'email'} inputName={'email'}/>
					</div>
				</fieldset>
				<fieldset className="addForm__fieldset">
					<label>Movie/TV Series Info</label>
					<div className="form__field">
            <Input inputType={'text'} inputName={'title'}/>
					</div>
					<div className="form__field">
            <Input inputType={'number'} inputName={'year'}/>
					</div>
			
					<div className="form__field">
					<label className="form__label">Choose genre and category: </label>
					<select className="form__input form__input_category" id="category" type="text" {...register("category")}>
            <option value="don't know">movie</option>
              <option value="action">tv series</option>
							<option value="fantasy">cartoon</option>
							<option value="drama">other</option>
						</select>

			
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
			</form> : <AcceptPopup text={'request'}/>}
      </FormProvider>
		</>
	);
};

export default Form;

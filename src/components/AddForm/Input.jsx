import React from "react";
import { useFormContext } from "react-hook-form";

const Input = ({ inputType, inputName, required }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<>
			<input className="form__input" 
             id={inputName} 
             type={inputType} 
             placeholder={inputName} 
             {...register(inputName)} />
			{required && <span>{errors[inputName]?.message}</span>}
		</>
	);
};

export default Input;

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
						 name={inputName}
             type={inputType} 
             placeholder={inputName} 
             {...register(inputName)} />
			{required && <span role='alert'>{errors[inputName]?.message}</span>}
		</>
	);
};

export default Input;

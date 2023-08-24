import React from "react";
import { useFormContext } from "react-hook-form";

const Input = ({ inputType, inputName }) => {
	
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<>
			<input className="form__input" 
             id={inputName} 
						 aria-label={inputName}
             type={inputType} 
             placeholder={inputName} 
             {...register(inputName)} />
			{errors[inputName] && <span role='alert'>{errors[inputName]?.message}</span>}
		</>
	);
};

export default Input;

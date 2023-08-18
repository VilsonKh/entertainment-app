import { useWatch } from "react-hook-form";

const TextAreaInput = ({ rowsQuantity, register, errors, control}) => {
	const errorIndicator = errors["commentText"] ? "true" : "false";
	const textarea = useWatch({
		control,
		name: 'commentText'
	})
	return (
		<div className="reviewForm__textareaGroup" aria-invalid={errorIndicator}>
			<textarea
				className="reviewForm__input reviewForm__message"
				rows={rowsQuantity}
				wrap="soft"
				placeholder="Type here your review"
				{...register("commentText", {
					required: "required",
					maxLength: {
						value: 1000,
					}
				})}
			/>
			<span className="reviewForm__counter" style={textarea && textarea.length > 1000 ? {color: '#fc4747'} : null}>{`${(textarea && textarea.length) || 0}/1000`}</span>
		</div>
	);
};

export default TextAreaInput;

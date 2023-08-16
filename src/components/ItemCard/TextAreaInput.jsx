const TextAreaInput = ({ rowsQuantity, register, errors, setCharLength, charLength }) => {
	const errorIndicator = errors["message"] ? "true" : "false";

	return (
		<div className="reviewForm__textareaGroup" aria-invalid={errorIndicator}>
			<textarea
				className="reviewForm__input reviewForm__message"
				rows={rowsQuantity}
				wrap="soft"
				placeholder="Type here your review"
				maxLength={1000}
				onInput={(e) => setCharLength(e.target.value.length)}
				{...register("message", {
					required: "required",
				})}
			/>
			<span className="reviewForm__counter">{`${charLength}/1000`}</span>
		</div>
	);
};

export default TextAreaInput;

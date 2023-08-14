import React, { useState } from "react";

const TextAreaInput = ({ rowsQuantity, register, errors}) => {

  const [charLength, setCharLength] = useState(0)


	const errorIndicator = errors?.['name'] ? "true" : "false";

	return (
		<div className="itemCard__textareaGroup" aria-invalid={errorIndicator}>
			<textarea className="itemCard__input itemCard__message" rows={rowsQuantity} wrap="soft" placeholder="Type here your review" maxLength={1000} onInput={(e) => setCharLength(e.target.value.length)}
      {...register('message', {
        required: 'required'
      })}
      />
			<span className="itemCard__counter">{`${charLength}/1000`}</span>
		</div>
	);
};

export default TextAreaInput;

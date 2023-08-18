import React, { useState } from "react";
import "./CollapseText.scss";
const CollapseText = ({ name, message }) => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<div className="review__item" >
			<p className="review__name">{name}</p>
			<p className="review__text" aria-hidden={isCollapsed}>
				{message}
			</p>

			<button className="review__collapseButton" 
							onClick={() => setIsCollapsed(!isCollapsed)} 
							//357 approximate number of characters equal to 4 rows
							style={{display: `${message.length > 357 ? 'flex' : 'none'}`}}>
				Show more <p className={`review__collapseIcon ${isCollapsed ? "open" : null}`}>&#709;</p>
			</button>
		</div>
	);
};

export default CollapseText;

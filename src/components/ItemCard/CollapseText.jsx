import React, { useState } from "react";
import "./CollapseText.scss";
const CollapseText = ({ name, commentText }) => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	return (
		<div className="review__item" >
			<p className="review__name">{name}</p>
			<p className="review__text" aria-hidden={isCollapsed}>
				{commentText}
			</p>


			<button className="review__collapseButton" 
							onClick={() => setIsCollapsed(!isCollapsed)} 
							//357 approximate number of characters equal to 4 rows
							style={{display: `${commentText.length > 357 ? 'flex' : 'none'}`}}>
				Show more <p className={`review__collapseIcon ${isCollapsed ? "open" : null}`}>&#709;</p>
			</button>
		</div>
	);
};

export default CollapseText;

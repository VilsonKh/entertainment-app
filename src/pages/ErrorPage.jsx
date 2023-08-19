import { Link } from "react-router-dom";
import errorImage from "../assets/404-image.svg";
import "./ErrorPage.scss";

const ErrorPage = () => {
	return (
		<div className="errorPage">
			<div className="errorPage__404">
				<div className="errorPage__number">4</div>
				<img className="errorPage__img" src={errorImage} alt="error" />
				<div className="errorPage__number">4</div>
			</div>
			<div>
				<i className="errorPage__text">"-Where is-Where is the intercom?"</i>
        <Link className="errorPage__button" to='/'> GO TO MAIN</Link>
			</div>
		</div>
	);
};

export default ErrorPage;

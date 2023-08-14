import acceptIcon from "../../assets/accept-icon.svg";
import "./AcceptPopup.scss";
const AcceptPopup = ({text}) => {
	return (
		<div className="acceptPopup">
			<div className="acceptPopup__container">
				<img className="acceptPopup__icon" src={acceptIcon} alt="accept-icon" />
				<p className="acceptPopup__message">{`Your ${text} was submited!`}</p>
			</div>
		</div>
	);
};

export default AcceptPopup;

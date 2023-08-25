import "./Header.scss";

import logo from "../../assets/logo.svg";
import logoBig from "../../assets/logoBig.svg";
import AddButton from "../UI/AddButton";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import {tabWidth} from '../const';
import  ExternalImage from '../UI/ExternalImage'
const chooseIcon = (small, big) => {
	return window.screen.width > tabWidth ? big : small;
};

const svgSize =  window.screen.width > tabWidth ? '20' : "16"

const Header = () => {

	const navigate = useNavigate()
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__logo" onClick={() => navigate('/') }>
					<img src={chooseIcon(logo, logoBig)} alt="logo" />
				</div>
				<div className="header__navigation">
					<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
						<svg width={svgSize} height={svgSize}  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0.8 0H6.4C6.88 0 7.2 0.32 7.2 0.8V6.4C7.2 6.88 6.88 7.2 6.4 7.2H0.8C0.32 7.2 0 6.88 0 6.4V0.8C0 0.32 0.32 0 0.8 0ZM0.8 8.8H6.4C6.88 8.8 7.2 9.12 7.2 9.6V15.2C7.2 15.68 6.88 16 6.4 16H0.8C0.32 16 0 15.68 0 15.2V9.6C0 9.12 0.32 8.8 0.8 8.8ZM15.2 0H9.6C9.12 0 8.8 0.32 8.8 0.8V6.4C8.8 6.88 9.12 7.2 9.6 7.2H15.2C15.68 7.2 16 6.88 16 6.4V0.8C16 0.32 15.68 0 15.2 0ZM9.6 8.8H15.2C15.68 8.8 16 9.12 16 9.6V15.2C16 15.68 15.68 16 15.2 16H9.6C9.12 16 8.8 15.68 8.8 15.2V9.6C8.8 9.12 9.12 8.8 9.6 8.8Z"
								fill="#5A698F"
							/>
						</svg>
					</NavLink>
					<NavLink data-testid='movieLink' to="/movies" className={({ isActive }) => (isActive ? "active" : "")}>
						<svg width={svgSize} height={svgSize} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M13.5644 0H2.43556C1.09044 0 0 1.09044 0 2.43556V13.5644C0 14.9096 1.09044 16 2.43556 16H13.5644C14.2104 16 14.8299 15.7434 15.2866 15.2866C15.7434 14.8299 16 14.2104 16 13.5644V2.43556C16 1.78961 15.7434 1.17011 15.2866 0.713358C14.8299 0.256602 14.2104 0 13.5644 0ZM3.2 7.2H1.6V5.6H3.2V7.2ZM3.2 8.8H1.6V10.4H3.2V8.8ZM14.4 7.2H12.8V5.6H14.4V7.2ZM14.4 8.8H12.8V10.4H14.4V8.8ZM14.4 2.192V3.2H12.8V1.6H13.808C13.965 1.6 14.1156 1.66237 14.2266 1.77339C14.3376 1.88441 14.4 2.03499 14.4 2.192ZM3.2 1.6H2.192C2.03499 1.6 1.88441 1.66237 1.77339 1.77339C1.66237 1.88441 1.6 2.03499 1.6 2.192V3.2H3.2V1.6ZM1.6 13.808V12.8H3.2V14.4H2.192C2.03499 14.4 1.88441 14.3376 1.77339 14.2266C1.66237 14.1156 1.6 13.965 1.6 13.808ZM12.8 14.4H13.808C14.135 14.4 14.4 14.135 14.4 13.808V12.8H12.8V14.4Z"
								fill="#5A698F"
							/>
						</svg>
					</NavLink>
					<NavLink to="/tvseries" className={({ isActive }) => (isActive ? "active" : "")}>
						<svg width={svgSize} height={svgSize} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M7.264 3.58487H16V16H0V3.58487H3.936L1.776 0.962173L3.024 0.0232784L5.6 3.12706L8.176 0L9.424 0.962173L7.264 3.58487ZM1.6 14.4481H9.6V5.13676H1.6V14.4481ZM13.6 11.3443H12V9.79243H13.6V11.3443ZM12 8.24054H13.6V6.68865H12V8.24054Z"
								fill="#5A698F"
							/>
						</svg>
					</NavLink>
					<NavLink to="/bookmarks" className={({ isActive }) => (isActive ? "active" : "")}>
						<svg width={svgSize} height={svgSize} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12.3093 0C12.4715 0 12.6266 0.031725 12.7746 0.0951751C13.0073 0.186825 13.1923 0.331351 13.3298 0.528751C13.4673 0.726151 13.536 0.944701 13.536 1.1844V14.8156C13.536 15.0553 13.4673 15.2738 13.3298 15.4712C13.1923 15.6686 13.0073 15.8132 12.7746 15.9048C12.6407 15.9612 12.4856 15.9894 12.3093 15.9894C11.9709 15.9894 11.6783 15.8766 11.4316 15.651L6.76801 11.1672L2.10443 15.651C1.85063 15.8837 1.55805 16 1.2267 16C1.06455 16 0.909451 15.9683 0.761401 15.9048C0.528751 15.8132 0.343688 15.6686 0.206213 15.4712C0.0687376 15.2738 0 15.0553 0 14.8156V1.1844C0 0.944701 0.0687376 0.726151 0.206213 0.528751C0.343688 0.331351 0.528751 0.186825 0.761401 0.0951751C0.909451 0.031725 1.06455 0 1.2267 0H12.3093Z"
								fill="#5A698F"
							/>
						</svg>
					</NavLink>
					<NavLink to="/wishlist" className={({ isActive }) => (isActive ? "active" : "")}>
						{/* <svg width={svgSize} height={svgSize} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12.3093 0C12.4715 0 12.6266 0.031725 12.7746 0.0951751C13.0073 0.186825 13.1923 0.331351 13.3298 0.528751C13.4673 0.726151 13.536 0.944701 13.536 1.1844V14.8156C13.536 15.0553 13.4673 15.2738 13.3298 15.4712C13.1923 15.6686 13.0073 15.8132 12.7746 15.9048C12.6407 15.9612 12.4856 15.9894 12.3093 15.9894C11.9709 15.9894 11.6783 15.8766 11.4316 15.651L6.76801 11.1672L2.10443 15.651C1.85063 15.8837 1.55805 16 1.2267 16C1.06455 16 0.909451 15.9683 0.761401 15.9048C0.528751 15.8132 0.343688 15.6686 0.206213 15.4712C0.0687376 15.2738 0 15.0553 0 14.8156V1.1844C0 0.944701 0.0687376 0.726151 0.206213 0.528751C0.343688 0.331351 0.528751 0.186825 0.761401 0.0951751C0.909451 0.031725 1.06455 0 1.2267 0H12.3093Z"
								fill="#5A698F"
							/>
						</svg> */}
						<svg xmlns="http://www.w3.org/2000/svg" width={svgSize} viewBox="0 0 112.83 122.88" fill-rule="evenodd">
							<path fill="#5A698F" d="M103.3,34.19l8.23,3.52a2.15,2.15,0,0,1,1.13,2.82l-2,4.56L98.53,39.88l2-4.56a2.15,2.15,0,0,1,2.82-1.13ZM8.88,7.88h8.19V2.73a2.74,2.74,0,0,1,5.47,0V7.88h12V2.73a2.73,2.73,0,1,1,5.46,0V7.88H52V2.73a2.73,2.73,0,0,1,5.46,0V7.88h12V2.73a2.73,2.73,0,0,1,5.46,0V7.88h9.27a8.91,8.91,0,0,1,8.88,8.88V28.54a12.27,12.27,0,0,0-1.76,2.9l-2,4.56A10,10,0,0,0,89,37.16a11.24,11.24,0,0,0-.58,1.15l-.6,1.4V16.76a3.6,3.6,0,0,0-3.58-3.58H75v5.15a2.73,2.73,0,0,1-5.46,0V13.18h-12v5.15a2.73,2.73,0,0,1-5.46,0V13.18H40v5.15a2.73,2.73,0,1,1-5.46,0V13.18h-12v5.15a2.74,2.74,0,0,1-5.47,0V13.18H8.88A3.58,3.58,0,0,0,5.3,16.76v92a3.6,3.6,0,0,0,3.58,3.59H59.16l.56,5.29H8.88A8.89,8.89,0,0,1,0,108.77v-92A8.91,8.91,0,0,1,8.88,7.88ZM20.34,94.35a2.65,2.65,0,0,1,0-5.3H66.72l-2.27,5.3Zm0-17.48a2.65,2.65,0,0,1,0-5.3H72.78a2.52,2.52,0,0,1,1.27.35l-2.12,5Zm0-17.48a2.65,2.65,0,0,1,0-5.3H72.78a2.65,2.65,0,0,1,0,5.3Zm0-17.48a2.65,2.65,0,0,1,0-5.3H72.78a2.65,2.65,0,0,1,0,5.3ZM81,114.6l-6.19,5c-4.85,3.92-4.36,5.06-5-.88l-1-9.34h0L97.54,42.18l12.18,5.22L81,114.6Zm-10.09-4.31,8,3.42L74.82,117c-3.19,2.58-2.87,3.32-3.28-.57l-.66-6.14Z"/>
							</svg>
					</NavLink>
					<AddButton/>
				</div>
				
				<div className="header__avatar">
					{/* <img src={gigachad} alt="" /> */}
					<ExternalImage thumbnail={'https://firebasestorage.googleapis.com/v0/b/entertainment-app-1d1e2.appspot.com/o/gigachad.webp?alt=media&token=dd822f96-70a0-49a0-9c76-8ba72312fe32'}/>
				</div>
			</div>
		</header>
	);
}

export default Header;

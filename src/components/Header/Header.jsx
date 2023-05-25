import "./Header.scss";

import logo from "../../assets/logo.svg";
import logoBig from "../../assets/logoBig.svg";
import mainTab from "../../assets/mainTab.svg";
import mainTabBig from "../../assets/mainTabBig.svg";
import moviesTab from "../../assets/moviesTab.svg";
import moviesTabBig from "../../assets/moviesTabBig.svg";
import serialsTab from "../../assets/serialsTab.svg";
import serialsTabBig from "../../assets/serialsTabBig.svg";
import bookmarkTab from "../../assets/bookmarkTab.svg";
import bookmarkTabBig from "../../assets/bookmarkTabBig.svg";
import wishlistTab from "../../assets/wishlistTab.svg";
import avatar from "../../assets/avatar.jpg";

import { NavLink, Navlink } from "react-router-dom";

const chooseIcon =(small,big)=> { return window.screen.width > "767" ? big : small}

const Header = () => {
	return (
		<header className="header">
			<div className="container d-flex align-items-center justify-content-between">
				<div className="header__logo">
					<img src={chooseIcon(logo,logoBig)} alt="" />
				</div>
				<div className="header__navigation">
					<NavLink to="/" className="">
						{({ isActive }) => <img src={chooseIcon(mainTab,mainTabBig)} alt="" className={isActive ? "active" : ""} />}
					</NavLink>
					<NavLink to="/movies">
          {({ isActive }) => <img src={chooseIcon(moviesTab,moviesTabBig)} alt="" className={isActive ? "active" : ""} />}
          </NavLink>
					<NavLink to="/serials">
          {({ isActive }) => <img src={chooseIcon(serialsTab,serialsTabBig)} alt="" className={isActive ? "active" : ""} />}
          </NavLink>
					<NavLink to="/bookmarks">
          {({ isActive }) => <img src={chooseIcon(bookmarkTab,bookmarkTabBig)} alt="" className={isActive ? "active" : ""} />}
          </NavLink>
					{/* <NavLink to="/wishlist">
          {({ isActive }) => <div><img src={wishlistTab} alt="" className={isActive ? "active" : ""} /></div>}
          </NavLink> */}
				</div>
        <div className="header__avatar">
          <img src={avatar} alt="" />
        </div>
			</div>
		</header>
	);
};

export default Header;

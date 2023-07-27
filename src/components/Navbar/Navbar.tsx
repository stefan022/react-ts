import React, { useContext } from "react";

import ContentMiddle from "../../content/ContentMiddle";

import { BsCart3, BsInbox } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Routes } from "../../router/Routes";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import ProfileDropdown from "../Profile/ProfileDropdown/ProfileDropdown";
import { IProfileDropdownContext } from "../../ts/interfaces/IProfileDropdownContext";
import { ProfileDropdownContext } from "../../context/ProfileDropdownContext";

const Navbar = () => {
	const { isActive, setIsActive } = useContext(ProfileDropdownContext as React.Context<IProfileDropdownContext>);

	const handleHideProfileDropdown = () => setIsActive(false);

	return (
		<ContentMiddle>
			<div className="flex justify-between items-center border border-gray-400 relative">
				<Logo/>
				<Navigation/>
				<div className="flex items-center gap-2">
					<Link
						to={Routes.MESSAGES} 
						className="hover:bg-gray-100 w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer"
						onMouseEnter={handleHideProfileDropdown}
					>
						<BsInbox size={20} color="gray"/>
					</Link>
					<Link 
						to={Routes.CART} 
						className="hover:bg-gray-100 w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer"
						onMouseEnter={handleHideProfileDropdown}
					>
						<BsCart3 size={20} color="gray" />
					</Link>
					<ProfileDropdown/>
				</div>
			</div>
		</ContentMiddle>
	);
};

export default Navbar;

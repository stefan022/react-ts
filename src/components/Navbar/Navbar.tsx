import React, { useState } from "react";

import ContentMiddle from "../../content/ContentMiddle";

import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Routes } from "../../router/Routes";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

const Navbar = () => {
	const [profileDropdownActive, setProfileDropdownActive] = useState<boolean>(false);

	const handleDisplayProfileDropdown = () => setProfileDropdownActive(true);
	const handleHideProfileDropdown = () => setProfileDropdownActive(false);

	return (
		<ContentMiddle>
			<div className="flex justify-between items-center border border-gray-400 relative">
				<Logo/>
				<Navigation/>
				<div className="flex items-center gap-4">
					<div>
						<BsCart3 size={20} color="gray" />
					</div>
					<div 
						onMouseEnter={handleDisplayProfileDropdown}
						className="w-[40px] h-[40px] border border-gray-600 rounded-full relative"
					>
						<div 
							onMouseLeave={handleHideProfileDropdown}
							className={`${profileDropdownActive ? "" : "hidden"} border border-gray-400 z-10 absolute top-14 right-0 bg-white py-4 px-8`}
						>
							<ul>
								<li>Dashboard</li>
								<li><Link to={Routes.PROFILE}>Profile</Link></li>
								<li><Link to={`${Routes.PROFILE}${Routes.WISHLIST}`}>Wishlist</Link></li>
								<li>Orders</li>
								<li>Settings</li>
								<li>Logout</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</ContentMiddle>
	);
};

export default Navbar;

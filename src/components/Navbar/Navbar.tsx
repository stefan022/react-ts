import React, { useState } from "react";

import ContentMiddle from "../../content/ContentMiddle";

import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Routes } from "../../router/Routes";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import ProfileDropdown from "../Profile/ProfileDropdown/ProfileDropdown";

const Navbar = () => {
	return (
		<ContentMiddle>
			<div className="flex justify-between items-center border border-gray-400 relative">
				<Logo/>
				<Navigation/>
				<div className="flex items-center gap-4">
					<div>
						<BsCart3 size={20} color="gray" />
					</div>
					<ProfileDropdown/>
				</div>
			</div>
		</ContentMiddle>
	);
};

export default Navbar;

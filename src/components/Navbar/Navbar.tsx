import React, { useContext, Context } from "react";

import logo from "../../assets/logo.png";
import ContentMiddle from "../../content/ContentMiddle";
import ContentFull from "../../content/ContentFull";

import { BsCart3 } from "react-icons/bs";
import { IProfileDropdownContext } from "../../ts/interfaces/IProfileDropdownContext";

const Navbar = () => {
	return (
		<ContentFull>
			<ContentMiddle>
				<div className="flex justify-between items-center border border-gray-400 relative">
					<div>
						<img src={logo} alt="logo.png" />
					</div>
					<nav>
						<ul className="flex gap-5">
							<li>Home</li>
							<li>Products</li>
							<li>Blogs</li>
							<li>FAQ</li>
							<li>Support</li>
						</ul>
					</nav>
					<div className="flex items-center gap-4">
						<div>
							<BsCart3 size={20} color="gray" />
						</div>
						<div 
							className="w-[40px] h-[40px] border border-gray-600 rounded-full relative"
							>
						</div>
					</div>
				</div>
			</ContentMiddle>
		</ContentFull>
	);
};

export default Navbar;

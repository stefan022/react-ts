import React, { useState } from "react";

import Container from "../../containers/Container/Container";

import { BsCart3, BsInbox, BsChatSquareDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Routes } from "../../router/Routes";
import { CartSidebar, CartOverlay, Logo, Navigation, ProfileDropdown } from "../../components";

const Navbar = () => {
	const [ profileDropdown, setProfileDropdown ] = useState<boolean>(false);
	const [ displayCart, setDisplayCart ] = useState<boolean>(false);

	const handleHideProfileDropdown = () => setProfileDropdown(false);
	const handleDisplayProfileDropdown = () => setProfileDropdown(true);

	const handleDisplayCart = () => setDisplayCart(!displayCart);
	const handleHideCart = () => setDisplayCart(!displayCart);

	return (
		<div>
			<Container>
				<div className="flex justify-between items-center border border-gray-400 relative">
					<Logo/>
					<Navigation/>
					<div className="flex items-center gap-2">
						<Link
							to={Routes.CHAT} 
							className="hover:bg-gray-100 w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer"
							onMouseEnter={handleHideProfileDropdown}
						>
							<BsChatSquareDots size={20} color="gray"/>
						</Link>
						<Link
							to={Routes.MESSAGES} 
							className="hover:bg-gray-100 w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer"
							onMouseEnter={handleHideProfileDropdown}
						>
							<BsInbox size={20} color="gray"/>
						</Link>
						<div 
							className="hover:bg-gray-100 w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer"
							onMouseEnter={handleHideProfileDropdown}
							onClick={handleDisplayCart}
						>
							<BsCart3 size={20} color="gray" />
						</div>
						<ProfileDropdown
							profileDropdown={profileDropdown}
							handleHideProfileDropdown={handleHideProfileDropdown}
							handleDisplayProfileDropdown={handleDisplayProfileDropdown}
						/>
					</div>
				</div>
			</Container>
			<CartSidebar
				displayCart={displayCart}
				handleHideCart={handleHideCart}
			/>
			<CartOverlay
				displayCart={displayCart}
				handleHideCart={handleHideCart}
			/>
		</div>
	);
};

export default Navbar;

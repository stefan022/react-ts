import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../../router/Routes";

const ProfileHeader = () => {
	return (
		<div className="flex justify-between items-center">
			<div className="flex items-center">
				<div className="w-[100px] h-[100px] rounded-full border border-gray-700 relative z-10 bg-white -top-8"></div>
				<div className="ml-2">
					<p>First Name / Last Name</p>
				</div>
			</div>
			<div className="flex items-center">
				<Link to={Routes.DASHBOARD}>
					<button className="bg-red-400 hover:bg-red-500 py-1 px-3 rounded-lg text-white">
						Dashboard
					</button>
				</Link>
				<button className="ml-2 bg-green-400 hover:bg-green-500 py-1 px-3 rounded-lg text-white">
					Shopping Now
				</button>
			</div>
		</div>
	);
};

export default ProfileHeader;

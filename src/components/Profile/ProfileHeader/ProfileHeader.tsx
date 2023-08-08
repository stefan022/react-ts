import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../../router/Routes";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

const ProfileHeader = () => {
	return (
		<div className="flex justify-between items-center">
			<div className="flex items-center">
				<ProfilePicture/>
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

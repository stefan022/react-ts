import React, { FC, useContext, Context } from "react";

import { Link } from "react-router-dom";
import { Routes } from "../../../router/Routes";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import DarkThemeContext from "../../../context/ThemeContext";
import { IDarkThemeContext } from "../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext";

const ProfileHeader: FC = (): JSX.Element => {
	const token = localStorage.getItem("token");
	const checkToken = token === process.env.REACT_APP_ADMIN_TOKEN ? true : false;

	const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

	return (
		<div className="flex justify-between items-center">
			<div className="flex items-center">
				<ProfilePicture/>
				<div className="ml-2">
					<p>First Name / Last Name</p>
				</div>
			</div>
			<div className="flex items-center">
				{
					checkToken && (
						<Link to={Routes.DASHBOARD}>
							<button className={`
								${ darkTheme ? "bg-gray-700 hover:bg-gray-800" : "bg-red-400 hover:bg-red-500" }
								 py-1 px-3 rounded-lg text-gray-100 transition-all
								
							`}>
								Dashboard
							</button>
						</Link>
					)
				}
				<button 
					className={`
						${ darkTheme ? "bg-green-700 hover:bg-green-800" : "bg-green-400 hover:bg-green-500" }
						ml-2 py-1 px-3 rounded-lg text-white
					`}
				>
					Shopping Now
				</button>
			</div>
		</div>
	);
};

export default ProfileHeader;

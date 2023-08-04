import React, { useEffect, Fragment, MouseEventHandler } from "react";
import { Link, useNavigate } from "react-router-dom";
import { profileData } from "../profileData";
import { Routes } from "../../../router/Routes";
import { toast } from "react-toastify";

interface IProps {
    profileDropdown: boolean;
    handleHideProfileDropdown: MouseEventHandler<HTMLDivElement>;
    handleDisplayProfileDropdown: MouseEventHandler<HTMLDivElement>;
}

const ProfileDropdown = ({ profileDropdown, handleHideProfileDropdown, handleDisplayProfileDropdown }: IProps) => {
    const navigate = useNavigate();

    const handleLogout = () => { 
        localStorage.removeItem("token");
        localStorage.removeItem("userId");

        navigate(Routes.LOGIN);
        toast.success("You have successfully logged out");
    };

	return (
		<div 
            onMouseEnter={handleDisplayProfileDropdown}
            className="w-[40px] h-[40px] border border-gray-600 rounded-full relative"
        >
            <div 
                onMouseLeave={handleHideProfileDropdown}
                className={`${profileDropdown ? "" : "hidden"} border border-gray-400 z-10 absolute top-14 right-0 bg-white py-4 px-8`}
            >
                <ul>
                    {
                        profileData.map((data) => {
                            const { id, route, text } = data;

                            return (
                                <Fragment key={id}>
                                    <Link to={route}>
                                        <li>{text}</li>
                                    </Link>
                                </Fragment>
                            )
                        })
                    }
                    <button className="bg-blue-400 py-1 px-3" onClick={handleLogout}>Logout</button>
                </ul>
            </div>
        </div>
	);
};

export default ProfileDropdown;

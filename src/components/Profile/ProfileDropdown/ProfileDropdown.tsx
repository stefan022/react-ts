import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { profileData } from "../profileData";
import { ProfileDropdownContext } from "../../../context/ProfileDropdownContext";
import { IProfileDropdownContext } from "../../../ts/interfaces/IProfileDropdownContext";

const ProfileDropdown = () => {
    const { isActive, setIsActive } = useContext(ProfileDropdownContext as React.Context<IProfileDropdownContext>);

	const handleDisplayProfileDropdown = () => setIsActive(true);
	const handleHideProfileDropdown = () => setIsActive(false);

	return (
		<div 
            onMouseEnter={handleDisplayProfileDropdown}
            className="w-[40px] h-[40px] border border-gray-600 rounded-full relative"
        >
            <div 
                onMouseLeave={handleHideProfileDropdown}
                className={`${isActive ? "" : "hidden"} border border-gray-400 z-10 absolute top-14 right-0 bg-white py-4 px-8`}
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
                    <li>Logout</li>
                </ul>
            </div>
        </div>
	);
};

export default ProfileDropdown;

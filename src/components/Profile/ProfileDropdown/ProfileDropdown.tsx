import React, { MouseEventHandler } from "react";

import { NavbarProfilePicture, ProfileNavigation } from "../../../components"
import "./ProfileDropdown.scss";

interface IProps {
    profileDropdown: boolean;
    handleHideProfileDropdown: MouseEventHandler<HTMLDivElement>;
    handleDisplayProfileDropdown: MouseEventHandler<HTMLDivElement>;
}

const ProfileDropdown = ({ profileDropdown, handleHideProfileDropdown, handleDisplayProfileDropdown }: IProps) => {
	return (
        <>
		    <NavbarProfilePicture
                handleDisplayProfileDropdown={handleDisplayProfileDropdown}
            />
            <div 
                onMouseLeave={handleHideProfileDropdown}
                className={`${profileDropdown ? "" : "hidden"} profile__dropdown`}
            >
                <ProfileNavigation profileType="dropdown"/>
            </div>
        </>
	);
};

export default ProfileDropdown;

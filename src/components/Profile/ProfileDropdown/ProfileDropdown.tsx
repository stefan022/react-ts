import React, { FC, MouseEventHandler } from "react";

import { NavbarProfilePicture, ProfileNavigation } from "../../../components"
import "./ProfileDropdown.scss";

interface IProps {
    profileDropdown: boolean;
    handleHideProfileDropdown: MouseEventHandler<HTMLDivElement>;
    handleDisplayProfileDropdown: MouseEventHandler<HTMLDivElement>;
}

const ProfileDropdown: FC<IProps> = ({ profileDropdown, handleHideProfileDropdown, handleDisplayProfileDropdown }): JSX.Element => {
	return (
        <>
		    <NavbarProfilePicture
                handleDisplayProfileDropdown={handleDisplayProfileDropdown}
            />
            <div 
                onMouseLeave={handleHideProfileDropdown}
                className={`${profileDropdown ? "opacity-100" : "opacity-0"} profile__dropdown`}
            >
                <div className='profile__dropdown-tooltip'></div>
                <ProfileNavigation profileType="dropdown"/>
            </div>
        </>
	);
};

export default ProfileDropdown;

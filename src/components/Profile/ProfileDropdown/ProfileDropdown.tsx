import React, { MouseEventHandler } from "react";

import { ProfileNavigation } from "../../../components"
import "./ProfileDropdown.scss";

interface IProps {
    profileDropdown: boolean;
    handleHideProfileDropdown: MouseEventHandler<HTMLDivElement>;
    handleDisplayProfileDropdown: MouseEventHandler<HTMLDivElement>;
}

const ProfileDropdown = ({ profileDropdown, handleHideProfileDropdown, handleDisplayProfileDropdown }: IProps) => {
	return (
		<div 
            onMouseEnter={handleDisplayProfileDropdown}
            className="w-[40px] h-[40px] border border-gray-600 rounded-full relative"
        >
            <div 
                onMouseLeave={handleHideProfileDropdown}
                className={`${profileDropdown ? "" : "hidden"} profile__dropdown`}
            >
                <ProfileNavigation profileType="dropdown"/>
            </div>
        </div>
	);
};

export default ProfileDropdown;

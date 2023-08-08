import React from 'react'

import { ProfileNavigation } from "../../../components"
import "./ProfileSidebar.scss";

const ProfileSidebar = () => {
    return (
        <div className="profile__sidebar">
            <ProfileNavigation profileType="sidebar"/>
        </div>
    )
}

export default ProfileSidebar
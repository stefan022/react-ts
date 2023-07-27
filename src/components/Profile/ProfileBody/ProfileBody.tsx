import React, { ReactNode } from 'react'
import ProfileSidebar from '../ProfileSidebar/ProfileSidebar'
import { ProfileInfo } from '../../../pages'

interface IProps {
    children?: ReactNode;
}

const ProfileBody = ({ children }: IProps) => {
    return (
        <div className="flex w-full">
            <ProfileSidebar/>
            <div className="border border-gray-400 w-5/6 p-4">
                {children ? children : <ProfileInfo/>}
            </div>
        </div>
    )
}

export default ProfileBody
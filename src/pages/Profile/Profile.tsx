import React, { ReactNode } from 'react'
import ContentMiddle from '../../content/ContentMiddle'
import { Banner, ProfileBody, ProfileHeader } from '../../components';

import profile from "../../assets/profile.jpg";

interface IProps {
    children?: ReactNode
}

const Profile = ({ children }: IProps) => {
    return (
        <div>
            <Banner
                title="Account Information"
                bgPosition="bg-bottom"
                image={profile}
            />
            <ContentMiddle>
                <ProfileHeader/>
                <ProfileBody
                    children={children}
                />
            </ContentMiddle>
        </div>
    )
}

export default Profile
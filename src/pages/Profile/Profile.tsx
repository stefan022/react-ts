import React, { ReactNode } from 'react'
import Container from '../../containers/Container/Container'
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
            <Container>
                <ProfileHeader/>
                <ProfileBody
                    children={children}
                />
            </Container>
        </div>
    )
}

export default Profile
import React from 'react'

import { profileData } from '../profileData';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoLogOutOutline } from 'react-icons/io5';
import { Routes } from '../../../router/Routes';
import { toast } from 'react-toastify';

interface IProps {
    profileType: string;
}

const ProfileNavigation = ({ profileType }: IProps) => {
    const navigate = useNavigate();

    const handleLogout = () => { 
        localStorage.removeItem("token");
        localStorage.removeItem("userId");

        navigate(Routes.LOGIN);
        toast.success("You have successfully logged out");
    };

    return (
        <ul>
            {
                profileData.map((data) => {
                    const { id, route, text, icon } = data;

                    return (
                        <li key={id}>
                            <NavLink
                                to={route}
                                end
                            >
                                {({ isActive }) => (
                                    <div className={`
                                        ${isActive && `profile__${profileType}-navigation-active`}
                                        profile__${profileType}-navigation
                                    `}>
                                        <div>{icon}</div>
                                        <p>{text}</p>
                                    </div>
                                )}
                            </NavLink>
                        </li>
                    )
                })
            }
            <li>
                <button className={`profile__${profileType}-navigation`} onClick={handleLogout}>
                    <div><IoLogOutOutline/></div>
                    <p>Logout</p>
                </button>
            </li>
        </ul>
    )
}

export default ProfileNavigation
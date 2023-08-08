import React from 'react'

import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../router/Routes';
import { toast } from 'react-toastify';
import { IoLogOutOutline } from 'react-icons/io5';

interface IProps {
    profileType: string;
}

const LogoutButton: React.FC<IProps> = ({ profileType }): JSX.Element => {
    const navigate = useNavigate();

    const handleLogout = () => { 
        localStorage.removeItem("token");
        localStorage.removeItem("userId");

        navigate(Routes.LOGIN);
        toast.success("You have successfully logged out");
    };

    return (
        <button className={`profile__${profileType}-navigation`} onClick={handleLogout}>
            <div><IoLogOutOutline/></div>
            <p>Logout</p>
        </button>
    )
}

export default LogoutButton
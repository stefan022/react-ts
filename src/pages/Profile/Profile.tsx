import React, { ReactNode } from 'react'
import ContentMiddle from '../../content/ContentMiddle'
import { Link } from 'react-router-dom';
import { Routes } from '../../router/Routes';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileDropdown from '../../components/Profile/ProfileDropdown/ProfileDropdown';
import ProfileSidebar from '../../components/Profile/ProfileSidebar/ProfileSidebar';

interface IProps {
    children?: ReactNode;
}

const Profile = ({ children }: IProps) => {
    return (
        <div>
            <div className='bg-blue-400 h-[150px] w-full flex items-center justify-center'>
                <h2 className="text-2xl text-white">Account Information</h2>
            </div>
            <ContentMiddle>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="w-[100px] h-[100px] rounded-full border border-gray-700 relative z-10 bg-white -top-8"></div> 
                        <div className="ml-2">
                        <p>First Name / Last Name</p>
                    </div>
                    </div>
                    <div className='flex items-center'>
                        <button className="bg-red-400 hover:bg-red-500 py-1 px-3 rounded-lg text-white">Dashboard</button>
                        <button className="ml-2 bg-green-400 hover:bg-green-500 py-1 px-3 rounded-lg text-white">Shopping Now</button>
                    </div>
                </div>
                <div className="flex w-full">
                    <ProfileSidebar/>
                    <div className="border border-gray-400 w-5/6 p-4">
                        {children ? children : <ProfileInfo/>}
                    </div>
                </div>
            </ContentMiddle>
        </div>
    )
}

export default Profile
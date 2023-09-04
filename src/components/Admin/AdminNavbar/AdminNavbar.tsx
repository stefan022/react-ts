import React, { FC } from 'react'

import { IoMdNotificationsOutline } from 'react-icons/io'
import { ThemeToggleSwitch, NavbarProfilePicture } from '../../../components'

interface IProps {
    darkTheme: boolean;
    setDarkTheme: (arg: boolean) => void;
}

const AdminNavbar: FC<IProps> = ({ darkTheme, setDarkTheme }): JSX.Element => {
    const handleChangeTheme = () => setDarkTheme(!darkTheme);

    return (
        <div className={`
            ${ darkTheme ? "bg-gray-900 text-gray-300" : "bg-white text-gray-700" }
            py-5 px-4 flex justify-end items-center gap-2 border border-gray-400
        `}>
            <ThemeToggleSwitch
                darkTheme={darkTheme}
                handleChangeTheme={handleChangeTheme}
            />
            <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 relative -left-1'>
                <IoMdNotificationsOutline color='gray' size={20}/>
            </div>
            <NavbarProfilePicture/>
        </div>
    )
}

export default AdminNavbar
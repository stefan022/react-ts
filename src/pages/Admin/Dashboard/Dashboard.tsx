import React, { FC, ReactNode, useContext, Context } from 'react'

import { AdminNavbar, AdminSidebar, AdminFooter, AdminTitleOfPage } from '../../../components'
import { AdminContainer } from '../../../containers';
import { Overview } from "../../../pages";
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    children?: ReactNode;
    title: string | "";
}

const Dashboard: FC<IProps> = ({ children, title }): JSX.Element => {
    const { darkTheme, setDarkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className='w-full flex relative'>
            <div className='w-2/12 fixed'>
                <AdminSidebar/>
            </div>
            <div className='w-10/12 absolute right-0'>
                <AdminNavbar
                    darkTheme={darkTheme}
                    setDarkTheme={setDarkTheme}
                />
                <AdminContainer>
                    <div>
                        <AdminTitleOfPage title={title}/>
                        {children ? children : <Overview/>}
                    </div>
                    <AdminFooter/>
                </AdminContainer>
            </div>
        </div>
    )
}

export default Dashboard
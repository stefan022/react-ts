import React, { ReactNode } from 'react'
import { AdminNavbar, AdminSidebar, AdminFooter, AdminTitleOfPage } from '../../../components'
import { AdminContainer } from '../../../containers';
import { Overview } from "../../../pages";

interface IProps {
    children?: ReactNode;
    title: string | "";
}

const Dashboard = ({ children, title }: IProps) => {
    return (
        <div className='w-full flex relative'>
            <div className='w-2/12 fixed'>
                <AdminSidebar/>
            </div>
            <div className='w-10/12 absolute right-0'>
                <AdminNavbar/>
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
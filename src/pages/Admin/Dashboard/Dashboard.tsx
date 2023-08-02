import React, { ReactNode } from 'react'
import { AdminNavbar, AdminSidebar } from '../../../components'
import { AdminContainer } from '../../../containers';
import { Overview } from "../../../pages";

interface IProps {
    children?: ReactNode;
}

const Dashboard = ({ children }: IProps) => {
    return (
        <div className='w-full flex'>
            <div className='w-2/12'>
                <AdminSidebar/>
            </div>
            <div className='w-10/12'>
                <AdminNavbar/>
                <AdminContainer>
                    {children ? children : <Overview/>}
                </AdminContainer>
            </div>
        </div>
    )
}

export default Dashboard
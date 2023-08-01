import React, { ReactNode } from 'react'
import { AdminNavbar, AdminSidebar } from '../../../components'
import { AdminContainer } from '../../../containers';
import { Overview } from "../../../pages";

interface IProps {
    children?: ReactNode;
}

const Dashboard = ({ children }: IProps) => {
    return (
        <div>
            <AdminNavbar/>
            <div>
                <AdminSidebar/>
                <AdminContainer>
                    {children ? children : <Overview/>}
                </AdminContainer>
            </div>
        </div>
    )
}

export default Dashboard
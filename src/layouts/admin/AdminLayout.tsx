import React, { ReactNode } from 'react'
import { NotAuthorized } from '../../pages';

interface IProps {
    children: ReactNode
}

const AdminLayout = ({ children }: IProps) => {
    const token = localStorage.getItem("token");

    if (token === process.env.REACT_APP_ADMIN_TOKEN) {
        return <div>{children}</div>
    }

    return <NotAuthorized />
}

export default AdminLayout
import React, { ReactNode } from 'react'

interface IProps {
    children: ReactNode;
}

const AdminContainer = ({ children }: IProps) => {
    return (
        <div>{children}</div>
    )
}

export default AdminContainer
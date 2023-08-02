import React, { ReactNode } from 'react'

interface IProps {
    children: ReactNode;
}

const AdminContainer = ({ children }: IProps) => {
    return (
        <div className='p-4'>{children}</div>
    )
}

export default AdminContainer
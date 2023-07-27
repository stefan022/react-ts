import React, { ReactNode } from 'react'

interface IProps {
    children: ReactNode
}

const AdminLayout = ({ children }: IProps) => {
    return (
        <div>{children}</div>
    )
}

export default AdminLayout
import React, { ReactNode } from 'react'

interface IProps {
    children: ReactNode
}

const PublicLayout = ({ children }: IProps): JSX.Element => {
    return (
        <div>{children}</div>
    )
}

export default PublicLayout
import React, { ReactNode } from 'react'

interface IProps {
    children: ReactNode
}

const ContentMiddle = ({ children }: IProps) => {
    return (
        <div className="w-[1280px] mx-auto relative h-full">
            {children}
        </div>
    )
}

export default ContentMiddle
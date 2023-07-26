import React, { ReactNode } from 'react'

interface IProps {
    children: ReactNode
}

const ContentFull = ({ children }: IProps) => {
  return (
    <div className="w-full border border-gray-300">
        {children}
    </div>
  )
}

export default ContentFull
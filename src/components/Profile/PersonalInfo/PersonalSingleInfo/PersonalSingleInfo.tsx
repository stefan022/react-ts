import React, { FC } from 'react'

interface IProps {
    section: string;
    info: string;
}

const PersonalSingleInfo: FC<IProps> = ({ section, info }): JSX.Element => {
    return (
        <div className='flex w-full'>
            <p className='w-1/2'>{section}:</p>
            <p className='w-1/2'>{info.length > 0 ? info : "/"}</p>
        </div>
    ) 
}

export default PersonalSingleInfo
import React, { FC } from 'react'

interface IProps {
    status: string;
}

const WishlistStatus: FC<IProps> = ({ status }): JSX.Element => {
    return (
        <div className='w-1/12'>
            <p className='text-green-800 bg-green-300 border py-0.5 px-2 rounded-md inline-block'>{status}</p>
        </div>
    )
}

export default WishlistStatus
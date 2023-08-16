import React, { FC } from 'react'

interface IProps {
    image: string;
}

const WishlistImage: FC<IProps> = ({ image }): JSX.Element => {
    return (
        <div className='w-1/12 flex'>
            <div className='h-full w-[75px] p-1'>
                <img className='w-full' src={image} alt="" />
            </div>
        </div>
    )
}

export default WishlistImage
import React, { FC } from 'react'

import sad_face from "../../../assets/sad-face.png";

const MessageEmptyContainer: FC = (): JSX.Element => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-[350px] text-3xl py-6'>
            <img width={150} src={sad_face} alt="" />
            <p className='text-center mt-4'>There are currently no messages <br /> that you have sent to us</p>
        </div>
    )
}

export default MessageEmptyContainer
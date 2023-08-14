import React, { FC } from 'react'

import choose_notification from "../../../assets/choose-notification.png";

const MessageContainerChooseNotification: FC = (): JSX.Element => {
    return (
        <div className='border border-gray-400 h-[350px] w-4/5 flex flex-col justify-center items-center'>
            <img width={150} src={choose_notification} alt="" />
            <h3>Choose your notification</h3> 
        </div>
    )
}

export default MessageContainerChooseNotification
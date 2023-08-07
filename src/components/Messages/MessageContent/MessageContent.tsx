import React from 'react'

import { MessageFrom, MessageTitle, MessageAnswer } from "../../../components"

const MessageContent = () => {
    return (
        <div className='w-4/5 border border-gray-400'>
            <MessageFrom/>
            <div className='p-4 flex flex-col gap-4'>
                <MessageTitle/>
                <MessageAnswer/>
            </div>
        </div>
    )
}

export default MessageContent
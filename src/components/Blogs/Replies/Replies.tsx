import React from 'react'

import { Reply } from "../../../components"

interface IProps {
    replies: { id: number, reply: number }[];
}

const Replies = ({ replies }: IProps) => {
    return (
        <>
            {
                replies.map((reply) => <Reply key={reply.id}/>)
            }
        </>
    )
}

export default Replies
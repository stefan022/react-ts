import React from 'react'

import { Comment } from "../../../components"

interface IProps {
    comments: { id: number, comment: number }[];
}

const Comments = ({ comments }: IProps) => {
    return (
        <>
            {
                comments.map((comment) => <Comment key={comment.id}/>)
            }
        </>
    )
}

export default Comments
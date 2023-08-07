import React from 'react'

import { Comments, Replies } from "../../../components"

interface IProps {
    comments: number;
    replies: number;
}

const Post = ({ comments, replies }: IProps) => {
    return (
        <>
            <div className='border border-gray-400 flex'>
                <div className='w-1/12 border border-gray-400'></div>
                <div className='w-11/12 border border-gray-400 p-4'>
                    <div className='flex justify-between items-center mb-4'>
                        <p>$username</p>
                        <p>Date: $timestamp</p>
                    </div>
                    <div className='mb-4'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, numquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ipsam sint vero velit eum odit ab, neque error illum impedit fugiat modi debitis tempore aut ullam quae tempora, pariatur reiciendis?</p>
                    </div>
                    <div className='flex gap-2'>
                        <div>Likes</div>
                        <div>Comments</div>
                    </div>
                </div>
            </div>
            { comments > 0 ? <Comments comments={[ { id: 1, comment: 1 }, { id: 2, comment: 2 } ]}/> : null }
            { comments > 0 ? <Replies replies={[ { id: 1, reply: 1 } ]}/> : null }
        </>
    )
}

export default Post
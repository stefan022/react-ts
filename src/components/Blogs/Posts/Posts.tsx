import React from 'react'

import { Post } from "../../../components"

const Posts = () => {
    return (
        <>
            <Post
                comments={2}
                replies={1}
            />
            <Post
                comments={0}
                replies={0}
            />
        </>
    )
}

export default Posts
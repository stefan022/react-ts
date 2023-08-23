import React, { FC, useRef, FormEvent } from 'react'

import { PostFormTitle, PostFormField, PostFormTextArea, PostFormButton } from "../../../components"

const PostForm: FC = (): JSX.Element => {
	const titleRef = useRef<HTMLInputElement>(null);
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const handleAddPost = (e: FormEvent<HTMLFormElement>) => e.preventDefault();

    return (
        <form 
			className="w-full p-6 border border-gray-400"
			onSubmit={handleAddPost}
		>
			<PostFormTitle/>
			<PostFormField
				titleRef={titleRef}
			/>
			<PostFormTextArea
				textAreaRef={textAreaRef}
			/>
			<PostFormButton/>
		</form>
    )
}

export default PostForm
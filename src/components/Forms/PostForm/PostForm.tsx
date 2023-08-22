import React from 'react'

const PostForm = () => {
    return (
        <form className="w-full p-6 border border-gray-400">
			<div className='mb-6'>
				<h3 className="text-xl font-bold">Add a Post</h3>
			</div>
			<div className="flex flex-wrap -mx-3">
				<div className="w-full px-3">
					<label
						className="block tracking-wide text-xs font-bold mb-2"
						htmlFor="postTitle"
					>
					</label>
					<input
						className="appearance-none bg-transparent block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
						id="postTitle"
						type="text"
						placeholder="Title"
						required
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3">
				<div className="w-full px-3">
					<label
						className="block tracking-wide text-xs font-bold mb-2"
						htmlFor="postContent"
					>
					</label>
					<textarea
						className="appearance-none bg-transparent resize-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
						id="postContent"
						rows={6}
						placeholder="Enter your post"
						required
					/>
				</div>
			</div>
			<div className="flex justify-end">
				<button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg" type="submit">Send post</button>
			</div>
		</form>
    )
}

export default PostForm
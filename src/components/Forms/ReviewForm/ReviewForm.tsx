import React from 'react'

const ReviewForm = () => {
    return (
        <form className="w-full p-6 border border-gray-400">
			<div className='mb-6'>
				<h3 className="text-xl font-bold">Add a Review</h3>
            	<div>Your rating: &checkStar</div>
			</div>
			<div className="flex flex-wrap -mx-3">
				<div className="w-full px-3">
					<label
						className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="reviewTittle"
					>
					</label>
					<input
						className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="reviewTittle"
						type="password"
						placeholder="Title"
						required
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3">
				<div className="w-full px-3">
					<label
						className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="reviewContent"
					>
					</label>
					<textarea
						className="appearance-none resize-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="reviewContent"
						rows={6}
						placeholder="Enter your reviews"
						required
					/>
				</div>
			</div>
			<div className="flex justify-end">
				<button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg" type="submit">Send review</button>
			</div>
		</form>
    )
}

export default ReviewForm
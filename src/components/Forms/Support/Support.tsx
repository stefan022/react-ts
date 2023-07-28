import React from "react";

const Support = () => {
	return (
		<form className="w-full">
			<h3 className="text-center text-xl mb-10 font-bold">Send us a message for more information</h3>
			<div className="flex flex-wrap -mx-3 mb-4">
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="supportFirstName"
					>
						First Name<span className="text-red-400">*</span>
					</label>
					<input
						className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="supportFirstName"
						type="text"
						placeholder="Jane"
                        required
					/>
				</div>
				<div className="w-full md:w-1/2 px-3">
					<label
						className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="supportEmail"
					>
						Email<span className="text-red-400">*</span>
					</label>
					<input
						className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="supportEmail"
						type="text"
						placeholder="Doe"
                        required
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-4">
				<div className="w-full px-3">
					<label
						className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="supportTitle"
					>
						Title<span className="text-red-400">*</span>
					</label>
					<input
						className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="supportTitle"
						type="password"
						placeholder="Title"
						required
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-4">
				<div className="w-full px-3">
					<label
						className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="supportTitle"
					>
						Message<span className="text-red-400">*</span>
					</label>
					<textarea
						className="appearance-none resize-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="supportTitle"
						rows={6}
						placeholder="Title"
						required
					/>
				</div>
			</div>
			<div className="flex justify-end">
				<button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg" type="submit">Send message</button>
			</div>
		</form>
	);
};

export default Support;

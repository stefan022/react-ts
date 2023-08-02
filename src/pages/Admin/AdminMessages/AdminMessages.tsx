import React from "react";

const AdminMessages = () => {
	return (
		<div>
			<div className="flex justify-center py-4 bg-gray-200">
				<h3>Messages</h3>
			</div>

			<div className="flex flex-col border border-gray-400">
                <div className="flex flex-col p-4">
                    <div className="flex justify-between items-center">
                        <h3>$username</h3>
                        <button className="text-blue-400">View</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aut?</p>
                </div>
            </div>
			<div className="flex flex-col border border-gray-400">
                <div className="flex flex-col p-4">
                    <div className="flex justify-between items-center">
                        <h3>$username</h3>
                        <button className="text-blue-400">View</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aut?</p>
                </div>
            </div>
			<div className="flex flex-col border border-gray-400">
                <div className="flex flex-col p-4">
                    <div className="flex justify-between items-center">
                        <h3>$username</h3>
                        <button className="text-blue-400">View</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aut?</p>
                </div>
            </div>
			<div className="flex flex-col border border-gray-400">
                <div className="flex flex-col p-4">
                    <div className="flex justify-between items-center">
                        <h3>$username</h3>
                        <button className="text-blue-400">View</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aut?</p>
                </div>
            </div>
			<div className="flex flex-col border border-gray-400">
                <div className="flex flex-col p-4">
                    <div className="flex justify-between items-center">
                        <h3>$username</h3>
                        <button className="text-blue-400">View</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aut?</p>
                </div>
            </div>
			<div className="flex flex-col border border-gray-400">
                <div className="flex flex-col p-4">
                    <div className="flex justify-between items-center">
                        <h3>$username</h3>
                        <button className="text-blue-400">View</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aut?</p>
                </div>
            </div>

            {/* After click view open modal with Title and Message */}
            {/* If Admin not send answer, available write in answer */}
            {/* otherwise answer is available readonly!!! */}
		</div>
	);
};

export default AdminMessages;

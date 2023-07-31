import React from 'react'
import { Banner } from '../../components'
import ContentMiddle from '../../content/ContentMiddle'

const Messages = () => {
  	return (
    	<div>
			<Banner
				title='Messages'
			/>
			<ContentMiddle>
				<div className='py-6'>
					<div className='flex gap-6'>
						<div className='w-1/5 border border-gray-400 flex flex-col h-full'>
							<div className='p-4 border-b border-b-gray-400'>Notifications</div>
							<div className='flex border-b border-b-gray-400'>
								<div className='h-[75px] w-1/5 p-2'>
									<div className='bg-red-300 rounded-full h-[40px] w-[40px]'></div>
								</div>
								<div className='p-2'>
									<p>$adminName</p>
									<p>Lorem ipsum dolor sit...</p>
								</div>
							</div>
						</div>
						<div className='w-4/5 border border-gray-400'>
							<div className='text-center py-4 border-b border-b-gray-400'>
								<p>Message from @adminName</p>
							</div>
							<div className='p-4 flex flex-col gap-4'>
								<div>
									<h4>Title</h4>
									<p>Message</p>
								</div>
								<div>
									<p>Answer:</p>
									<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, corporis eum ipsam voluptas nisi dolor quod ipsa velit ad tempore excepturi voluptatibus, dignissimos vitae alias autem in dolorum exercitationem quisquam sapiente omnis odio repudiandae! Perspiciatis numquam provident quaerat aperiam laudantium, commodi veniam dolores nulla suscipit fuga minima omnis. Distinctio quae, labore odio non hic rerum esse suscipit doloremque. Impedit obcaecati soluta ea! Nisi, dolor pariatur itaque nobis eveniet perspiciatis iusto id blanditiis? Iure commodi ea dolor similique deleniti magnam autem blanditiis voluptate reiciendis! Sit quia excepturi animi libero, cupiditate corporis itaque reiciendis totam optio veniam a beatae ducimus. Magni, ut!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ContentMiddle>
		</div>
  	)
}

export default Messages
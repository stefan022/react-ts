import React from 'react'
import { Banner, MessageContent, MessagesSidebar } from '../../components'
import Container from '../../containers/Container/Container'

const Messages = () => {
  	return (
    	<div>
			<Banner
				title='Messages'
			/>
			<Container>
				<div className='py-6'>
					<div className='flex gap-6'>
						<MessagesSidebar/>
						<MessageContent/>
					</div>
				</div>
			</Container>
		</div>
  	)
}

export default Messages
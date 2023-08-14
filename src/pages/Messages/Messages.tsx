import React, { FC, useState, useEffect } from 'react'
import { Banner, MessageContainer, MessagesSidebar } from '../../components'
import Container from '../../containers/Container/Container'
import { useAppSelector } from '../../hooks/useAppSelector';
import { RootState } from '../../ts/types/RootState';
import { ISupport } from '../../ts/interfaces/ISupport/ISupport';
import { useGetAllSupportQuery } from '../../features/API/supportAPI';
import MessageEmptyContainer from '../../components/Messages/MessageEmptyContainer/MessageEmptyContainer';

const Messages: FC = (): JSX.Element => {
	useGetAllSupportQuery();
	const userId = localStorage.getItem("userId");
	const { allSupport } = useAppSelector((state: RootState) => state.support);
	
	const [ supportId, setSupportId ] = useState<number | null>(null);
	const [ activeMessage, setActiveMessage ] = useState<number>(0);

	useEffect(() => {
		const getMySupportMessages = allSupport.filter((support: ISupport) => support.senderId === userId!);

		if (getMySupportMessages.length > 0) {
			setSupportId(getMySupportMessages[0].supportId);
		}

		// eslint-disable-next-line
	}, [allSupport]);

  	return (
    	<div>
			<Banner
				title='Messages'
			/>
			<Container>
				<div className='py-6'>
					<div className='flex gap-6'>
						{
							supportId ? (
								<>
									<MessagesSidebar 
										setActiveMessage={setActiveMessage}
										activeMessage={activeMessage}
										supportId={supportId}
									/>
									<MessageContainer 
										supportId={supportId}
										activeMessage={activeMessage}
									/>
								</>
							) : <MessageEmptyContainer/>
						}
					</div>
				</div>
			</Container>
		</div>
  	)
}

export default Messages
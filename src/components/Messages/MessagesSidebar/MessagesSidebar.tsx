import React, { FC, Dispatch, SetStateAction } from 'react'
import { useGetAllMessagesForSupportQuery } from '../../../features/API/supportMessagesAPI';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { ISupportMessage } from '../../../ts/interfaces/ISupport/ISupportMessage';

import MessageSidebarNotifications from '../MessageSidebarNotifications/MessageSidebarNotifications';
import { Spinner } from "../../../components";

interface IProps {
    supportId: number;
    activeMessage: number;
    setActiveMessage: Dispatch<SetStateAction<number>>;
}

const MessagesSidebar: FC<IProps> = ({ supportId, activeMessage, setActiveMessage }): JSX.Element => {
    useGetAllMessagesForSupportQuery(supportId);

    const { allMessagesForSupport } = useAppSelector((state: RootState) => state.support_messages);

    return (
        <>
            {
                allMessagesForSupport.length > 0 ? (
                    <div className='w-1/5 border border-gray-400 flex flex-col h-[350px] overflow-auto'>
                        <div className='p-4 border-b border-b-gray-400'>Notifications</div>
                        {
                            allMessagesForSupport.map((supportSingleMessage: ISupportMessage) => {
                                const { messageId, title, message, changeTimestamp, adminResponse, seen } = supportSingleMessage;
        
                                return (
                                    <MessageSidebarNotifications
                                        key={messageId}
                                        supportId={supportId}
                                        messageId={messageId}
                                        activeMessage={activeMessage}
                                        setActiveMessage={setActiveMessage}
                                        title={title}
                                        message={message}
                                        changeTimestamp={changeTimestamp}
                                        adminResponse={adminResponse}
                                        seen={seen}
                                    />
                                )
                            })
                        }
                    </div>
                ) : <Spinner/>
            }
        </>
    )
}

export default MessagesSidebar
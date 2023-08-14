import React, { FC, Fragment } from 'react'

import { MessageContainerChooseNotification, MessageSingleContainer } from "../.."
import { useGetAllMessagesForSupportQuery } from '../../../features/API/supportMessagesAPI';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { ISupportMessage } from '../../../ts/interfaces/ISupport/ISupportMessage';

interface IProps {
    supportId: number;
    activeMessage: number;
}

const MessageContainer: FC<IProps> = ({ supportId, activeMessage }): JSX.Element => {
    useGetAllMessagesForSupportQuery(supportId);
    const { allMessagesForSupport } = useAppSelector((state: RootState) => state.support_messages);

    return (
        <>
        {
            allMessagesForSupport.length > 0 ? (
                activeMessage !== 0 ? (
                    <>
                    {
                        allMessagesForSupport.map((singleMessage: ISupportMessage) => {
                            const { messageId, title, timestamp, message, adminResponse, answer: { adminName, adminMessage, adminMessageTimestamp } } = singleMessage;

                            return (
                                <Fragment key={messageId}>
                                    {
                                        messageId === activeMessage ? (
                                            <MessageSingleContainer
                                                title={title}
                                                timestamp={timestamp}
                                                message={message}
                                                adminResponse={adminResponse}
                                                adminName={adminName!}
                                                adminMessage={adminMessage!}
                                                adminMessageTimestamp={adminMessageTimestamp!}
                                            />
                                        ) : null
                                    }
                                </Fragment>
                            )
                        })
                    }
                    </>
                ) : <MessageContainerChooseNotification/>
            ) : null
        }
        </>
    )
}

export default MessageContainer
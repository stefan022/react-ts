import React, { FC, useState } from "react";

import { useGetAllMessagesForSupportQuery } from "../../../features/API/supportMessagesAPI";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { RootState } from "../../../ts/types/RootState";
import { AdminMessagesTitle, AdminSingleMessage, Spinner } from "../../../components";
import { ISupportMessage } from "../../../ts/interfaces/ISupport/ISupportMessage";

import "./AdminMessages.scss";

const AdminMessages: FC = (): JSX.Element => {
    useGetAllMessagesForSupportQuery();

    const { allMessagesForSupport } = useAppSelector((state: RootState) => state.support_messages);
    const [ numberOfVisibleMessages, setNumberOfVisibleMessages ] = useState<number>(5);

    const visibleMessagesForSupport = allMessagesForSupport.slice(0, numberOfVisibleMessages);

    const handleLoadMore = () => setNumberOfVisibleMessages((novm) => novm + 5);

	return (
		<>
            {
                visibleMessagesForSupport.length > 0 ? (
                    <>
                        <AdminMessagesTitle/>
                        {
                            visibleMessagesForSupport.map((supportMessage: ISupportMessage) => {
                                const { messageId, email, message, timestamp, adminResponse } = supportMessage;

                                return (
                                    <AdminSingleMessage
                                        key={messageId}
                                        messageId={messageId}
                                        email={email}
                                        message={message}
                                        timestamp={timestamp}
                                        adminResponse={adminResponse}
                                    />
                                )
                            })
                        }
                        <div className="admin__messages-load-more">
                            <button 
                                onClick={handleLoadMore}
                                className="admin__messages-load-more-button"
                            >
                                Load more
                            </button>
                        </div>
                    </>
                ) : <Spinner/>
            }
		</>
	);
};

export default AdminMessages;

import React, { FC, Dispatch, SetStateAction } from 'react'

import { useGetSingleMessageForSupportQuery } from '../../../../features/API/supportMessagesAPI';
import { AdminAnswer, AdminAnswerForm, ModalAdminSingleMessageContent, Spinner } from '../../../../components';
import { IAnswer } from '../../../../ts/interfaces/ISupport/IAnswer';

import "./ModalAdminSingleMessage.scss";

interface IProps {
    currentMessageId: number;
    setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalAdminSingleMessage: FC<IProps> = ({ currentMessageId, setModalIsOpen }): JSX.Element => {
    const { data: singleMessageForSupport } = useGetSingleMessageForSupportQuery(currentMessageId);

    return (
        <>
            {
                singleMessageForSupport ? (
                    <div className='modal__admin-single-message'>
                        <ModalAdminSingleMessageContent
                            singleMessageForSupport={singleMessageForSupport}
                            setModalIsOpen={setModalIsOpen}
                        />
                        {
                            singleMessageForSupport.adminResponse ? (
                                <AdminAnswer
                                    answer={singleMessageForSupport.answer as IAnswer}
                                />
                            ) : (
                                <AdminAnswerForm
                                    messageId={singleMessageForSupport.messageId}
                                    firstName={singleMessageForSupport.firstName}
                                    setModalIsOpen={setModalIsOpen}
                                />
                            )
                        }
                    </div>
                ) : <Spinner/>
            }
        </>
    )
}

export default ModalAdminSingleMessage
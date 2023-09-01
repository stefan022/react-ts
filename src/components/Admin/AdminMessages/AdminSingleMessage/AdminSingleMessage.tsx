import React, { FC, useState } from 'react'

import { Modal } from '@mui/material';
import { ModalAdminSingleMessage } from '../../../../components';
import { timeAgo } from '../../../../utils/helpers/timeAgo';
import { BiCheckDouble } from 'react-icons/bi';

import "../AdminMessages.scss";

interface IProps {
    messageId: number;
    email: string;
    message: string;
    timestamp: number;
    adminResponse: boolean;
}

const AdminSingleMessage: FC<IProps> = ({ messageId, email, message, timestamp, adminResponse }): JSX.Element => {
    const [ modalIsOpen, setModalIsOpen ] = useState<boolean>(false);
    const [ currentMessageId, setCurrentMessageId ] = useState<number>(0);

    const calcTimeAgo = timeAgo(timestamp);
    const adminContainer =  adminResponse ? "admin-single-message__container-answered" : "admin-single-message__container";

    const handleOpenModal = (mId: number) => {
        setCurrentMessageId(mId);
        setModalIsOpen(true);
    };
    const handleCloseModal = () => setModalIsOpen(false);

    return (
        <>
            <div    
                className={adminContainer}
                onClick={() => handleOpenModal(messageId)}
            >
                <div className="admin-single-message__content">
                    <div className="admin-single-message__content-between">
                        <h4>{email}</h4>
                        <p className="admin-single-message__content-between__text">{calcTimeAgo}</p>
                    </div>
                    <div className='admin-single-message__content-between'>
                        <p className='admin-single-message__content-between__text'>{message}</p>
                        { adminResponse &&  <BiCheckDouble size={20}/>}
                    </div>
                </div>
            </div>
            <Modal
                open={modalIsOpen}
                onClose={handleCloseModal}
                className='bg-white bg-opacity-80'
                children={
                    <ModalAdminSingleMessage 
                        currentMessageId={currentMessageId}
                        setModalIsOpen={setModalIsOpen}
                    />
                }
            />
        </>
    )
}

export default AdminSingleMessage
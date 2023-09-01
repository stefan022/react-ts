import React, { FC } from 'react'

import { IAnswer } from '../../../../ts/interfaces/ISupport/IAnswer'
import { timestampToLocalString } from '../../../../utils/helpers/timestampToLocalString';

import "../AdminMessages.scss"

interface IProps {
    answer: IAnswer;
}

const AdminAnswer: FC<IProps> = ({ answer: { adminName, adminMessage, adminMessageTimestamp } }): JSX.Element => {
    const calcTimestamp = timestampToLocalString(adminMessageTimestamp);

    return (
        <div className='admin-single-message-answer__container'>
            <div className='admin-single-message-answer__divider'></div>
            <div className='admin-single-message-answer__sender'>
                <div className='admin-single-message-answer__sender-and-timestamp'>
                    <h4>Admin:</h4>
                    <p>{calcTimestamp}</p>
                </div>
                <p>@{adminName}</p>
            </div>
            <div className='admin-single-message-answer__content'>
                <h4>Admin Message:</h4>
                <p>{adminMessage}</p>
            </div>
        </div>
    )
}

export default AdminAnswer
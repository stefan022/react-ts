import React, { FC, useState } from 'react'

import { Modal } from '@mui/material';
import {ModalPersonalInfoEdit} from '../../../components';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { toast } from 'react-toastify';

const PersonalInfoEdit: FC = (): JSX.Element => {
    const userId = localStorage.getItem("userId");
    const [ modalIsOpen, setModalIsOpen ] = useState<boolean>(false);

    const handleUpdatePersonalInfo = () => { 
        if (userId) {
            updateDoc(doc(db, "users", userId), {
                firstName: "Darlen",
                lastName: "Alderson"
            })
            .then(() => {
                setModalIsOpen(false);
                toast.success("You have successfully changed your information");
            })
            .catch(error => toast.error(error));

            return;
        }
    };

    const handleOpenModal = () => setModalIsOpen(true);
    const handleCloseModal = () => setModalIsOpen(false);

    return (
        <>
            <button 
                className='text-white bg-yellow-400 hover:bg-yellow-500 transition-all py-0.5 px-3'
                onClick={handleOpenModal}
            >
                Edit
            </button>
            <Modal
                open={modalIsOpen}
                onClose={handleCloseModal}
                className='bg-white bg-opacity-80'
                children={
                    <ModalPersonalInfoEdit 
                        handleCloseModal={handleCloseModal}
                        handleUpdatePersonalInfo={handleUpdatePersonalInfo}
                    />
                }
            />
        </>
    )
}

export default PersonalInfoEdit
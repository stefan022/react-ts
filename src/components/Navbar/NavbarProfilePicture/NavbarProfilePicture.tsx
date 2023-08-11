import React, { FC, MouseEventHandler } from 'react'

import { BsCamera } from 'react-icons/bs';

import { storage } from '../../../firebase/config';
import { ref, listAll, getDownloadURL, ListResult, StorageReference } from 'firebase/storage';

interface IProps {
    handleDisplayProfileDropdown: MouseEventHandler<HTMLDivElement>;
}

const NavbarProfilePicture: FC<IProps> = ({ handleDisplayProfileDropdown }): JSX.Element => {
    const userId = localStorage.getItem("userId");
    const [ profilePicture, setProfilePicture ] = React.useState<string>();

    React.useEffect(() => {
        const imageRef: StorageReference = ref(storage, `${userId}/`);

        listAll(imageRef)
                .then((res: ListResult) => {
                    res.items.forEach((item: StorageReference) => {
                        getDownloadURL(item)
                            .then((url: string) => setProfilePicture(url))
                    })
                })
        // eslint-disable-next-line
    }, []);

    return (
        <div 
            onMouseEnter={handleDisplayProfileDropdown}
            className="w-[40px] h-[40px] cursor-pointer border border-gray-600 rounded-full relative flex items-center justify-center overflow-hidden"
        >
            {
                !profilePicture ? (
                    <div className='bg-white w-[100px] h-[100px] rounded-full text-center flex flex-col items-center justify-center'>
                        <BsCamera size={16} className='text-blue-500'/>
                    </div>
                ) : <img width={50} src={profilePicture} alt='img'/>
            }
        </div>
    )
}

export default NavbarProfilePicture
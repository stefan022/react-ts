import React, { FC, useEffect, useState, useContext, Context } from 'react'

import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { toast } from 'react-toastify';
import { IGetUser } from '../../../ts/interfaces/IUser/IGetUser';
import { PersonalInfo, PersonalInfoEdit, Spinner } from '../../../components';
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

const ProfileInfo: FC = (): JSX.Element => {
    const userId = localStorage.getItem("userId") as string;

    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
    const [ user, setUser ] = useState<IGetUser>();

    const theme = darkTheme ? "dark" : "light";

    useEffect(() => {
        if (userId) {
            const snapshot = onSnapshot(doc(db, "users", userId), (snapshot) => {
                const userData = snapshot.data() as IGetUser;
                setUser(userData);

            }, (error) => {
                toast.error(error.message, { theme });
            });

            return () => {
                snapshot();
            };
        };

        // eslint-disable-next-line
    }, [userId]);

    return (
        <div>
            <div className='p-4 flex justify-between border border-gray-300'>
                <p className='font-bold'>Personal info</p>
                <PersonalInfoEdit/>
            </div>
            {
                user ? (
                    <PersonalInfo
                        firstName={user!.firstName}
                        lastName={user!.lastName}
                        username={user!.username}
                        email={user!.email}
                        sinceMember={user!.sinceMember}
                    />
                ) : <Spinner/>
            }
        </div>
    )
}

export default ProfileInfo
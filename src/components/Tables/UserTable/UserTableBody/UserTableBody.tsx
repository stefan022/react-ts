import React, { FC } from "react";

import { IUser } from "../../../../ts/interfaces/IUser/IUser";
import { UserTableRow } from "../../../../components"

interface IProps {
    users: IUser[];
}

const UserTableBody: FC<IProps> = ({ users }): JSX.Element => {
    return (
        <tbody>	
            {
                users.map((singleUser: IUser) => {
                    const { userId, firstName, lastName, email, username, token } = singleUser;

                    return (
                        <UserTableRow
                            key={userId}
                            firstName={firstName}
                            lastName={lastName}
                            email={email}
                            username={username}
                            token={token}
                        />
                    )
                })
            }
        </tbody>
    )
}

export default UserTableBody;
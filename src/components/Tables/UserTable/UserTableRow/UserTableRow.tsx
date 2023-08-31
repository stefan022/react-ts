import React, { FC } from 'react'

import { checkRole } from '../../../../utils/helpers/checkRole';

interface IProps {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    token: string
}

const UserTableRow: FC<IProps> = ({ firstName, lastName, email, username, token }): JSX.Element => {
    const role = checkRole(token);

    return (
        <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-200 text-blue-400">
            <td className="px-6 py-4">{firstName}</td>
            <td className="px-6 py-4">{lastName}</td>
            <td className="px-6 py-4">{email}</td>
            <td className="px-6 py-4">@{username}</td>
            <td className="px-6 py-4">{role}</td>
            <td className="px-6 py-4">
                <button className="bg-blue-400 hover:bg-blue-500 text-white py-1 px-3">Edit</button>
            </td>
        </tr>
    )
}

export default UserTableRow
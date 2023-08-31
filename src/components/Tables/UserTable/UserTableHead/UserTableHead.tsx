import React, { FC } from 'react'

const UserTableHead: FC = (): JSX.Element => {
    return (
        <thead className="text-xs text-blue-400 uppercase bg-gray-50 dark:bg-gray-200 dark:text-blue-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    First Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Last Name
                </th>
                <th scope="col" className="px-12 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Username
                </th>
                <th scope="col" className="px-6 py-3">
                    Role
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
    )
}

export default UserTableHead
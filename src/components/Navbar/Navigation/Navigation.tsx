import React, { FC, Fragment, useContext, Context } from 'react'

import { Link } from 'react-router-dom'
import { navigationData } from './navigationData'
import DarkThemeContext from '../../../context/ThemeContext'
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext'

const Navigation: FC = (): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <nav>
            <ul className="flex gap-5">
                {
                    navigationData.map((nav) => {
                        const { id, route, text } = nav;

                        return (
                            <Fragment key={id}>
                                <Link
                                    className={`
                                        ${darkTheme ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400 hover:bg-blue-500"}
                                        text-white py-1 px-3 rounded-md transition-all
                                    `}
                                    to={route}
                                >
                                    <li>{text}</li>
                                </Link>
                            </Fragment>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation
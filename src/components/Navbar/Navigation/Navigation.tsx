import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { navigationData } from './navigationData'

const Navigation = () => {
    return (
        <nav>
            <ul className="flex gap-5">
                {
                    navigationData.map((nav) => {
                        const { id, route, text } = nav;

                        return (
                            <Fragment>
                                <Link
                                    className="bg-blue-400 hover:bg-blue-500 text-white py-1 px-3 rounded-lg" 
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
import React, { MouseEventHandler } from 'react'
import { sectionsData } from './sectionsData'
import { Link } from 'react-router-dom';

interface IProps {
    handleHideProfileDropdown: MouseEventHandler<HTMLAnchorElement | HTMLDivElement>;
    handleDisplayCart: MouseEventHandler<HTMLDivElement>;
}

const Sections = ({ handleHideProfileDropdown, handleDisplayCart }: IProps) => {
    return (
        <>
            {
                sectionsData.map((section) => {
                    const { sectionId, sectionName, route, icon } = section;

                    if (sectionName !== "cart") {
                        return (
                            <Link
                                key={sectionId}
                                to={route!} 
                                className="hover:bg-gray-100 w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer"
                                onMouseEnter={handleHideProfileDropdown}
                            >
                                {icon}
                            </Link>
                        )
                    }

                    return (
                        <div 
                            key={sectionId}
                            className="hover:bg-gray-100 w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer"
                            onMouseEnter={handleHideProfileDropdown}
                            onClick={handleDisplayCart}
                        >
                            {icon}
                        </div>
                    )
                })
            }
        </>
    )
}

export default Sections
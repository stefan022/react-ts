import React, { FC } from "react"

import { AiFillStar } from "react-icons/ai";
import { stars } from "../../../constants/stars";

interface IProps {
    rating: number;
    size: number;
};

const Stars: FC<IProps> = ({ rating, size }): JSX.Element => {
    return (
        <>
            {
                stars.map((star) => {
                    const { starId, starRating } = star;

                    return (
                        <AiFillStar 
                            key={starId}
                            size={size}
                            fill={ rating >= starRating ? "#ffcc00" : "#e6e6e6" }
                        />
                    )
                })
            }
        </>
    )
};

export default Stars
import React, { FC } from "react"

import { AiFillStar } from "react-icons/ai";
import { starsData } from "./starsData";

const Stars: FC<{rating: number}> = ({ rating }): JSX.Element => {
    return (
        <>
            {
                starsData.map((star) => {
                    const { starId, starRating } = star;

                    return (
                        <AiFillStar 
                            key={starId}
                            size={20}
                            fill={ rating >= starRating ? "yellow" : "white" }
                            stroke="black"
                            strokeWidth={15}
                        />
                    )
                })
            }
        </>
    )
};

export default Stars
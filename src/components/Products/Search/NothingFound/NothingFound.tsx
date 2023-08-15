import React, { FC } from 'react'

import search from "../../../../assets/search.png";

const NothingFound: FC = (): JSX.Element => {
    return (
        <div className='h-[400px] w-full flex flex-col justify-center items-center gap-1'>
                <img className='mb-2' width={150} src={search} alt="" />
                <h2>Sorry, but nothing matched your search terms.</h2>
                <h3>Please try again with some different keywords!</h3>
        </div>
    )
}

export default NothingFound
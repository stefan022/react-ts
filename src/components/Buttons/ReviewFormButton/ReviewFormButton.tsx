import React, { FC } from 'react'

const ReviewFormButton: FC = (): JSX.Element => {
    return (
        <div className="flex justify-end">
            <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg" type="submit">Send review</button>
        </div>
    )
}

export default ReviewFormButton
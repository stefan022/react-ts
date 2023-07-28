import React from 'react'

import { MdKeyboardArrowDown } from 'react-icons/md'
import "./FaqQuestion.scss";

interface IProps {
    currentActive: number;
    handleFaqToggle: any;
    question: string;
    id: number;
}

const FaqQuestion = ({ currentActive, handleFaqToggle, question, id }: IProps) => {
    return (
        <div className={`
            faq__question
            ${currentActive === id ? "faq__question-active" : "faq__question-inactive"}
        `}>
            <p className={`${currentActive === id ? "faq__title-active" : "faq__title-inactive"} faq__title`}>{question}</p>
            <div>
                {
                    currentActive === id ? (
                        <MdKeyboardArrowDown 
                            onClick={() => handleFaqToggle(id)}
                            className={`
                                faq__icon
                                ${currentActive === id ? "faq__icon-active" : ""}
                                `}
                            size={24}
                        />
                    ) : (
                        <MdKeyboardArrowDown 
                            onClick={() => handleFaqToggle(id)}
                            className='faq__icon-transition'
                            size={24}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default FaqQuestion
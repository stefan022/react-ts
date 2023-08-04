import React, { ChangeEventHandler, FocusEventHandler } from 'react'

import { FormikError } from '../../..';

interface IProps {
    inputId: string;
    text: string;
    placeholder: string; 
    value: string;
    error: string | undefined;
    touched: boolean | undefined;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleBlur: FocusEventHandler<HTMLInputElement>;
};

const FormikField = ({ inputId, text, placeholder, value, error, touched, handleChange, handleBlur }: IProps) => {
    return (
        <div className="mb-4">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={inputId}
            >
                {text}
            </label>
            <input
                className={`
                    shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline
                    ${touched && error ? "border border-red-400" : null}
                `}
                id={inputId}
                type="text"
                name={inputId}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <FormikError error={error} touched={touched}/>
        </div>
    )
}

export default FormikField
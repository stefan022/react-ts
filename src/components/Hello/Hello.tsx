import React, { FC, useContext, Context } from 'react'

import { SiHey } from 'react-icons/si'
import { IDarkThemeContext } from '../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';
import DarkThemeContext from '../../context/ThemeContext';

import "./Hello.scss"

const Hello: FC = (): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className="flex flex-col items-center justify-end text-3xl h-1/2 pb-12">
            <p className="flex items-center">Hey! <SiHey className={darkTheme ? "mx-1 text-blue-600" : "text-blue-400"} size={30}/> My name is Stefan</p>
            <p>and I'm a <span className={`${darkTheme ? "text-blue-600 on_off-active" : "text-blue-400 on_off"} font-bold`}>FE/React developer!</span></p>
        </div>
    )
}

export default Hello
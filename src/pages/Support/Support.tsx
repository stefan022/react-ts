import React, { FC, useContext, Context } from 'react'

import { Banner, SupportInformation, SupportForm } from '../../components'
import { Container } from '../../containers'
import { useGetAllSupportQuery } from '../../features/API/supportAPI';
import DarkThemeContext from '../../context/ThemeContext';
import { IDarkThemeContext } from '../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

const Support: FC = (): JSX.Element => {
    useGetAllSupportQuery();

    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
	const theme = darkTheme ? "dark" : "light";

    return (
        <div>
            <Banner
                title="Support"
                desc="If you need help, send us a message!"
            />
            <Container>
                <div className='flex gap-6 justify-between py-6'>
                    <div className="w-2/6 h-full">
                        <SupportInformation/>
                    </div>
                    <div className="w-4/6 border border-gray-400 flex justify-center p-8">
                        <SupportForm theme={theme}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Support
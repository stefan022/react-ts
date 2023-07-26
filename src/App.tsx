import React, { useState } from 'react'
import Router from './router/Router'
import { ProfileDropdownContext } from './context/ProfileDropdownContext'

const App = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <ProfileDropdownContext.Provider value={{ isActive, setIsActive }}>
            <Router/>
        </ProfileDropdownContext.Provider>
    )
}

export default App
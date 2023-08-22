import { createContext } from "react";

const DarkThemeContext = createContext({
    darkTheme: false,
    setDarkTheme: (arg: boolean) => {}
});

export default DarkThemeContext;
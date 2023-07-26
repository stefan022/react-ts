import { createContext } from "react";

export const ProfileDropdownContext = createContext({
    isActive: false,
    setIsActive: (arg: boolean) => {}
});
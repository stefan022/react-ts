import { Routes } from "../../router/Routes";

export const profileData = [
    {
        id: 1, 
        route: Routes.PROFILE,
        text: "Profile"
    },
    {
        id: 2, 
        route: `${Routes.PROFILE}${Routes.WISHLIST}`,
        text: "Wishlist"
    },
    {
        id: 3, 
        route: `${Routes.PROFILE}${Routes.ORDERS}`,
        text: "Orders"
    },
    {
        id: 4, 
        route: `${Routes.PROFILE}${Routes.SETTINGS}`,
        text: "Settings"
    },
];  
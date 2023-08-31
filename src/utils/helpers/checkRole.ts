export const checkRole = (token: string): "admin" | "user" => {
    if (token === process.env.REACT_APP_ADMIN_TOKEN) {
        return "admin";
    }

    return "user";
}
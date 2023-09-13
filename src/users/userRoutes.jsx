import UserProtected from "./UserProtected";
import Account from "./pages/Account";

export const userRoutes = [
    {
        show: true,
        path: "/user/account",
        compo: <UserProtected compo={<Account />} />,
        label: "Account"
    },
]

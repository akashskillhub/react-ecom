import { useSelector } from "react-redux";
import UserProtected from "../users/UserProtected";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OrderSuccess from "./pages/OrderSuccess";
import Register from "./pages/Register";
import AdminLogin from "../admin/pages/AdminLogin";
export const publicRoutes = [
    { show: true, path: "/", compo: <Home />, label: "Home" },
    { show: true, path: "/cart", compo: <UserProtected compo={<Cart />} />, label: "cart" },
    { show: false, path: "/product/:id", compo: <Details />, label: "details" },
    { show: false, path: "/checkout", compo: <UserProtected compo={<Checkout />} />, label: "checkout" },
    { show: false, path: "/success", compo: <UserProtected compo={<OrderSuccess />} />, label: "success" },
    { show: true, path: "/login", compo: <Login />, label: "login" },
    { show: true, path: "/register", compo: <Register />, label: "register" },
    { show: false, path: "/admin-login", compo: <AdminLogin />, label: "admin" },
]

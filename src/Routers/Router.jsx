import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Layouts/Home";
import AllVisa from "../Components/LayoutComponents/AllVisa";
import AddVisa from "../Components/LayoutComponents/AddVisa";
import MyAddedVisa from "../Components/LayoutComponents/MyAddedVisa";
import VisaApplication from "../Components/LayoutComponents/VisaApplication";
import Login from "../Components/LayoutComponents/LogInAndRegister/Login";
import Register from "../Components/LayoutComponents/LogInAndRegister/Register";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/allvisa",
        element: <AllVisa />
    },
    {
        path: "/addvisa",
        element: <AddVisa />
    },
    {
        path: "/myaddedvisa",
        element: <MyAddedVisa />
    },
    {
        path: "/visaApplication",
        element: <VisaApplication />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },

])

export default Router;
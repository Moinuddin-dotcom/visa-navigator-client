import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Layouts/Home";
import AllVisa from "../Components/LayoutComponents/AllVisa";
import AddVisa from "../Components/LayoutComponents/AddVisa";
import MyAddedVisa from "../Components/LayoutComponents/MyAddedVisa";
import VisaApplication from "../Components/LayoutComponents/VisaApplication";
import Login from "../Components/LayoutComponents/LogInAndRegister/Login";
import Register from "../Components/LayoutComponents/LogInAndRegister/Register";
import Hero from "../Components/Pages/Hero";
import VisaDetails from "../Components/Pages/VisaDetails";
import PrivateRouter from "./PrivateRouter";
import Error from "../Components/Layouts/Error";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Hero />,
                loader: () => fetch("https://server-side-a10.vercel.app/visa?limit=6")
            },
        ]
    },
    {
        path: "/visadetails/:id",
        element:
            <PrivateRouter>
                <VisaDetails />,
            </PrivateRouter>,
        loader: ({ params }) => fetch(`https://server-side-a10.vercel.app/visa/${params.id}`)
    },
    {
        path: "/allvisa",
        element: <AllVisa />,
        loader: () => fetch("https://server-side-a10.vercel.app/visa")
    },
    {
        path: "/addvisa",
        element:
            <PrivateRouter>
                <AddVisa />
            </PrivateRouter>
    },
    {
        path: "/myaddedvisa",
        element:
            <PrivateRouter>
                <MyAddedVisa />
            </PrivateRouter>,
        // loader: () => fetch("https://server-side-a10.vercel.app/visa?email")
    },
    {
        path: "/visaApplication",
        element:
            <PrivateRouter>
                <VisaApplication />,
            </PrivateRouter>,
        loader: () => fetch("https://server-side-a10.vercel.app/application")
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
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Layouts/Home";
import AllVisa from "../Components/LayoutComponents/AllVisa";
import AddVisa from "../Components/LayoutComponents/AddVisa";
import MyAddedVisa from "../Components/LayoutComponents/MyAddedVisa";
import VisaApplication from "../Components/LayoutComponents/VisaApplication";
import Login from "../Components/LayoutComponents/LogInAndRegister/Login";
import Register from "../Components/LayoutComponents/LogInAndRegister/Register";
import Hero from "../Components/Pages/Hero";
import LatestVisa from "../Components/Pages/LatestVisa";
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
                loader: () => fetch("http://localhost:8000/visa")
                // .then((res) => res.json())
                // .then((data) => console.log(data))
            },
            // {
            //     path: "/",
            //     element: <LatestVisa />
            // }
        ]
    },
    {
        path: "/visadetails/:id",
        element:
            <PrivateRouter>
                <VisaDetails />,
            </PrivateRouter>,
        loader: ({ params }) => fetch(`http://localhost:8000/visa/${params.id}`)
    },
    {
        path: "/allvisa",
        element: <AllVisa />,
        loader: () => fetch("http://localhost:8000/visa")
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
            </PrivateRouter>
    },
    {
        path: "/visaApplication",
        element:
            <PrivateRouter>
                <VisaApplication />,
            </PrivateRouter>,
        // loader: () => ({ params }) => fetch(`http://localhost:8000/visa/${params.id}`),
        loader: () => fetch("http://localhost:8000/application")
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
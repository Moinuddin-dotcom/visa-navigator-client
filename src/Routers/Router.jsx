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


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <Hero />,
                loader: () => fetch("http://localhost:8000/visa?limit=6")
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
        element: <VisaDetails />,
        loader: ({ params }) => fetch(`http://localhost:8000/visa${params.id}`)
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
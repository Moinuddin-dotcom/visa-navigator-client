
import { Navigate, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../Components/Provider/AuthProvider'
import Loading from '../Components/Pages/Loading'

const PrivateRouter = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loading />
    }

    if (user && user?.email) {
        return children
    }
    return (
        <Navigate
            state={location.pathname}
            to={"/login"}>

        </Navigate>
    )
}

export default PrivateRouter

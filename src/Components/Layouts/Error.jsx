import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="space-y-10">
            <p className="text-5xl font-bold text-center ">
                404 This page not found
            </p>
            <div className="text-center">
                <Link to={"/"} className="btn btn-wide btn-warning">Go Back to Home Page</Link>
            </div>
        </div>
    )
}

export default Error
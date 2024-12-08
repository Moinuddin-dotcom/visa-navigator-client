import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const navbarNavigation = <>
        <li><NavLink className="font-semibold" to={"/"} >Home</NavLink></li>
        <li><NavLink className="font-semibold" to={"/allvisa"} >All Visa</NavLink></li>
        <li><NavLink className="font-semibold" to={"/addvisa"} >Add Visa</NavLink></li>
        <li><NavLink className="font-semibold" to={"/myaddedvisa"} >My Added Visa</NavLink></li>
        <li><NavLink className="font-semibold" to={"/visaApplication"} >My Visa Application</NavLink></li>
    </>




    return (
        <div>
            <div className="NavStart max-w-[80vw] mx-auto border-2">
                <div className="navbar bg-gradient-to-r from-[#E3EED4] to-[#AEC3B0] text-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navbarNavigation}
                            </ul>
                        </div>
                        <Link to={"/"} className="btn btn-ghost text-xl hidden md:flex  hover:text-black">VISA NAVIGATOR</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navbarNavigation}
                        </ul>
                    </div>

                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            {
                                user ?
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                src={user.photoURL || "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"}
                                                alt="User Image"
                                            />
                                        </div>
                                    </div>
                                    :
                                    <div className='space-x-4'>
                                        <button className="btn btn-warning">
                                            <Link to={"/login"} >Log In</Link>
                                        </button>
                                        <button className="btn btn-warning">
                                            <Link to={"/register"} >Register</Link>
                                        </button>
                                    </div>
                            }
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {
                                    user &&
                                    <div>
                                        <li><a>{user && user?.displayName}</a></li>
                                        <li><button onClick={logOut}>Logout</button></li>
                                    </div>
                                }
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

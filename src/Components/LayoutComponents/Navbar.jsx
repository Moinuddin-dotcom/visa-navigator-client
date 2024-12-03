import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const pictureNavigation = <>

        <li><a>Profile</a></li>
        <li><a>Logout</a></li>
    </>
    const loginRegister = <>
        <button className="btn btn-warning">
            <Link to={"/login"} >Log In</Link>
            <Link to={"/register"} >Register</Link>
        </button>
    </>

    const navbarNavigation = <>
        <li><Link to={"/"} >Home</Link></li>
        <li><Link to={"/allvisa"} >All Visa</Link></li>
        <li><Link to={"/addvisa"} >Add Visa</Link></li>
        <li><Link to={"/myaddedvisa"} >My Added Visa</Link></li>
        <li><Link to={"/visaApplication"} >My Visa Application</Link></li>
    </>




    return (
        <div>
            <div className="NavStart max-w-[80vw] mx-auto border-2">
                <div className="navbar bg-base-100">
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
                        <a className="btn btn-ghost text-xl hidden md:flex">daisyUI</a>
                    </div>


                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navbarNavigation}
                        </ul>
                    </div>

                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            {/* <div className=''> */}
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {pictureNavigation}
                            </ul>
                            {loginRegister}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

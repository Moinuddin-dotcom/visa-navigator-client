import React from 'react'
import Navbar from '../LayoutComponents/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../LayoutComponents/Footer'

const Home = () => {
    return (
        <div className='bg-[#AEC3B0]'>
            {/* bg-[#E3EED4] */}
            <nav>
                <Navbar />
            </nav>
            <main>
                <h1>Banner section</h1>
                {/* Pending */}
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home

import React from 'react'
import Navbar from '../LayoutComponents/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../LayoutComponents/Footer'

const Home = () => {
    return (
        <div className='bg-gradient-to-b from-[#0C6478] from-10% via-[#09D1C7] via-30% to-[#80EE98] to-80%'>
            <nav>
                <Navbar />
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home

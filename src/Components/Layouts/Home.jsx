import React from 'react'
import Navbar from '../LayoutComponents/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../LayoutComponents/Footer'
import { Helmet } from 'react-helmet-async'

const Home = () => {

    return (

        <div className='bg-gradient-to-b from-[#0C6478] from-90% via-[#09D1C7] via-0% to-[#80EE98] to-5%'>
            <Helmet>
                <title>Visa | Home</title>
            </Helmet>
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

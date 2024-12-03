import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const VisaApplication = () => {
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main>
                <h1>My Visa application Here (Private) </h1>
                {/* Pending */}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default VisaApplication

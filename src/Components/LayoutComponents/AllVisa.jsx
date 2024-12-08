import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import LatestVisa from '../Pages/LatestVisa'
import { useLoaderData } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const AllVisa = () => {
    const countryData = useLoaderData()
    // console.log(countryData)
    return (
        <div>
            <Helmet>
                <title>Visa | All Visa</title>
            </Helmet>

            <nav>
                <Navbar />
            </nav>
            <main className='bg-gradient-to-b from-[#0C6478] from-10% via-[#09D1C7] via-30% to-[#80EE98] to-80%'>
                <h1 className='font-bold text-4xl text-center text-white py-10 animate__animated animate__tada'>See All Visa Processing </h1>
                <section className='max-w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                        countryData.map((countryCard) =>
                            <LatestVisa key={countryCard._id} countryCard={countryCard} />
                        )
                    }
                </section>
            </main>
            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default AllVisa

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import LatestVisa from '../Pages/LatestVisa'
import { useLoaderData } from 'react-router-dom'

const AllVisa = () => {
    const countryData = useLoaderData()
    console.log(countryData)
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main>
                <h1>Here is All Visa </h1>
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

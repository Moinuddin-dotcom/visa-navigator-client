import React from 'react'
import heroBG from "../../../Images/Heroimage.webp"
import LatestVisa from './LatestVisa'
import { Link, useLoaderData } from 'react-router-dom'
import Banner from './Banner'

const Hero = () => {
    const countryData = useLoaderData()


    return (
        <div >
            <header className=''>
                <Banner />
            </header>

            <main>
                <div className='text-center py-5'>
                    <button className="btn btn-wide bg-gradient-to-r from-[#0C5776] to-[#001C44] text-white">Latest visas section</button>
                    <p className="py-6 px-4 md:px-64 text-center text-white text-lg">
                        Choose your favourite country for your future
                    </p>
                </div>
                <div className='max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                        countryData.map((countryCard) =>
                            <LatestVisa key={countryCard._id} countryCard={countryCard} />
                        )
                    }
                </div>
                <div className="text-center my-20">
                    <button className="btn bg-gradient-to-r from-[#0C5776] to-[#001C44] text-white w-3/4 ">
                        <Link to={"/allvisa"}  >See all visas</Link>
                    </button>
                </div>
            </main>
        </div>
    )
}

export default Hero

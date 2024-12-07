import React from 'react'
import heroBG from "../../../Images/Heroimage.webp"
import LatestVisa from './LatestVisa'
import { Link, useLoaderData } from 'react-router-dom'
import Banner from './Banner'

const Hero = () => {
    const countryData = useLoaderData()


    return (
        <div >
            {/* <img
                className='w-full opacity-[0.5]'
                src={heroBG} alt="" /> */}
            <header>
                <Banner />
            </header>

            <main>
                <div className='text-center py-5'>
                    <button className="btn btn-warning btn-wide">Latest visas section</button>
                    <h1>Tota l data here: {countryData.length}</h1>
                </div>
                <div className='max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                        countryData.map((countryCard) =>
                            <LatestVisa key={countryCard._id} countryCard={countryCard} />
                        )
                    }
                </div>
                <div className="text-center my-20">
                    <button className="btn btn-warning w-3/4 ">
                        <Link to={"/allvisa"} >See all visas</Link>
                    </button>
                </div>
            </main>
        </div>
    )
}

export default Hero

import React from 'react'
import heroBG from "../../../Images/Heroimage.webp"
import LatestVisa from './LatestVisa'
import { useLoaderData } from 'react-router-dom'

const Hero = () => {
    const countryData = useLoaderData()


    return (
        <div className='min-h-screen'>
            <img
                className='w-full opacity-[0.5]'
                src={heroBG} alt="" />
            <main>
                <div className='text-center py-5'>
                    <button className="btn btn-warning btn-wide">Latest visas section</button>
                    <h1>Tota l data here: {countryData.length}</h1>
                </div>
                <div className='max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        countryData.map((countryCard) =>
                            <LatestVisa key={countryCard._id} countryCard={countryCard} />
                        )
                    }
                </div>
            </main>
        </div>
    )
}

export default Hero

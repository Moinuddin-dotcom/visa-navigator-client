import React, { useEffect } from 'react'
import heroBG from "../../../Images/Heroimage.webp"
import LatestVisa from './LatestVisa'
import { Link, useLoaderData } from 'react-router-dom'
import Banner from './Banner'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Welcome from './Welcome'

const Hero = () => {
    const countryData = useLoaderData()

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);


    return (
        <div >
            <header className=''>
                <Banner />
            </header>

            <main>
                <div className='text-center py-5'>
                    <div className="text-4xl font-bold text-white" data-aos="fade-up" data-aos-once="false">Latest visas section</div>
                    <p className="py-6 px-4 md:px-64 text-center text-white text-lg" data-aos="fade-up" data-aos-once="false">
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
                    <button className="btn bg-gradient-to-r from-[#0C5776] to-[#001C44] text-white w-3/4 " >
                        <Link to={"/allvisa"}  >See all visas</Link>
                    </button>
                </div>
            </main>
            <section className='my-5'>
                <Welcome />
            </section>
        </div>
    )
}

export default Hero

import React from 'react'

import bannerImag1 from "../../../Images/Banner-1.jpeg"
import bannerImag2 from "../../../Images/Banner-2.jpeg"
import bannerImag3 from "../../../Images/Banner-3.jpeg"
import bannerImag4 from "../../../Images/Banner-4.jpeg"
import Marquee from 'react-fast-marquee'

const Banner = () => {
    return (
        <div className=''>

            <section className=''>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img
                            src={bannerImag4}
                            className="w-full h-[80vh] " />

                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img
                            src={bannerImag2}
                            className="w-full h-[80vh]" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img
                            src={bannerImag3}
                            className="w-full h-[80vh]" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img
                            src={bannerImag1}
                            className="w-full h-[80vh]" />
                    </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </section>
            <section>
                <div>
                    <h1 className="text-5xl font-bold text-center text-white" data-aos="fade-up" data-aos-once="false">Visa-Navigator</h1>
                    <p className="py-6 px-4 md:px-64 text-center text-white text-sm" data-aos="fade-up" data-aos-once="false">
                        The Visa Navigator helps you to quickly and easily find the visa you need to enter and stay in Germany. Answer a few questions about the purpose of your entry and get sound information on how and where to apply for the relevant visa.
                    </p>
                    <div className='text-center'>
                        <button className="btn btn-wide bg-gradient-to-r from-[#0C5776] to-[#001C44] text-white">Start</button>
                    </div>
                </div>
            </section>
            <div className="divider"></div>
            <div className='flex justify-center items-center space-x-4 py-5 bg-[#001C44]'>
                <Marquee>
                    <h1 className='text-white font-bold '>Get Our Premium Fetures & Enjoy 25% discount on every travel visa</h1>
                </Marquee>
            </div>
        </div>
    )
}

export default Banner

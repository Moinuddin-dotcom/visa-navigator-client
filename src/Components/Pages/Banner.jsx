import React from 'react'

const Banner = () => {
    return (
        <div className=' w-[80vw] mx-auto min-h-screen border'>
            {/* grid grid-cols-1 md:grid-cols-2 */}

            <section className=''>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                            className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                            className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                            className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                            className="w-full" />
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
                    <h1 className="text-5xl font-bold text-center">Box Office News!</h1>
                    <p className="py-6 text-center">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div className='text-center'>

                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner

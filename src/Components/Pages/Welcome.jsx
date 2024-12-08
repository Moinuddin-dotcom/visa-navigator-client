import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Welcome = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <div className='max-w-[80vw] mx-auto'>
            <div>
                <h1 className="text-4xl text-center font-bold text-white my-4" data-aos="fade-up" data-aos-once="false">Welcome to Visa-Navigator.com!</h1>
                <p className="py-6 px-4 md:px-32 text-center text-white text-lg" data-aos="fade-up" data-aos-once="false">Are you dreaming of exploring new horizons, discovering vibrant cultures, and embarking on unforgettable journeys? Welcome to Visa Navigator, your ultimate partner in unlocking seamless travel experiences, whether you're planning a vacation, business trip, or family reunion.
                    <br />
                    At Visa Navigator, we understand that the visa application process can often be confusing and overwhelming. Our dedicated team of experienced professionals is committed to simplifying this process, ensuring that you can focus on the excitement of your upcoming adventure.
                    <br />
                    With just a few clicks, you can initiate your visa application, upload your documents, and track your progress in real-time. Our user-friendly interface ensures that you're always in control, making the entire process more efficient than ever before. Plus, our team is just a message away, ready to assist you whenever you need guidance or have questions.
                    <br />
                    Get started now and make your travel aspirations a reality!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                <div className="card bg-base-100 shadow-xl" data-aos="fade-up-right" data-aos-once="false">
                    <div className="card-body">
                        <div className='flex justify-center items-center'>

                        <img src="https://visa-navigator.com/assets/images/secure-shield.svg" width="40" height="40" alt="Guarantees" title="Icon of guaranteed service" className="infographics-item__img" />
                        </div>
                        <h2 className="font-bold text-xl text-center">Guarantees</h2>
                        <div className="divider divider-success text-gray-500">Guarantees</div>
                        <p className='text-gray-500'>We are liable for the quality of services under the contract</p>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl" data-aos="fade-up-down" data-aos-once="false">
                    <div className="card-body">
                        <div className='flex justify-center items-center'>

                        <img src="https://visa-navigator.com/assets/images/bezahlen.svg" width="40" height="40" alt="Guarantees" title="Icon of guaranteed service" className="infographics-item__img" />
                        </div>
                        <h2 className="font-bold text-xl text-center">Сonvenient application</h2>
                        <div className="divider divider-success text-gray-500">Сonvenient</div>
                        <p className='text-gray-500'>With our visa application service you can get your visa in a couple of clicks</p>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl" data-aos="fade-up-left" data-aos-once="false">
                    <div className="card-body">
                        <div className='flex justify-center items-center'>

                        <img src="https://visa-navigator.com/assets/images/recommended.svg" width="40" height="40" alt="Guarantees" title="Icon of guaranteed service" className="infographics-item__img" />
                        </div>
                        <h2 className="font-bold text-xl text-center">High-quality service</h2>
                        <div className="divider divider-success text-gray-500">service</div>
                        <p className='text-gray-500'>We work daily. Visa delivery by courier service, online registration and any form of payment</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome

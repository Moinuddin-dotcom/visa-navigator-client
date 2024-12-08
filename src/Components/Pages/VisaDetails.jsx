
import { useLoaderData, useParams } from 'react-router-dom'
import Navbar from '../LayoutComponents/Navbar'
import Footer from '../LayoutComponents/Footer'
import Modal from './Modal'

const VisaDetails = () => {
    const idData = useLoaderData()
    // console.log(idData)
    const {
        _id,
        countryImage,
        countryName,
        visaType,
        processingTime,
        documents,
        description,
        ageRestriction,
        fee,
        validity,
        applicationMethod
    } = idData

    return (
        <div>
            <nav>
                <Navbar />
            </nav>


            <main>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(${countryImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        // opacity: '0.5'
                    }}
                >
                    <div className="hero-overlay bg-opacity-65"></div>
                    <div className="hero-content text-white text-center md:text-start">
                        <div className="md:flex gap-20">
                            <div className='md:w-1/2'>
                                <h1 className="mb-5 text-5xl font-bold">{countryName}</h1>
                                <p className="mb-5"> {description}</p>
                            </div>
                            <div className=''>
                                <p className="mb-5"> Visa Type: {visaType}</p>
                                <p className="mb-5"> Processing Time:  {processingTime}</p>
                                <p className="mb-5"> Documents: {documents}</p>
                                <p className="mb-5"> Age Restriction:  {ageRestriction}</p>
                                <p className="mb-5"> Fee: {fee}</p>
                                <p className="mb-5"> Validity: {validity}</p>
                                <p className="mb-5"> Application Method: {applicationMethod}</p>
                                <button onClick={() => document.getElementById('my_modal_4').showModal()} className="btn btn-primary w-full">Apply for the visa</button>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <section className="modal">
                <Modal idData={idData} />
            </section>

            <footer>
                <Footer />
            </footer>


        </div>
    )
}

export default VisaDetails

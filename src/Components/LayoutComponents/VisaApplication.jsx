import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link, useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const VisaApplication = ({ user }) => {
    const applicationData = useLoaderData()
    // console.log(applicationData)
    const [dataOfApplication, setDataOfApplication] = useState(applicationData)
    // console.log(removeCard)

    const handleDelete = (_id) => {
        // console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await fetch(`https://server-side-a10.vercel.app/application/${_id}`, {
                    method: 'DELETE'
                })
                const data = await res.json();
                // console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    })
                    const remaining = dataOfApplication.filter(remove => remove._id !== _id)
                    setDataOfApplication(remaining)
                }
            }
        });
    }

    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main className='bg-gradient-to-b from-[#0C6478] from-10% via-[#09D1C7] via-30% to-[#0C6478] to-80%'>
                <h1 className='text-center font-bold text-4xl text-white p-5'>See application Here</h1>

                <section className='min-h-screen'>

                    <div>

                        {
                            dataOfApplication.map(applicationCard =>
                                <div key={applicationData._id} className="hero max-w-[70vw] mx-auto rounded-xl my-5 border-2" style={{
                                    backgroundImage: `url(${applicationCard?.idData?.countryImage})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    // opacity: '0.5'
                                }}>
                                    <div className="hero-content flex-col gap-20 lg:flex-row-reverse" >
                                        <img
                                            className='h-[300px] w-[500px] rounded-xl shadow-purple-600 shadow-2xl border-4 border-purple-600'
                                            src={applicationCard?.idData?.countryImage} />
                                        <div>
                                            <div className='space-y-2 text-white' >
                                                <h1 className="text-5xl font-bold">{applicationCard?.idData?.countryName}</h1>
                                                <p className=""> <span className='font-bold'> Visa type:</span>  {applicationCard?.idData?.visaType}</p>
                                                <p className=""> <span className='font-bold'> Processing time:</span> {applicationCard?.idData?.processingTime}</p>
                                                <p className=""> <span className='font-bold'> Fee: </span>{applicationCard?.idData?.fee}</p>
                                                <p className=""> <span className='font-bold'> Validity: </span>{applicationCard?.idData?.validity}</p>
                                                <p className=""> <span className='font-bold'> Application method:</span> {applicationCard?.idData?.applicationMethod}</p>
                                                <p className=""> <span className='font-bold'> Applied date:</span> {applicationCard?.appliedDate}</p>
                                                <p className=""> <span className='font-bold'> Applicant's name</span>: {applicationCard?.name}</p>
                                                <p className=""> <span className='font-bold'> Applicant’s email:</span> {applicationCard?.email}</p>
                                            </div>
                                            <button
                                                onClick={() => handleDelete(applicationCard._id)}
                                                className="btn bg-gradient-to-r from-[#0C5776] to-[#001C44] text-white btn-wide">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>


                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default VisaApplication

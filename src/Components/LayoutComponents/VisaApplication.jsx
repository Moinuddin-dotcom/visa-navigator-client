import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link, useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const VisaApplication = ({ user }) => {
    const applicationData = useLoaderData()
    console.log(applicationData)
    const [dataOfApplication, setDataOfApplication] = useState(applicationData)
    // console.log(removeCard)

    const handleDelete = (_id) => {
        console.log(_id)

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

                const res = await fetch(`http://localhost:8000/application/${_id}`, {
                    method: 'DELETE'
                })
                const data = await res.json();
                console.log(data)
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
            <main>
                <h1 className='text-center font-bold text-4xl'>My Visa application Here (Private) </h1>

                <section className='min-h-screen'>

                    <div>
                        {
                            dataOfApplication.map(applicationCard =>
                                <div key={applicationData._id} className="hero bg-base-200 border-2 mb-10">
                                    <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                                        <img
                                            className='h-[300px] w-[500px]'
                                            src={applicationCard?.idData?.countryImage} />
                                        <div>
                                            {/* <h1>Data here: {applicationData.length}</h1> */}
                                            <div className='space-y-2'>
                                                <h1 className="text-5xl font-bold">{applicationCard?.idData?.countryName}</h1>
                                                <p className=""> <span className='font-bold'> Visa type:</span>  {applicationCard?.idData?.visaType}</p>
                                                <p className=""> <span className='font-bold'> Processing time:</span> {applicationCard?.idData?.processingTime}</p>
                                                <p className=""> <span className='font-bold'> Fee: </span>{applicationCard?.idData?.fee}</p>
                                                <p className=""> <span className='font-bold'> Validity: </span>{applicationCard?.idData?.validity}</p>
                                                <p className=""> <span className='font-bold'> Application method:</span> {applicationCard?.idData?.applicationMethod}</p>
                                                <p className=""> <span className='font-bold'> Applied date:</span> {applicationCard?.appliedDate}</p>
                                                <p className=""> <span className='font-bold'> Applicant's </span>name: {applicationCard?.name}</p>
                                                <p className=""> <span className='font-bold'> Applicant’s email:</span> {applicationCard?.email}</p>
                                            </div>
                                            <button
                                                onClick={() => handleDelete(applicationCard._id)}
                                                className="btn btn-primary">Cancel</button>
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


import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import MyAddedVisaModal from '../Pages/MyAddedVisaModal';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TfiWrite } from 'react-icons/tfi';



const MyAddedVisa = () => {
    const { user } = useContext(AuthContext)
    const [loginuserVisa, setLoginuserVisa] = useState([])
    const [updateSelectedVisa, setUpdateSelectedVisa] = useState(null)

    useEffect(() => {
        if (user?.email) {
            fetch(`https://server-side-a10.vercel.app/visa?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setLoginuserVisa(data);
                })
        }
    }, [user])

    const handleDelete = (id) => {
        // console.log("Lets delete card", id)
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


                const res = await fetch(`https://server-side-a10.vercel.app/visa/${id}`, {
                    method: 'DELETE',
                })
                const data = await res.json()
                // console.log("Delete is done", data)
                if (data.deletedCount > 0) {
                    const remaining = loginuserVisa.filter(remain => remain._id !== id)
                    setLoginuserVisa(remaining)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });

                }

            }
        })
    }


    const handleUpdateClick = (visa) => {
        setUpdateSelectedVisa(visa);
        document.getElementById('my_modal_1').showModal();
    };

    const refreshVisas = () => {
        fetch(`https://server-side-a10.vercel.app/visa?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setLoginuserVisa(data);
            })
    }


    return (
        <div className='bg-gradient-to-b from-[#0C6478] from-10% via-[#09D1C7] via-30% to-[#0C6478] to-80%'>
            <nav>
                <Navbar />
            </nav>
            <h2 className='font-bold text-4xl text-center text-white py-10'>My Added Visas</h2>
            <main className='max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>

                {loginuserVisa.map((visa) => (
                    <div key={visa._id} className="card bg-gradient-to-b from-[#0C6478] from-10% via-[#09D1C7] via-30% to-[#80EE98] to-80% text-white shadow-purple-600 shadow-2xl border">
                        <div className="card-body">
                            <h2 className="card-title underline">{visa.countryName}</h2>
                            <p>Visa Type: {visa.visaType}</p>
                            <p>Processing Time: {visa.processingTime}</p>
                            <p>Fee: {visa.fee}</p>
                            <p>Validity: {visa.validity}</p>
                            <p>Application Method: {visa.applicationMethod}</p>
                            <div className="flex justify-around">
                                <button
                                    onClick={() => handleUpdateClick(visa)}
                                    className="btn btn-sm bg-gradient-to-r from-[#318969] to-[#001C44] text-white">
                                    <TfiWrite />
                                    Update</button>
                                <button
                                    onClick={() => handleDelete(visa._id)}
                                    className="btn btn-sm bg-gradient-to-r from-[#b74242] to-[#001C44] text-white">
                                    <RiDeleteBin5Line />
                                    Delete</button>
                            </div>
                        </div>
                        <figure>
                            <img
                                className='w-full h-[200px]'
                                src={visa.countryImage}
                                alt="Country image" />
                        </figure>
                    </div>
                ))}

            </main>
            <section>
                <MyAddedVisaModal
                    updateSelectedVisa={updateSelectedVisa}
                    setUpdateSelectedVisa={setUpdateSelectedVisa}
                    refreshVisas={() => refreshVisas()} />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default MyAddedVisa

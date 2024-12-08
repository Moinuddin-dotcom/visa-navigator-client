import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Modal = ({ idData }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("Form submitted");
        const form = e.target
        const email = form.email.value
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const appliedDate = form.appliedDate.value
        const fee = form.fee.value
        const name = firstName + " " + lastName


        const application = {
            name,
            email,
            firstName,
            lastName,
            appliedDate,
            fee,
            idData
        }
        // console.log(application)

        const res = await fetch("https://server-side-a10.vercel.app/application", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(application)
        })
        const data = await res.json()
        // console.log(data)
        if (data.insertedId) {
            Swal.fire({
                title: 'success!',
                text: 'Visa added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            form.reset();
        }


    };




    return (
        <div>
            <Toaster />
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-b from-[#0C6478] from-10% via-[#09D1C7] via-30% to-[#0C6478] to-80%">
                    {/* form start */}
                    <div className="max-w-md mx-auto mt-10 p-5 shadow-purple-600 shadow-2xl rounded-lg">
                        <h2 className="text-2xl font-semibold text-center mb-5">Apply for Visa</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="w-full px-3 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    // value={formData.firstName}
                                    // onChange={handleChange}
                                    placeholder="Enter your first name"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    // value={formData.lastName}
                                    // onChange={handleChange}
                                    placeholder="Enter your last name"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Applied Date</label>
                                {/* <input type="date" name="" id="" /> */}
                                <input
                                    type="date"
                                    name="appliedDate"
                                    // value={formData.appliedDate}
                                    // readOnly
                                    className="w-full px-3 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Fee</label>
                                <input
                                    type="number"
                                    name="fee"
                                    // defaultValue={fee}
                                    // value={formData.fee}
                                    // onChange={handleChange}
                                    placeholder="Enter visa fee"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                                >
                                    Apply
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* form end */}
                    <div className="text-center my-5">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Modal

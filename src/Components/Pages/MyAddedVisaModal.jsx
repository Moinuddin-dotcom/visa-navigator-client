import React, { useState } from 'react'
import Swal from 'sweetalert2'

const MyAddedVisaModal = ({ updateSelectedVisa, refreshVisas }) => {
    // console.log(updateSelectedVisa)

    const handleMyAddedVisaModal = async (e) => {

        e.preventDefault()
        const form = e.target
        const countryImage = form.countryImage.value
        const countryName = form.countryName.value
        const visaType = form.visaType.value
        const processingTime = form.processingTime.value
        const documents = form.documents.value
        const description = form.description.value
        const ageRestriction = form.ageRestriction.value
        const fee = form.fee.value
        const validity = form.validity.value
        const applicationMethod = form.applicationMethod.value

        const updatedVisa = {
            countryImage,
            countryName,
            visaType,
            processingTime,
            documents,
            description,
            ageRestriction,
            fee,
            validity,
            applicationMethod,
            // email: user?.email
        }
        // console.log(updatedVisa)

        const res = await fetch(`https://server-side-a10.vercel.app/visa/${updateSelectedVisa._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedVisa)
        })
        const data = await res.json()
        // console.log(data)

        if (data.modifiedCount > 0) {
            Swal.fire({
                title: "Updated!",
                text: "Visa updated successfully.",
                icon: "success",
            });
            // setUpdateSelectedVisa(null);
            document.getElementById('my_modal_1').close();
            refreshVisas();
        } else {
            Swal.fire({
                title: "Error",
                text: "Failed to update visa.",
                icon: "error",
            });
        }


    }

    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">



                    <div className="bg-gray-400 p-8 rounded-lg shadow-lg max-w-lg w-full">
                        <h1 className="text-2xl font-bold mb-6 text-center">Add Visa</h1>
                        <form onSubmit={handleMyAddedVisaModal} >
                            {/* <!-- Country Image --> */}
                            <div className="mb-4">
                                <label for="countryImage" className="block text-sm font-medium text-gray-700 mb-1">Country Image (URL):</label>
                                <input type="text" name="countryImage" defaultValue={updateSelectedVisa?.countryImage} placeholder="Enter image URL" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Country Name --> */}
                            <div className="mb-4">
                                <label for="countryName" className="block text-sm font-medium text-gray-700 mb-1">Country Name:</label>
                                <input type="text" name="countryName" defaultValue={updateSelectedVisa?.countryName} placeholder="Enter country name" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Visa Type --> */}
                            <div className="mb-4">
                                <label for="visaType" className="block text-sm font-medium text-gray-700 mb-1">Visa Type:</label>
                                <select name="visaType" defaultValue={updateSelectedVisa?.visaType} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
                                    <option value="Tourist Visa">Tourist Visa</option>
                                    <option value="Student Visa">Student Visa</option>
                                    <option value="Official Visa">Official Visa</option>
                                </select>
                            </div>

                            {/* <!-- Processing Time --> */}
                            <div className="mb-4">
                                <label for="processingTime" className="block text-sm font-medium text-gray-700 mb-1">Processing Time:</label>
                                <input type="text" name="processingTime" defaultValue={updateSelectedVisa?.processingTime} placeholder="e.g., 7-10 days" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Required Documents --> */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Required Documents:</label>
                                <div>
                                    <input type="checkbox" name="documents" defaultValue={updateSelectedVisa?.documents} value="Valid passport" className="mr-2" />
                                    <label for="passport" className="text-gray-700">Valid passport</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="documents" defaultValue={updateSelectedVisa?.documents} value="Visa application form" className="mr-2" />
                                    <label for="visaForm" className="text-gray-700">Visa application form</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="documents" defaultValue={updateSelectedVisa?.documents} value="Recent passport-sized photograph" className="mr-2" />
                                    <label for="photo" className="text-gray-700">Recent passport-sized photograph</label>
                                </div>
                            </div>

                            {/* <!-- Description --> */}
                            <div className="mb-4">
                                <label for="description" className="block text-sm font-medium text-gray-700 mb-1">Description:</label>
                                <textarea name="description" defaultValue={updateSelectedVisa?.description} rows="4" placeholder="Enter a description" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required></textarea>
                            </div>

                            {/* <!-- Age Restriction --> */}
                            <div className="mb-4">
                                <label for="ageRestriction" className="block text-sm font-medium text-gray-700 mb-1">Age Restriction:</label>
                                <input type="number" name="ageRestriction" defaultValue={updateSelectedVisa?.ageRestriction} placeholder="Enter minimum age" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Fee --> */}
                            <div className="mb-4">
                                <label for="fee" className="block text-sm font-medium text-gray-700 mb-1">Fee:</label>
                                <input type="number" name="fee" defaultValue={updateSelectedVisa?.fee} placeholder="Enter fee amount" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Validity --> */}
                            <div className="mb-4">
                                <label for="validity" className="block text-sm font-medium text-gray-700 mb-1">Validity:</label>
                                <input type="text" name="validity" defaultValue={updateSelectedVisa?.validity} placeholder="e.g., 6 months" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Application Method --> */}
                            <div className="mb-6">
                                <label for="applicationMethod" className="block text-sm font-medium text-gray-700 mb-1">Application Method:</label>
                                <input type="text" name="applicationMethod" defaultValue={updateSelectedVisa?.applicationMethod} placeholder="e.g., Online" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Submit Button --> */}
                            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full">Update Visa</button>
                        </form>
                    </div>




                    {/* <div className="text-center">
                        <form method="dialog">
                            <button className="btn btn-wide">Close</button>
                        </form>
                    </div> */}
                </div>
            </dialog>
        </div>
    )
}

export default MyAddedVisaModal

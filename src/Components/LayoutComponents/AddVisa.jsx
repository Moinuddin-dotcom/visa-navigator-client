import React, { useContext } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { AuthContext } from '../Provider/AuthProvider'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async'

const AddVisa = () => {

    const { user } = useContext(AuthContext)
    // console.log(user)

    const handleAddVisa = async (e) => {
        e.preventDefault();
        // console.log('Form submitted');

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

        const mainForm = {
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
            email: user?.email
        }
        // console.log(mainForm)


        const res = await fetch("https://server-side-a10.vercel.app/visa",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mainForm)
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


    }






    return (
        <div>
            <Helmet>
                <title>Visa | Add Visa</title>
            </Helmet>
            <nav>
                <Navbar />
            </nav>
            <main className='bg-gradient-to-b from-[#0C6478] from-10% via-[#09D1C7] via-30% to-[#80EE98] to-80%'>
                {/* input filed  */}
                <section className="bg-gradient-to-b from-[#0C6478] from-10% via-[#09D1C7] via-30% to-[#0C6478] to-80% flex items-center justify-center min-h-screen">
                    <div className="p-8 rounded-lg shadow-purple-600 shadow-2xl max-w-lg w-full text-black">
                        <h1 className="text-3xl font-bold mb-6 text-center text-white animate__animated animate__tada">Add Visa</h1>
                        <form onSubmit={handleAddVisa} >
                            {/* <!-- Country Image --> */}
                            <div className="mb-4">
                                <label for="countryImage" className="block text-sm font-medium text-black mb-1">Country Image (URL):</label>
                                <input type="text" name="countryImage" placeholder="Enter image URL" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Country Name --> */}
                            <div className="mb-4">
                                <label for="countryName" className="block text-sm font-medium text-black mb-1">Country Name:</label>
                                <input type="text" name="countryName" placeholder="Enter country name" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Visa Type --> */}
                            <div className="mb-4">
                                <label for="visaType" className="block text-sm font-medium text-black mb-1">Visa Type:</label>
                                <select name="visaType" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
                                    <option value="Tourist Visa">Tourist Visa</option>
                                    <option value="Student Visa">Student Visa</option>
                                    <option value="Official Visa">Official Visa</option>
                                </select>
                            </div>

                            {/* <!-- Processing Time --> */}
                            <div className="mb-4">
                                <label for="processingTime" className="block text-sm font-medium text-black mb-1">Processing Time:</label>
                                <input type="text" name="processingTime" placeholder="e.g., 7-10 days" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Required Documents --> */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-black mb-1">Required Documents:</label>
                                <div>
                                    <input type="checkbox" name="documents" value="Valid passport" className="mr-2" />
                                    <label for="passport" className="text-black">Valid passport</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="documents" value="Visa application form" className="mr-2" />
                                    <label for="visaForm" className="text-black">Visa application form</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="documents" value="Recent passport-sized photograph" className="mr-2" />
                                    <label for="photo" className="text-black">Recent passport-sized photograph</label>
                                </div>
                            </div>

                            {/* <!-- Description --> */}
                            <div className="mb-4">
                                <label for="description" className="block text-sm font-medium text-black mb-1">Description:</label>
                                <textarea name="description" rows="4" placeholder="Enter a description" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required></textarea>
                            </div>

                            {/* <!-- Age Restriction --> */}
                            <div className="mb-4">
                                <label for="ageRestriction" className="block text-sm font-medium text-black mb-1">Age Restriction:</label>
                                <input type="number" name="ageRestriction" placeholder="Enter minimum age" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Fee --> */}
                            <div className="mb-4">
                                <label for="fee" className="block text-sm font-medium text-black mb-1">Fee:</label>
                                <input type="number" name="fee" placeholder="Enter fee amount" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Validity --> */}
                            <div className="mb-4">
                                <label for="validity" className="block text-sm font-medium text-black mb-1">Validity:</label>
                                <input type="text" name="validity" placeholder="e.g., 6 months" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Application Method --> */}
                            <div className="mb-6">
                                <label for="applicationMethod" className="block text-sm font-medium text-black mb-1">Application Method:</label>
                                <input type="text" name="applicationMethod" placeholder="e.g., Online" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Submit Button --> */}
                            <button type="submit" className="py-2 px-4 rounded-md w-full bg-gradient-to-r from-[#0C5776] to-[#001C44] text-black">Add Visa</button>
                        </form>
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default AddVisa

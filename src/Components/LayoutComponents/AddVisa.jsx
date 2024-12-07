import React, { useContext } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { AuthContext } from '../Provider/AuthProvider'
import Swal from 'sweetalert2'

const AddVisa = () => {

    const { user } = useContext(AuthContext)
    console.log(user)

    const handleAddVisa = async (e) => {
        e.preventDefault();
        console.log('Form submitted');

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
        console.log(mainForm)


        const res = await fetch("http://localhost:8000/visa",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mainForm)
            })
        const data = await res.json()
        console.log(data)
        if (data.insertedId) {
            Swal.fire({
                title: 'success!',
                text: 'Visa added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            form.reset();
            // toast.success("Visa added successfully")
        }



        // e.resete()

    }






    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main>
                <h1 className='font-bold text-4xl text-center py-10'>Add Visa Here (Private) </h1>
                {/* input filed  */}
                <section className="bg-gray-900 flex items-center justify-center min-h-screen">
                    <div className="bg-gray-400 p-8 rounded-lg shadow-lg max-w-lg w-full">
                        <h1 className="text-2xl font-bold mb-6 text-center">Add Visa</h1>
                        <form onSubmit={handleAddVisa} >
                            {/* <!-- Country Image --> */}
                            <div className="mb-4">
                                <label for="countryImage" className="block text-sm font-medium text-gray-700 mb-1">Country Image (URL):</label>
                                <input type="text" name="countryImage" placeholder="Enter image URL" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Country Name --> */}
                            <div className="mb-4">
                                <label for="countryName" className="block text-sm font-medium text-gray-700 mb-1">Country Name:</label>
                                <input type="text" name="countryName" placeholder="Enter country name" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Visa Type --> */}
                            <div className="mb-4">
                                <label for="visaType" className="block text-sm font-medium text-gray-700 mb-1">Visa Type:</label>
                                <select name="visaType" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
                                    <option value="Tourist Visa">Tourist Visa</option>
                                    <option value="Student Visa">Student Visa</option>
                                    <option value="Official Visa">Official Visa</option>
                                </select>
                            </div>

                            {/* <!-- Processing Time --> */}
                            <div className="mb-4">
                                <label for="processingTime" className="block text-sm font-medium text-gray-700 mb-1">Processing Time:</label>
                                <input type="text" name="processingTime" placeholder="e.g., 7-10 days" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Required Documents --> */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Required Documents:</label>
                                <div>
                                    <input type="checkbox" name="documents" value="Valid passport" className="mr-2" />
                                    <label for="passport" className="text-gray-700">Valid passport</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="documents" value="Visa application form" className="mr-2" />
                                    <label for="visaForm" className="text-gray-700">Visa application form</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="documents" value="Recent passport-sized photograph" className="mr-2" />
                                    <label for="photo" className="text-gray-700">Recent passport-sized photograph</label>
                                </div>
                            </div>

                            {/* <!-- Description --> */}
                            <div className="mb-4">
                                <label for="description" className="block text-sm font-medium text-gray-700 mb-1">Description:</label>
                                <textarea name="description" rows="4" placeholder="Enter a description" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required></textarea>
                            </div>

                            {/* <!-- Age Restriction --> */}
                            <div className="mb-4">
                                <label for="ageRestriction" className="block text-sm font-medium text-gray-700 mb-1">Age Restriction:</label>
                                <input type="number" name="ageRestriction" placeholder="Enter minimum age" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Fee --> */}
                            <div className="mb-4">
                                <label for="fee" className="block text-sm font-medium text-gray-700 mb-1">Fee:</label>
                                <input type="number" name="fee" placeholder="Enter fee amount" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Validity --> */}
                            <div className="mb-4">
                                <label for="validity" className="block text-sm font-medium text-gray-700 mb-1">Validity:</label>
                                <input type="text" name="validity" placeholder="e.g., 6 months" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Application Method --> */}
                            <div className="mb-6">
                                <label for="applicationMethod" className="block text-sm font-medium text-gray-700 mb-1">Application Method:</label>
                                <input type="text" name="applicationMethod" placeholder="e.g., Online" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                            </div>

                            {/* <!-- Submit Button --> */}
                            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full">Add Visa</button>
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

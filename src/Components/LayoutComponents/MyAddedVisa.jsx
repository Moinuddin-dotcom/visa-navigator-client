
import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';



const MyAddedVisa = () => {
    // const myAddedVisaData = useLoaderData()
    const { user } = useContext(AuthContext)
    const [loginuserVisa, setLoginuserVisa] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            // const res = await fetch(`http://localhost:8000/visa?email${user.email}`)
            // const data = await res.json()
            // console.log(data)
            // fetch(`http://localhost:8000/visa?email${user.email}`)
            fetch(`http://localhost:8000/visa?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setLoginuserVisa(data);
                    // console.log(data);
                    // setLoading(false);
                })
        }
    }, [user])










    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main>
                <h2>My Added Visas</h2>

                {loginuserVisa.map((visa) => (
                    <div key={visa._id} className="visa-card">
                        <img src={visa.countryImage} alt={visa.country} />
                        <h3>{visa.country}</h3>
                        <p>Visa Type: {visa.visa_type}</p>
                        <p>Processing Time: {visa.processing_time}</p>
                        <p>Fee: {visa.fee}</p>
                        <p>Validity: {visa.validity}</p>
                        <p>Application Method: {visa.application_method}</p>
                        {/* <button onClick={() => setSelectedVisa(visa)}>Update</button>
                        <button onClick={() => handleDelete(visa._id)}>Delete</button> */}
                    </div>
                ))}

            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default MyAddedVisa

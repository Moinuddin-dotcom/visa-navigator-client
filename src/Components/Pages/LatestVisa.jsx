import React from 'react'
import { Link } from 'react-router-dom'
// import { useLoaderData } from 'react-router-dom'

const LatestVisa = ({ countryCard }) => {
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
    } = countryCard


    return (
        <div>

            <div className="card">
                <div className="card bg-base-100 shadow-xl border-2">
                    <figure className="p-2 ">
                        <img
                            src={countryImage}
                            alt="countryImage"
                            className="rounded-xl w-full h-[350px]" />
                    </figure>
                    <div className="card-body items-start text-center text-gray-500">
                        <h2 className="card-title text-black">{countryName} </h2>
                        <p> Visa Type:  {visaType} </p>
                        <p> Processing Time:  {processingTime} </p>
                        <p> Fee:  {fee} </p>
                        <p> Validity:  {validity} </p>
                        <p> ApplicationMethod:  {applicationMethod} </p>
                        <div className="card-actions">
                            <Link to={`/visadetails/${_id}`} className="btn btn-primary">See Details</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LatestVisa

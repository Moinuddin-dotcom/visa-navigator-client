import React from 'react'
import { TbListDetails } from 'react-icons/tb'
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
                <div className="card bg-[#0C6478] shadow-purple-600 shadow-2xl">
                    <figure className=" ">
                        <img
                            src={countryImage}
                            alt="countryImage"
                            className="rounded-t-xl w-full h-[250px]" />
                    </figure>
                    <div className="card-body items-start text-center text-white">
                        <h2 className="card-title text-white underline">{countryName} </h2>
                        <p> Visa Type:  {visaType} </p>
                        <p> Processing Time:  {processingTime} </p>
                        <p> Fee:  {fee} </p>
                        <p> Validity:  {validity} </p>
                        <p> ApplicationMethod:{applicationMethod} </p>
                        <div className="card-actions">
                            <Link to={`/visadetails/${_id}`} className="btn bg-gradient-to-r from-[#0C5776] to-[#001C44] text-white">
                            <TbListDetails className='text-lg' />
                            See Details</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LatestVisa

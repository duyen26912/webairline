import React, { useState } from 'react'
import "./subscribers.css"
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

const Subscribers = () => {
    const [tripType, setTripType] = useState('round-trip');
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        departDate: '',
        returnDate: '',
        adults: 1,
        children: 0
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSearch = () => {
        // Handle search logic here
        console.log('Searching with:', formData);
    };

    return (
        <section className='home'>
            <div className="secContainer container">
                <div className="homeText">
                    <h1 className="title">
                        Elevate Your Journey with QAirline
                    </h1>
                    <p className="subTitle">
                        From takeoff to landing, we make every moment in the sky unforgettable.
                    </p>
                    <button className='btn'>
                        <a href="#">Book Now</a>
                    </button>
                </div>

                <div className="tripType">
                    <button
                        className={tripType === 'one-way' ? 'active' : ''}
                        onClick={() => setTripType('one-way')}
                    >
                        One Way
                    </button>
                    <button
                        className={tripType === 'round-trip' ? 'active' : ''}
                        onClick={() => setTripType('round-trip')}
                    >
                        Round Trip
                    </button>
                </div>

                <div className="homeCard grid">
                    <div className="fromDiv">
                        <label htmlFor="from"><FaPlaneDeparture className="icon" /> From</label>
                        <input
                            type="text"
                            placeholder='City or Airport'
                            name="from"
                            value={formData.from}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="toDiv">
                        <label htmlFor="to"><FaPlaneArrival className="icon" /> To</label>
                        <input
                            type="text"
                            placeholder='City or Airport'
                            name="to"
                            value={formData.to}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="departDiv">
                        <label htmlFor="departDate"><FaCalendarAlt className="icon" /> Departure Date</label>
                        <input
                            type="date"
                            name="departDate"
                            value={formData.departDate}
                            onChange={handleInputChange}
                        />
                    </div>

                    {tripType === 'round-trip' && (
                        <div className="returnDiv">
                            <label htmlFor="returnDate"><FaCalendarAlt className="icon" /> Return Date</label>
                            <input
                                type="date"
                                name="returnDate"
                                value={formData.returnDate}
                                onChange={handleInputChange}
                            />
                        </div>
                    )}

                    <div className="adultsDiv">
                        <label htmlFor="adults"><FiUsers className="icon" /> Adults</label>
                        <input
                            type="number"
                            placeholder='1'
                            min="1"
                            max="10"
                            name="adults"
                            value={formData.adults}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="childrenDiv">
                        <label htmlFor="children"><FiUsers className="icon" /> Children</label>
                        <input
                            type="number"
                            placeholder='0'
                            min="0"
                            max="10"
                            name="children"
                            value={formData.children}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button className='btn' onClick={handleSearch}>
                        Search Flights
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Subscribers
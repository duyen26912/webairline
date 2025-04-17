import React, { useState } from 'react';
import './home.scss';
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { GoArrowSwitch } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import AirportInput from '../AirportInput';

const Home = () => {
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

    // Special handling for airport inputs
    if ((name === 'from' || name === 'to') && value.includes('(') && value.includes(')')) {
      const codeMatch = value.match(/\(([A-Z]{3})\)/);
      if (codeMatch) {
        setFormData(prev => ({
          ...prev,
          [name]: codeMatch[1] // Store only the airport code
        }));
        return;
      }
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
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
          <button className='btn bookNowBtn'>
            <a href="#">Book Now</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div className="tripTypeTop">
            <button
              className={tripType === 'round-trip' ? 'active' : ''}
              onClick={() => setTripType('round-trip')}
            >
              <GoArrowSwitch className="icon" /> Round Trip
            </button>
            <button
              className={tripType === 'one-way' ? 'active' : ''}
              onClick={() => setTripType('one-way')}
            >
              <GoArrowRight className="icon" /> One Way
            </button>
          </div>

          <AirportInput
            label="From"
            icon={FaPlaneDeparture}
            name="from"
            value={formData.from}
            onChange={handleInputChange}
          />

          <AirportInput
            label="To"
            icon={FaPlaneArrival}
            name="to"
            value={formData.to}
            onChange={handleInputChange}
          />

          <div className="departDiv">
            <label htmlFor="departDate"><FaCalendarAlt className="icon" /> Departure</label>
            <input
              type="date"
              name="departDate"
              value={formData.departDate}
              onChange={handleInputChange}
            />
          </div>

          {tripType === 'round-trip' && (
            <div className="returnDiv">
              <label htmlFor="returnDate"><FaCalendarAlt className="icon" /> Return</label>
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleInputChange}
              />
            </div>
          )}

          <div className="passengersDiv">
            <label htmlFor="passengers"><FiUsers className="icon" /> Passengers</label>
            <div className="passengerInputs">
              <div className="passengerType">
                <label>Adults (12+ yrs)</label>
                <input
                  type="number"
                  name="adults"
                  min="1"
                  max="9"
                  value={formData.adults}
                  onChange={handleInputChange}
                />
              </div>
              <div className="passengerType">
                <label>Children (2-11 yrs)</label>
                <input
                  type="number"
                  name="children"
                  min="0"
                  max="8"
                  value={formData.children}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <button className='btn searchBtn' onClick={handleSubmit}>
            Search Flights
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
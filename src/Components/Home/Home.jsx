import React from 'react'
import "./home.css"
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

const Home = () => {

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

        <div className="homeCard gird">

          <div className="fromDiv">
            <label htmlFor="from"> <FaPlaneDeparture className="icon" />From</label>
            <input type="text" placeholder='City or Airport' />
          </div>

          <div className="toDiv">
            <label htmlFor="to"> <FaPlaneArrival className="icon" />To</label>
            <input type="text" placeholder='City or Airport' />
          </div>

          <div className="departDiv">
            <label htmlFor="departure"> <FaCalendarAlt className="icon" /> Departure Date</label>
            <input type="date" />
          </div>

          {/* <div className="returnDiv">
            <label htmlFor="return"> <FaCalendarAlt className="icon" /> Return Date</label>
            <input type="date" />
          </div>

          <div className="passengerDiv">
            <label htmlFor="passengers"> <FiUsers className="icon" />Passengers</label>
            <input type="number" placeholder='1' min="1" />
          </div>

          <div className="classDiv">
            <label htmlFor="class"><FiChevronDown className="icon" /> Class</label>
            <select>
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div> */}

          <button className='btn' >
            Search Flights
          </button>

        </div>

      </div>
    </section>

  )
}

export default Home

import React from 'react'
import "./home.scss"
import "./home.css"
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
            <a href="../Search/Search.jsx">Book Now</a>
          </button>
        </div>

      </div>
    </section>

  )
}

export default Home

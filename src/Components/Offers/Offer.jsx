import React from 'react'
import "./offer.css"
import { MdFlight, MdAirlineSeatReclineExtra, MdLuggage, MdAirplanemodeActive } from 'react-icons/md'
import { FaWifi, FaUtensils } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'

// Import images
import img1 from '../../Assets/airlines.jpg'
import img2 from '../../Assets/bamboo.jpg'
import img3 from '../../Assets/vietjet.png'

const Offers = [
    {
        id: 1,
        imgSrc: img1,
        airline: "Vietnam Airlines",
        route: 'Hà Nội - TP.HCM',
        departure: '08:00 AM',
        arrival: '10:00 AM',
        price: '1,500,000 VND',
        duration: '2h',
        stops: 'Bay thẳng'
    },
    {
        id: 2,
        imgSrc: img2,
        airline: "Bamboo Airways",
        route: 'Đà Nẵng - Hải Phòng',
        departure: '10:30 AM',
        arrival: '12:15 PM',
        price: '1,800,000 VND',
        duration: '1h45m',
        stops: 'Bay thẳng'
    },
    {
        id: 3,
        imgSrc: img3,
        airline: "Vietjet Air",
        route: 'Hà Nội - Đà Lạt',
        departure: '17:00 PM',
        arrival: '18:30 PM',
        price: '1,200,000 VND',
        duration: '1h30m',
        stops: 'Bay thẳng'
    },
]

const Offer = () => {
    return (
        <section className='offer container section'>
            <div className="secContainer">
                <div className="secIntro">
                    <h2 className="secTitle">
                        Ưu Đãi Chuyến Bay
                    </h2>
                    <p>
                        Khám phá các chuyến bay với giá tốt nhất đến nhiều điểm đến hấp dẫn
                    </p>
                </div>

                <div className="mainContent grid">
                    {Offers.map(({ id, imgSrc, airline, route, departure, arrival, price, duration, stops }) => (
                        <div className="singleOffer" key={id}>
                            <div className="destImage">
                                <img src={imgSrc} alt={airline} />
                                <span className="discount">
                                    Giá tốt
                                </span>
                            </div>

                            <div className="offerBody">
                                <div className="price flex">
                                    <h4>{price}</h4>
                                    <span className="status">{airline}</span>
                                </div>

                                <div className="routeInfo">
                                    <h3>{route}</h3>
                                    <div className="timeInfo flex">
                                        <div>
                                            <small>Khởi hành</small>
                                            <p>{departure}</p>
                                        </div>
                                        <div>
                                            <small>Đến nơi</small>
                                            <p>{arrival}</p>
                                        </div>
                                        <div>
                                            <small>Thời gian</small>
                                            <p>{duration}</p>
                                        </div>
                                    </div>
                                    {/* <small className="stops">{stops}</small> */}
                                </div>

                                <div className='amenities flex'>
                                    <div className="singleAmenity flex">
                                        <MdAirlineSeatReclineExtra className="icon" />
                                        <small>Ghế thoải mái</small>
                                    </div>
                                    <div className="singleAmenity flex">
                                        <MdLuggage className="icon" />
                                        <small>Hành lý 20kg</small>
                                    </div>
                                    <div className="singleAmenity flex">
                                        <FaWifi className="icon" />
                                        <small>Wi-fi</small>
                                    </div>
                                    <div className="singleAmenity flex">
                                        <FaUtensils className="icon" />
                                        <small>Đồ ăn</small>
                                    </div>
                                </div>

                                <button className='btn flex'>
                                    Đặt ngay
                                    <BsArrowRightShort className='icon' />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Offer
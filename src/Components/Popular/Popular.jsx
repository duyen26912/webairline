import React from "react";
import "./popular.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

//import the images
import img1 from "../../Assets/hanoi.jpg";
import img2 from "../../Assets/nhatrang.jpg";
import img3 from "../../Assets/hue.jpg";
import img4 from "../../Assets/dalat.jpg";
import img5 from "../../Assets/danang.jpg";
import img6 from "../../Assets/hochiminh.jpg";
import img7 from "../../Assets/phuquoc.jpg";
import img8 from "../../Assets/gialai.jpg";
//  so now we are going to use a high order qrray method to display all the destination using Map.
// To do so we nees to list all the destination in one array "Data" and later we shall call each destination by index/id

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: "Ho Guom",
        location: "Ha Noi",
        from: "HCM to Ha Noi",
        date: "07/05/2025",
        money: "1.567.000VND",
        grade: "CULTURAL RELAX",
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: "Nha Trang",
        location: "Khanh Hoa",
        from: "HCM to Nha Trang",
        date: "17/04/2025",
        money: "811.000VND",
        grade: "CULTURAL RELAX",
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: "Cung Dinh Hue",
        location: "Hue",
        from: "HCM to Hue",
        date: "12/06/2025",
        money: "1.135.000VND",
        grade: "CULTURAL RELAX",
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: "Da Lat",
        location: "Lam Dong",
        from: "HCM to Da Lat",
        date: "22/05/2025",
        money: "1.161.000VND",
        grade: "CULTURAL RELAX",
    },

    {
        id: 5,
        imgSrc: img5,
        destTitle: "Cau Rong",
        location: "Da Nang",
        from: "Ha Noi to Da Nang",
        date: "19/06/2025",
        money: "1.405.000VND",
        grade: "CULTURAL RELAX",
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: "Ben Thanh Market",
        location: "Ho Chi Minh",
        from: "Ha Noi to HCM",
        date: "13/05/2025",
        money: "1.567.000VND",
        grade: "CULTURAL RELAX",
    },

    {
        id: 7,
        imgSrc: img7,
        destTitle: "Phu Quoc",
        location: "Kien Giang",
        from: "Ha Noi to Phu Quoc",
        date: "17/08/2025",
        money: "1.567.000VND",
        grade: "CULTURAL RELAX",
    },

    {
        id: 8,
        imgSrc: img8,
        destTitle: "Pleiku",
        location: "Gia Lai",
        from: "Ha Noi to Pleiku",
        date: "23/07/2025",
        money: "1.696.000VND",
        grade: "CULTURAL RELAX",
    },
];
const Popular = () => {
    return (
        <section className="popular section container">
            <div className="secContainer">
                <div className="secHeader flex">
                    <div className="textDiv">
                        <h2 className="secTitle">Popular Flights</h2>
                        <p>
                            From culturally rich cities to breathtaking natural wonders, discover the finest of Vietnam!
                        </p>
                    </div>

                    <div className="iconsDiv flex">
                        <BsArrowLeftShort className="icon leftIcon" />
                        <BsArrowRightShort className="icon" />
                    </div>
                </div>

                <div className="mainContent grid">
                    {Data.map(({ id, imgSrc, destTitle, location, from, date, money, grade }) => {
                        return (
                            <div className="singleDestination">
                                <div className="destImage">
                                    <img src={imgSrc} alt="Ho Guom in Hanoi" />

                                    <div className="overlayInfo">
                                        <h3>{destTitle}</h3>
                                        <p>{location}</p>
                                        <BsArrowRightShort className="icon" />
                                    </div>
                                </div>

                                <div className="destFooter">
                                    <div className="number">0{id}</div>

                                    <div className="destText">
                                        <h4>{from}</h4>
                                        <p>{date}</p>

                                        <div className="price-row">
                                            <p className="economy-text">Economy from</p>
                                            <h6>{money}</h6>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Popular;

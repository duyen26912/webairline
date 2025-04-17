import React from 'react'
import './blog.css'
import { BsArrowRightShort } from "react-icons/bs";

//image
import img1 from "../../Assets/image12.jpg";
import img2 from "../../Assets/image13.jpg";
import img3 from "../../Assets/image14.jpg";
import img4 from "../../Assets/image15.jpg";

//So guys here also we are going to use the Map method to display our posts

const Post = [
    {
        id: 1,
        imgSrc: img1,
        title: 'Best Country in Fast Africa',
        desc: 'When Kenya claimed its independence from the U.K.in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.',
    },
    {
        id: 2,
        imgSrc: img2,
        title: 'Best Country in Fast Africa',
        desc: 'When Kenya claimed its independence from the U.K.in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.',
    },
    {
        id: 3,
        imgSrc: img3,
        title: 'Best Country in Fast Africa',
        desc: 'When Kenya claimed its independence from the U.K.in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.',
    },
    {
        id: 4,
        imgSrc: img4,
        title: 'Best Country in Fast Africa',
        desc: 'When Kenya claimed its independence from the U.K.in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.',
    },

]

const Blog = () => {
    return (
        <div>
            <section className='blog container section'>
                <div className="secContainer">

                    <div className="secIntro">
                        <h2 className='secTitle'>Our Best Blog?</h2>
                        <p>An insight to the incredible experince in the world</p>
                    </div>

                    <div className="mainContainer grid">
                        {
                            Post.map(({ id, imgSrc, title, desc }) => {
                                return (
                                    <div className="singlePost grid">

                                        <div className="imgDiv">
                                            <img src={imgSrc} alt={title} />
                                        </div>

                                        <div className="postDetails">
                                            <h3>{title}</h3>
                                            <p>{ desc}</p>
                                        </div>

                                        <a href="#" className='flex'>
                                            Read More
                                            <BsArrowRightShort className='icon' />
                                        </a>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog

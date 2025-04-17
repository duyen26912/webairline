import React from 'react'
import './about.css'

//Image
import img from '../../Assets/customer.png';
import video from '../../Assets/Welcome to Vietnam.mp4'


const About = () => {
  return (
      <section className='about section'>
          <div className="secContainer">
              <h2 className="title">
                  Why Hikings?
              </h2>

              <div className="mainContent container grid">
                  <div className="singleItem">
                      <img src={img} alt="Image Name" />

                      <h3>100+ Mountains</h3>

                      <p>Research showa that a chance to break away from the normal 
                        rhythms of daily life reduces stress and improves heath and well-being
                      </p>
                  </div>

                  <div className="singleItem">
                      <img src={img} alt="Image Name" />

                      <h3>1000+ Hikings</h3>

                      <p>Research showa that a chance to break away from the normal
                          rhythms of daily life reduces stress and improves heath and well-being
                      </p>
                  </div>

                  <div className="singleItem">
                      <img src={img} alt="Image Name" />

                      <h3>2000+ Customer</h3>

                      <p>Research showa that a chance to break away from the normal
                          rhythms of daily life reduces stress and improves heath and well-being
                      </p>
                  </div>
                  
              </div>

              <div className="videoCard container">
                  <div className="cardContent grid">
                      
                      <div className="cardText">
                          <h2>
                              Wonderful House experience nin there!
                          </h2>
                          <p>
                              The Adventure subranking is based on an 
                              equally weighted average of scores from
                              five country.
                          </p>
                      </div>

                      <div className="cardVideo">
                          <video src={video} autoPlay loop muted type='video/mp4'></video>
                      </div>
                  </div>
              </div>

          </div>
    </section>
  )
}

export default About
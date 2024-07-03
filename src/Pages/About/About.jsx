import React from "react";
import "../About/About.css";

import Aboutcomponets from "../../Components/Aboutcomponets/Aboutcomponets";
function About() {
  return (
    <div className="about-box">
      <div className="container  ">
        {/* <div className="row">
        <div className="col-md-6">
          <div className="losictict-box">
            <h5  className="haed-check">About Us</h5>
            <p className="logistics-text">
              Fast Forward Logistics is a leading player in the world of
              logistics and supply chain management. With a strategic presence
              at 38 Paradise St, Birmingham, United Kingdom, we are committed to
              providing seamless and efficient logistics solutions that enable
              businesses to thrive.
            </p>
            <button className="read-btn">Read More</button>
          </div>
        </div>
        
        <div className="col-md-6">
        <img src={tomfisk} className="to-image"/>
        </div>
 
      </div> */}
        <Aboutcomponets />
        <div className="text-box">
          <div className="">
            <h3 className="hread-text">Mission</h3>
            <p className="text-mission">
              Our mission at Fast Forward Logistics is to empower businesses of
              all sizes to navigate the complexities of global supply chains
              with ease. We are dedicated to delivering timely, cost-effective,
              and sustainable logistics solutions that exceed our customers'
              expectations. <br />
             
            </p>
            <p className="mt-1 text-mission">
                We aim to build enduring partnerships with our clients by
                offering personalized services that optimize their operations
                and drive growth. Our commitment to innovation and environmental
                sustainability is at the core of everything we do.
              </p>
          </div>
        </div>
        <div className="text-box">
          <div className="">
            <h3 className="hread-text">Vision</h3>
            <p className="text-mission">
              Our vision is to be the preferred logistics partner globally,
              recognized for our unwavering commitment to excellence,
              reliability, and innovation. We envision a future where businesses
              can expand seamlessly into new markets, confident that Fast
              Forward Logistics will always provide the most efficient and
              sustainable logistics solutions.
              <br />
           
            </p>   <p className="mt-1 text-mission">
                As we move forward, we aspire to set new industry standards,
                reduce our environmental footprint, and contribute positively to
                the communities we serve. Fast Forward Logistics is dedicated to
                shaping a brighter future for businesses and society through the
                power of logistics.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

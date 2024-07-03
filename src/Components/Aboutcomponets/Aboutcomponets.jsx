import React from 'react'


function Aboutcomponets() {
  return (
    <>
          <div className="container py-2 losi-box">
      <div className="row">
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
        <video autoPlay loop muted className="to-image" >
        <source src="https://videos.pexels.com/video-files/3840442/3840442-uhd_2560_1440_30fps.mp4" type="video/mp4"/>
      </video>
        {/* <img src={tomfisk} className="to-image"/> */}
        </div>
 
      </div>
    </div>
    </>
  )
}

export default Aboutcomponets
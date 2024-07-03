import React from 'react'
import "../Shipment&SecurityBoxes/TrackShipment.css"

function TrackShipment() {
  return (
    <>
    <div className='image-box'>
        <div className='box-Input'>
            <div className=''>
                <h4 className='track-text'>Track Your Shipment</h4>
                <p className='below-text'>Please enter your tracking number below to track your order.</p>
                <div className='below-bnt'>
                <input class="form-control form-control-lg inputBOx" type="text"placeholder='Enter Your Tracking number ' aria-label=".form-control-lg example"></input>
                <button className='btn-track ms-3'>Track</button>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default TrackShipment

import React from 'react'
import "../Shipment&SecurityBoxes/TrackShipment.css"
function CheckYourSafety() {
  return (
    <div className='checkImage-box'>
        <div className='box-Input'>
            <div className=''>
                <h4 className='track-text'>Check Your Safety Deposit Box
                </h4>
                <p className='below-text'>Please enter a valid box number and security code to check your box contents.</p>
                <div className=''>
                <input class="form-control form-control-lg inputBOx inputText" type="text"placeholder='Box Number' aria-label=".form-control-lg example"></input>
                <input class="form-control form-control-lg inputBOx mt-2 inputText" type="text"placeholder='Secrity Code ' aria-label=".form-control-lg example"></input>
                <input class="form-control form-control-lg inputBOx mt-2 inputText" type="text"placeholder='Access Box Contents ' aria-label=".form-control-lg example"></input>
                {/* <button className='btn-track ms-3'>Track</button> */}
                </div>
            </div>

        </div>
    </div>
  )
}

export default CheckYourSafety
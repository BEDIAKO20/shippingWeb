import React from 'react'
import { FaCheck } from "react-icons/fa";
import "../PreBox/PreBox.css"

function PreBox() {
  return (
    <>
    <div className='container preBox'>
        <div className='row '>
            <div className=' col-md-3'>
            <div className='priBox'>
                <p className='title-text'>Basic</p>
                <p  className='mony-text'>$219.99/month</p>
                <div>
                    <p><FaCheck />Per Mile</p>
                    <p><FaCheck />2000kg load</p>
                    <p><FaCheck />850kg/pallet</p>
                    <p><FaCheck />Warehousing</p>
                    <p><FaCheck />Free Pasckging</p>
                    <p><FaCheck />24/7 support</p>
                </div>
            </div>
            </div>
            <div className=' col-md-3'>
            <div className='priBox'>
                <p  className='title-text'> Standard</p>
                <p className='mony-text'>$520.99/month</p>
                <div>
                    <p><FaCheck />Per Mile</p>
                    <p><FaCheck />2000kg load</p>
                    <p><FaCheck />850kg/pallet</p>
                    <p><FaCheck />Warehousing</p>
                    <p><FaCheck />Free Pasckging</p>
                    <p><FaCheck />24/7 support</p>
                </div>
            </div>
            </div>
            <div className=' col-md-3'>
            <div className='priBox'>
                <p  className='title-text'>Premium</p>
                <p  className='mony-text'>$980.99/month</p>
                <div>
                    <p><FaCheck />Per Mile</p>
                    <p><FaCheck />2000kg load</p>
                    <p><FaCheck />850kg/pallet</p>
                    <p><FaCheck />Warehousing</p>
                    <p><FaCheck />Free Pasckging</p>
                    <p><FaCheck />24/7 support</p>
                </div>
            </div>
            </div> 

        </div>

    </div>
    </>
  )
}

export default PreBox

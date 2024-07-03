import React from 'react'
import Marquee from "react-fast-marquee";
import aramex from "../../assets/aramex.png"
import dhl from "../../assets/dhl.png"
import ems from "../../assets/ems.png"
import ipata from "../../assets/ipata.png"
import "../LogoImage/LogoImage.css"

function LogoImage() {
  return (
    <>
    <div className='mt-5 py-5'>
    <Marquee
        direction="right"
        speed={90}
        gradient={true}
        gradientColor={[455, 255, 255]}
        pauseOnHover={true}
      >
        <img src={aramex} className=''/>
        <img src={dhl} className='dhl-img'/>
        <img src={ems} className=''/>
        <img src={ipata} className=''/>
      </Marquee>
    </div>
     
    </>
  )
}

export default LogoImage
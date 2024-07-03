import React from 'react'
import BackgroundVideo from '../../Components/BackgroundVideo/BackgroundVideo'
import About from '../About/About'
import TrackYourShipment from '../../Components/TrackYourShipment/TrackYourShipment'
import CheckDeposit from '../../Components/CheckDeposit /CheckDeposit'
import Aboutcomponets from '../../Components/Aboutcomponets/Aboutcomponets'
import PreBox from '../../Components/PreBox/PreBox'
import LogoImage from '../../Components/LogoImage/LogoImage'
import WhyChoouse from '../../Components/WhyChoouse/WhyChoouse'
import Services from '../Services/Services'


function Home() {
  return (
    <div className='mt-'>
      <BackgroundVideo/>
   <Aboutcomponets/>
      <TrackYourShipment/>
      <CheckDeposit/>
      <WhyChoouse/>
      <PreBox/>
      <LogoImage/>
      <Services/>
    </div>
  )
}

export default Home
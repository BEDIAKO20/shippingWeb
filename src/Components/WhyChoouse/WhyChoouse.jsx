import React from "react";
import "../WhyChoouse/WhyChoouse.css";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
function WhyChoouse() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <h3 className="text-why">WHY CHOOSE US</h3>
            <p className="text-prov">
              We provide shipment consolidation services to facilitate the
              movement of your freight. with us you can enhance container
              utilization and simplify your supply chain, resulting in
              cost-effecitvesss and improved efficieny.{" "}
            </p>
          </div>
          <div className="col-md-3">
            <div className="choose-Box my-4">
              <AiFillSafetyCertificate size={50} />
            </div>
            <p className="titil-Choose">SAFE AND RELIABLE</p>
            <p className="titl-text">your assets are insured with us independently aganinst physical loss, damage or theft.Thus you are rest accured your package is safe and will be delivered safely.</p>
          </div>
          <div className="col-md-3">
            <div className="choose-Box my-4">
              <TbTruckDelivery size={50} />
              </div>
              <p className="titil-Choose">SAFE AND RELIABLE</p>
              <p className="titl-text">your assets are insured with us independently aganinst physical loss, damage or theft.Thus you are rest accured your package is safe and will be delivered safely.</p>
        
          </div>
          <div className="col-md-3">
            <div className="choose-Box my-4">
            <GrMapLocation size={50} />
            </div>
            <p className="titil-Choose">SAFE AND RELIABLE</p>
            <p className="titl-text">your assets are insured with us independently aganinst physical loss, damage or theft.Thus you are rest accured your package is safe and will be delivered safely.</p>
          
            
          </div>
          <div className="col-md-3">
            <div className="choose-Box my-4">
              <BiSupport size={50} />
              </div>
              <p className="titil-Choose">SAFE AND RELIABLE</p>
              <p className="titl-text">your assets are insured with us independently aganinst physical loss, damage or theft.Thus you are rest accured your package is safe and will be delivered safely.</p>
            
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
}

export default WhyChoouse;

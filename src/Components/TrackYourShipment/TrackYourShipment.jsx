import React from "react";


function TrackYourShipment() {
  return (
    <div className="container py-2 losi-box">
      <div className="row">
        <div className="col-md-6">
          <img src="https://images.pexels.com/photos/6169660/pexels-photo-6169660.jpeg?auto=compress&cs=tinysrgb&w=800" className="to-image" />
        </div>
        <div className="col-md-6">
          <div className="losictict-box">
            <h5  className="haed-check">Track Your Shipment</h5>
            <p className="logistics-text">
              At Fast Forward Logistics, we understand the importance of
              transparency and reliability in shipping. Our state-of-the-art
              tracking system allows you to monitor your shipments in real-time,
              providing peace of mind and ensuring on-time deliveries.
            </p>
            <button className="read-btn">Track</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackYourShipment;

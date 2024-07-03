import React from "react";



function CheckDeposit() {
  return (
    <div className="container py-2 losi-box">
      <div className="row">
        <div className="col-md-6">
          <div className="losictict-box">
            <h5 className="haed-check">Check Deposit Box</h5>
            <p className="logistics-text">
              Your security is our priority. Fast Forward Logistics offers a
              secure and convenient way to access your safety deposit box. Our
              advanced security measures, including biometric authentication and
              24/7 surveillance, ensure that your valuable possessions are
              safeguarded.
            </p>
            <button className="read-btn">Check Box</button>
          </div>
        </div>
        <div className="col-md-6">
          <img src="https://images.pexels.com/photos/6169052/pexels-photo-6169052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="to-image" />
        </div>
      </div>
    </div>
  );
}

export default CheckDeposit;

import React from "react";
import "../Contact/Contact.css"

function Contact() {
  return (
    <>
      <div className="container contact-box ">
        <h1 className="textBOx">Contact Us</h1>
        <d6v className="row gap-5  rowContact">
          <div className="col-md-4 box-contact">
            <div className="">
              <p>Email</p>
              <p>info@ffl-online.com</p>
            </div>
          </div>
          <div className="col-md-4 box-contact">
            <p>Phone</p>
            <p>+233 55 22 88 681</p>
          </div>
          <div className="col-md-4 box-contact">
            <p>Address 38 Paradise St, Birmingham B1 2AF, United Kingdom.</p>
          </div>
        </d6v>
        <div className="row">
          <div className="col-md-6 mt-5">
            <div className="contect-input">
            <input class="form-control messageInput  " type="text" placeholder="Full Name" aria-label=".form-control-lg example"/>
            <input class="form-control messageInput  mt-3" type="text" placeholder="Email Address" aria-label=".form-control-lg example"/>
            <input class="form-control messageInput mt-3" type="text" placeholder="Phone" aria-label=".form-control-lg example"/>
            <textarea class="form-control messageInput mt-3" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
            <button className="btn-message">Send Message</button>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <h1>Map Box</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

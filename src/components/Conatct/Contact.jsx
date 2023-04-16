import React from 'react'
import "./contact.css"
import phone from "../../assets/images/phone-call.png";
import email from "../../assets/images/gmail.png";
import location from "../../assets/images/location-pin.png";
const Contact = () => {
  return (
    <div>
      <div className="my-info col-lg-10 offset-lg-1 row ">
        <div className="box col-lg-4 col-md-6 col-sm-12">
          <div className="contact-image-holder">
            <img src={phone} alt="Phone" />
          </div>
          <div class="phone-text">
            <h5>Phone</h5>
            <h5>7620707855</h5>
          </div>
        </div>

        <div className="box col-lg-4 col-md-6 col-sm-12">
          <div className="contact-image-holder">
            <img src={email} alt="Email" />
          </div>
          <div class="phone-text">
            <h5>Email</h5>
            <h5>rushabhschool@gmail.com</h5>
          </div>
        </div>

        <div className="box col-lg-4 col-md-6 col-sm-12">
          <div className="contact-image-holder">
            <img src={location} alt="location" />
          </div>
          <div class="phone-text">
            <h5>Address</h5>
            <h5>Pune , Maharashtra</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
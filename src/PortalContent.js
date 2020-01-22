import React from 'react';
import './PortalContent.css';
import AboutUs from './portal-content/AboutUs';
import ContactUs from './portal-content/ContactUs';
import ApplyNow from './portal-content/ApplyNow';

function PortalContent() {
  return (
    <div className="portal-content">
        <input name="navigation-header-input" type="radio" id="apply_now" defaultChecked/>
        <label htmlFor="apply_now" className="navigation-header-label">Apply Now</label>
        <ApplyNow/>
  
        <input name="navigation-header-input" type="radio" id="contact_us" className="input"/>
        <label htmlFor="contact_us" className="navigation-header-label">Contact Us</label>
        <ContactUs/>

        <input name="navigation-header-input" type="radio" id="about_us" className="input"/>
        <label htmlFor="about_us" className="navigation-header-label">About Us</label>
        <AboutUs/>
  </div>
  );
}

export default PortalContent;

import React from "react"
// import { blog } from "../../../dummydata"
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>DR RAJU R</h1>
            <span>Neurosurgery</span>
            <p>Dr. Raju R is one of the best & top-rated General, Laparoscopic Surgeon & Laser Proctologist in Bangalore. He is also a certified endoscopist and bariatric surgeon.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Useful Links</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Our Treatments</li>
              <li>Blog</li>

            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            {/* <h3>Recent Post</h3> */}

          </div>
          <div className='box last'>
            <h3>Our Address</h3>
            <ul>
              <li>
                <i className='fa fa-map'> </i>
                Manipal Hospital
                45/1, 45th Cross, Marenahalli Road, Phase II, Landmark: Next To Big Bazar & Opposite To Bangalore Central, Bangalore
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                Apollo Spectra Hospitals
                143, Opus, 1st Cross, Landmark: Near Nagarjuna Hotel, Bangalore
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | This template is made with <i className='fa fa-heart'></i> by Drprofile
        </p>
      </div>
    </>
  )
}

export default Footer

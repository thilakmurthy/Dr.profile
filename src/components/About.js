import React from 'react'
import raju from '../static/images/profile pick.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={raju} alt='Raju' />
                <div className='col-2'>
                    <h2 style={{color:"#1d3d74"}}>About Dr. Raju R</h2>
                    <span className='line'></span>
                    <p>Dr Raju R is a well-known Urologist currently associated with Cura Hospital, Kanakapura, in Bangalore. He has 12 years of experience in Urology and worked as an expert Urologist in different cities in India.</p>
                    <p>Doctor Raju R has contributed to handling numerous complex medical cases in several hospitals. He is known for his attention to accurate diagnosis and for treating patients empathetically. The speciality interests of Dr Raju R are Orchidectomy, Balanoposthitis, Circumcision, Cystolitholapaxy, Hemodialysis, Peritoneal Dialysis etc. </p>
 
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About

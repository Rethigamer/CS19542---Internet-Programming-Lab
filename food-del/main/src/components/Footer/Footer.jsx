import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer ' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=""/>
                <p>Thank You for visiting us</p>
                <div className="footer-social-icons">
                    <a href='https://www.facebook.com/rethinaath.senthilganesh'><img src={assets.facebook_icon} alt="" /></a>
                    <a href='https://x.com/Rethigamer'><img src={assets.twitter_icon} alt="" /></a>
                    <a href='https://www.linkedin.com/in/rethinaath-senthil-ganesh-18b492213/'><img src={assets.linkedin_icon} alt="" /></a>
                </div>
            </div>     
            <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>

                    </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH </h2>
                <ul>
                    <li>+91-9444737413</li>
                    <li>220701222@rajalakshmi.edu.in</li>

                </ul>
            </div>
       
        </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 @ Tomato.com - All Right Reserved .</p>
    </div>
  )
}

export default Footer

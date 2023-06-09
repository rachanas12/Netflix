import React from 'react'
import { FiGlobe } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='footer'>
        <p><h1>Questions? Call</h1><a href="">000-800-919-1694</a></p>
        <nav id='footernav'>
        <div className='footerdiv'>
            <a href="">FAQ</a>
            <a href="">Media Centre</a>
            <a href="">Ways to Watch</a>
            <a href="">Cookie Preferences</a>
            <a href="">Speed Test</a>
            <button id='menu1'><h1><FiGlobe /></h1>
            <select name="English" id="English"style={{backgroundColor:"transparent",color:'white',borderColor:"black",width:"90px",height:"30px"}}><option value="English" >English</option></select>
            </button>
            <a href="">Netflix India</a>
        </div>
        <div className='footerdiv'>
        <a href="">Help Centre</a>
            <a href="">Investor Relations</a>
            <a href="">Terms of Use</a>
            <a href="">Corporate Information</a>
            <a href="">Legal Notices</a>
        </div>
        <div className='footerdiv'>
        <a href="">Account</a>
            <a href="">Jobs</a>
            <a href="">Privacy</a>
            <a href="">Contact Us</a>
            <a href="">Only on Netflix</a>
        </div>
        </nav>
    </div>
  )
}

export default Footer
import React from 'react'
import { FiGlobe } from "react-icons/fi";

const Menu = () => {
  return (
    <div id='menu'>
      <button id='menu1'><h1><FiGlobe /></h1>
      <select name="English" id="English"style={{backgroundColor:"transparent",color:'white',borderColor:"black",width:"90px",height:"30px"}}><option value="English" >English</option></select>
      </button>
      <br />
      <button id='menu2'>Sign In</button>
    </div>
  )
}

export default Menu

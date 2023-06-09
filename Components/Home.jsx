import React from 'react'
import Navbar from './Navbar'
import homeimg from "../Assets/homepagebgrnd.jpg"
import Hometext from './Hometext'


const Home = () => {
  return (
    <nav id='home'>
      <nav id='homepage'><Navbar/>
      <Hometext/>
      </nav>

    </nav>
  )
}

export default Home
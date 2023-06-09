import React from 'react'
import "./global.css"
import Home from './Components/Home'
import Comp1 from './Components/Comp1'
import Comp2 from './Components/Comp2'
import Comp3 from './Components/Comp3'
import Comp4 from './Components/Comp4'
import Comp5 from './Components/Comp5'
import Footer from './Components/Footer'

const App = () => {
  return (
    <nav>
        <Home/><hr  className='hr'/>
        <Comp1/><hr  className='hr'/>
        <Comp2/><hr  className='hr'/>
        <Comp3/><hr  className='hr'/>
        <Comp4/><hr  className='hr'/>
        <Comp5/><hr  className='hr'/>
        <Footer/><hr  className='hr'/>
    </nav>
  )
}

export default App
import React from 'react'
import tvimg from "../Assets/tv.png"

const Comp1 = () => {
  return (
    <div className='comp1'>
        <div  id='comp1text'><h1>Enjoy on your TV</h1>
        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        <div id='tv'>
        <video data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" muted="" loop="" ><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"  /></video>
        <img src={tvimg} alt="" /></div>
    
    </div>
        )
}

export default Comp1
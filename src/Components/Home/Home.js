import React from 'react'
import Card from './Card'
import Database from './Database'
import Slider from './Hero/Slide'
import Map from './Map'


function Home() {

  return (
    <>
        <Slider />
        <br />
        <br />
        {/* <Database /> */}
        <br />
        <Card />
        <br />
        <Map />
        
        <br/>
        <br />

    </>
  )
}

export default Home
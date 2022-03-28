import React from 'react'
import './Slide.css'
import { Carousel } from 'antd';

function Slide() {

  return (
    <>
    <Carousel  autoplay>
        <div className='Slide1'>
            <div>Hello Am The 1st</div>
        </div>
        <div className='Slide2'>
            <div>Hello Am The 2nd</div>
        </div>
        <div className='Slide1'>
            <div>Hello Am The 3rd</div>
        </div>
        <div className='Slide2'>
            <div>Hello Am The 4th</div>
        </div>
        <div className='Slide2'>
            <div>Hello Am The 5th</div>
        </div>
    </Carousel>,
    </>
  )
}

export default Slide
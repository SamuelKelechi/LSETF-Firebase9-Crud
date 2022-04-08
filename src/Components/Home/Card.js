import React from 'react'
import styled from 'styled-components'
import Aos from "aos";
import "aos/dist/aos.css";

const Card = () => {


    React.useEffect(()=>{
        Aos.init()
    },[]);
  return (
    <MainContain>
        <Wrapper>
            <Card1 data-aos="fade-up"
    data-aos-offset="200"
    data-aos-easing="ease-in-sine"
            >1ST
            </Card1>

            <Card1 data-aos="fade-up"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" 
            >2ND</Card1>

            <Card1 data-aos="fade-up"
    data-aos-offset="400"
    data-aos-easing="ease-in-sine" 
            >3RD
            </Card1>

        </Wrapper>

    </MainContain>
  )
}

export default Card

const MainContain = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const Wrapper = styled.div`
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    justify-content: space-around;
`

const Card1 = styled.div`
    height: 400px;
    width: 350px;
    background-color: grey;
`

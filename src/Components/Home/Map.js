import React from 'react';
import styled from 'styled-components';

const Map = () => {
  return (
    <Container>
        <ContainerWrapper>
        <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=5%20kekere%20surulere&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </ContainerWrapper>
    </Container>
  )
}

export default Map;

const Container = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
`

const ContainerWrapper = styled.div`
    width: 80%;
    height: 100%;

    @media screen and (max-width: 768px){
        width:90%
    }
`
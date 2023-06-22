//import the styled-components
import styled from 'styled-components'

import React from 'react'
import Navbar from './Navbar'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1000px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 74px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #1e1e3c;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #1e1e3c;
  color: white;
  font-weight: 200;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;



const Right = styled.div`
  flex: 3;
  position: relative;
`;
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  /* define animation here  */
  @keyframes animate {
    100%{
      transform: translateY(20px);
    }
  }
`;


const Hero = () => {
  return (
    <Section>
        <Navbar/>
        <Container>

          {/* LEFT SECTION  */}
          <Left>
            <Title>Andrew Jarmin</Title>
            <WhatWeDo>
              <Line src="/img/logo.png"/>
              <Subtitle>What I do</Subtitle>
            </WhatWeDo>
            <Desc>I create problems, but I solve them.</Desc>
            <Button>Learn More</Button>
          </Left>

          {/* 3D MODEL SECTION */}
          {/* RIGHT SECTION */}
          <Right>
            <Img src="/img/logo.png"/>
          </Right>

        </Container>
    </Section>
  )
}

export default Hero


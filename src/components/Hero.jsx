//import the styled-components
import styled from 'styled-components'

import React from 'react'
import Navbar from './Navbar'

//3D js imports
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  /* handling media devices like phone screen */
  @media only screen and (max-width: 768px){
    height: 100vh;
  }
`;

const Container = styled.div`
  /* background-color: #0000ff2a; */
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  /* handling media devices like phone screen */
  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
    align-item: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  /* handling media devices like phone screen */
  @media only screen and (max-width: 768px){
    flex: 1;
    align-items: center;
    gap: 10px;
  }
`;

const Title = styled.h1`
  color: navajowhite;
  font-size: 100px;
  font-family: 'customfont';
  text-align: center;

  /* handling media devices like phone screen */
  @media only screen and (max-width: 768px){
    padding: 0px;
    font-size: 42px;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #8e232381;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #1e1e3c;
`;

const Desc = styled.p`
  font-size: 25px;
  font-family: 'customfont';
  color: #d6d6d6;
  padding-bottom: 10px;
  text-align: center;

  /* handling media devices like phone screen */
  @media only screen and (max-width: 768px){
    font-size: 12px;
  }
`;

const LinkSection = styled.div`

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  
  @media only screen and (max-width: 768px){
    width: 100%;
  }
`;


const Button = styled.button`
  background-color: #1e1d37;
  color: lightgray;
  font-weight: 15px;
  padding: 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;

  height: 20px;
  width: auto;

  @media only screen and (max-width: 768px){
    padding: 5px;
  }

  &:hover{
    background-color: #767676;
  }
`;

const Right = styled.div`
  flex: 2;
  position: relative;

  /* handling media devices like phone screen */
  @media only screen and (max-width: 768px){
    flex: 2;
  }
`;
const Img = styled.img`
  width: 250px;
  height: 250px;
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

const Icon = styled.img`
  width: 20px;
`;


const Hero = () => {
  return (
    <Section>
        {/* call the navbar component here. */}
        {/* <Navbar/> */}
        <Container>

          {/* LEFT SECTION  */}
          <Left>
            <Title>Andrew Jarmin</Title>
            {/* <WhatWeDo> */}
              {/* <Canvas> */}
              {/* <Line src="/img/logo.png"/> */}
              {/* </Canvas> */}
              {/* <Subtitle>About Me</Subtitle> */}
            {/* </WhatWeDo> */}
            <Desc>I like to code and make cool things</Desc>
            <LinkSection>
              <Button as="a" href="#about">About Me</Button>
              <Button as="a" href="https://www.linkedin.com/in/andrewjarmin/" target="_blank"><Icon src="/img/linkedin-icon.png"></Icon></Button>
              <Button as="a" href="https://github.com/AndrewJ99/" target="_blank"><Icon src="/img/github-icon.png"></Icon></Button>
              <Button as="a" href="https://www.instagram.com/andrewjarmin_/" target="_blank"><Icon src="/img/instagram-icon.png"></Icon></Button>
              <Button as="a" href="https://www.youtube.com/channel/UCbbNVkvKqxL0qSxq76jIZww" target="_blank"><Icon src="/img/youtube-icon.png"></Icon></Button>
            </LinkSection>
          </Left>

          {/* 3D MODEL SECTION */}
          {/* RIGHT SECTION */}
          <Right>
            <Canvas camera={{fov: 40, position: [5, 4, 5]}}>
              <OrbitControls enableZoom={false} enableRotate={false}/>
              <ambientLight intensity = {1.5}/>
              <directionalLight position = {[5, 4, 2]}/>
              <Sphere args={[1.7, 200, 200]} scale={1}>
                <MeshDistortMaterial color="#1e1d37" attach="material" distort={0.7} speed={2}/>
              </Sphere>
            </Canvas>
            {/* <Img src="/img/logo.png"/> */}
          </Right>

        </Container>
        {/* <Navbar/> */}
    </Section>
  )
}

export default Hero


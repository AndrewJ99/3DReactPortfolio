//import the styled-components
import styled from 'styled-components'

import React from 'react'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1000px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  background-color: white;
`;

const Title = styled.h1`
  color: white;
  font-size: 74px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
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
  /* button size */
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;


const Who = () => {
  return (
    <Section id="about">
        <Container>

          {/* LEFT SECTION  */}
          <Left>
            {/* 3D MODEL SECTION */}
          </Left>

          {/* RIGHT SECTION */}
          <Right>
          <Title>Do do do do do do do do do</Title>
            <WhatWeDo>
              <Line src="/img/logo.png"/>
              <Subtitle>Who I a</Subtitle>
            </WhatWeDo>
            <Desc>do dodo do do do random text fr</Desc>
            <Button>Resume</Button>
          </Right>

        </Container>
    </Section>
  )
}

export default Who


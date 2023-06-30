//import three js Canvas for 3D modeling
import { Canvas } from '@react-three/fiber'
//orbit controls for 3D object movement
import { OrbitControls } from '@react-three/drei'

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: lightgray;
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;
`;

const WTF = () => {
  return (
    <Container>
        <Canvas>
            <OrbitControls enableZoom = {false} />
            <mesh>
                <boxGeometry arg={[5, 5, 5]}></boxGeometry>
            </mesh>
        </Canvas>
    </Container>
  )
}

export default WTF
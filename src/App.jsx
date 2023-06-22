//import styled-containers
import styled from "styled-components"

import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"

//creating our "styled components"
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: #000000;
  background: url("./img/background.png");
  background-size: 1500px;
  &::-webkit-scrollbar{
    display: none;
  }
`;


function App() {

  return (
    <Container>

      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
      
    </Container>
  )
}

export default App

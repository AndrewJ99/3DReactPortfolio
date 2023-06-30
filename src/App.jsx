//import styled-containers
import styled from "styled-components"

//importing downloaded fonts
import GlobalFonts from './fonts/fonts';

import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import WTF from "./components/WTF"

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
      {/* calling imported fonts here */}
      <GlobalFonts/>

      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
      {/* <WTF/> */}
    </Container>
  )
}

export default App

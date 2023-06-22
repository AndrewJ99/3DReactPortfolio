//import the styled-components
import styled from 'styled-components'

import React from 'react'

const data = [
  "Project 1",
  "Project 2",
  "Project 3",
  "Project 4",
  "Project 4",
  "Project 4",
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
`
const ListItems = styled.li`
  font-size: 100px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 2px navajowhite;
  position: relative;

  /* animation section  */
  ::after{
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #ffd495;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    ::after{
              /* linear -> time of animation will be linear time */
              /* both means after animation it will stay there. */
      animation: moveText 0.2s linear both;

      @keyframes moveText{
        100%{
          width: 100%;
        }
      }

    }
  }
`
const Right = styled.div`
  flex: 1;
`

const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
                        // able to reach this \/ data in styled component
              <ListItems key={item} text={item}>{item}</ListItems>
            ))}
          </List>
        </Left>
        <Right>
          3D Section
        </Right>
      </Container>
    </Section>
  )
}

export default Works;
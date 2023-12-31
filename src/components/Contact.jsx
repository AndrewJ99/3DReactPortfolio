//import the styled-components
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Title = styled.h1`
  font-weight: 200;
`
const Form = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Input = styled.input`
  padding: 20px;
  background-color: gray;
  border: none;
  border-radius: 5px;
`
const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  background-color: white;
  border-radius: 5px;
`
const Button = styled.button`
  background-color: blueviolet;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  border-radius: 7px;
`
const Right = styled.div`
  flex: 1;
`


const Contact = () => { 
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  //create function handleSubmit for email handling
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
    .sendForm("service_2f744lu", "template_5wxn4xk", ref.current, "U72XwhZYp-gS1uQli")
    .then(
      (result) =>{
        console.log(result.text);
        setSuccess(true);
        },(error) => {
        console.log(error.text);
        SetSuccess(false);
      });
  }
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name"/>
            <Input placeholder="Email" name="email"/>
            <TextArea placeholder="Write Your Message Here..." rows={7} name="message"/>
            <Button type="submit">Button</Button>
            {success && 
            "SUCESS MESSAGE : )"}
          </Form>
        </Left>
        <Right>
          {/* ANOTHER 3D OBJECT */}
        </Right>
      </Container>
    </Section>
  )
};

export default Contact
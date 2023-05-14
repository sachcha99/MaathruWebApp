import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from "styled-components";
import Slider from '../components/Slider';
import CardView from '../components/CardView';
import Journey from '../components/Journey';

const Container = styled.div`
  width: 100vw;
  background-color: #fff;
  background-size: cover;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Slider />
        <CardView />
        <Journey />
        <Footer />
      </Container>

    </>
  )
}

export default Home
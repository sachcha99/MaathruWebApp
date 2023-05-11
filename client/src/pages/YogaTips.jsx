import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from "styled-components";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';


const Container = styled.div`
  width: 100vw;
  background-color: #fff;
  background-size: cover;
`;


const Wrapper = styled.div`
  width: 100%;
  padding: 50px 20px;
  background: rgb(0,0,0);
  background: #FFB6C1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

`;

const ImgContainer = styled.div`
height: 100%;
width: 50%;
flex: 1;
`;

const Image = styled.img`
padding-top:25px;
height: 600px;
`;

const Title = styled.div`
font-weight: 600;
font-size:26px;
color: #956C6E;
padding-bottom:25px;
`;

const YogaTips = () => {
    return (
        <>
            <Container>
                <Navbar />
                <div>
                    <Wrapper>
                        <Title>Yoga Exercises during Pregnancy</Title>
                        <ImgContainer >
                        <Carousel autoPlay infiniteLoop >
                            <div>
                                <img src="https://cdn.cdnparenting.com/articles/2017/09/271078604-H.jpg" />
                                <p className="legend">Exercise 1</p>
                            </div>
                            <div >
                                <img src="https://images.healthshots.com/healthshots/en/uploads/2022/06/21095744/yoga-pregnant-770x436.jpg" />
                                <p className="legend">Exercise 2</p>
                            </div>
                            <div>
                                <img src="https://images.squarespace-cdn.com/content/v1/5ada251712b13fecb4d3e1ef/1546475821103-4Q13GH39JC8YA3VYBNAW/CatTablePOse-1024x683.jpg" />
                                <p className="legend">Exercise 3</p>
                            </div>
                            <div>
                                <img src="https://www.fashionlady.in/wp-content/uploads/2017/06/yoga-for-pregnant-women.jpg" />
                                <p className="legend">Exercise 4</p>
                            </div>
                            <div>
                                <img src="https://img.freepik.com/premium-photo/pregnant-woman-doing-yoga-exercise-ball_13339-240417.jpg" />
                                <p className="legend">Exercise 5</p>
                            </div>
                            <div>
                                <img src="https://post.healthline.com/wp-content/uploads/2021/05/pregnant-yoga-warrior-732x549-thumbnail.jpg" />
                                <p className="legend">Exercise 6</p>
                            </div>
                            <div>
                                <img src="https://humankinetics.me/wp-content/uploads/2019/06/Bartlett-temp-cover-image.jpg" />
                                <p className="legend">Exercise 7</p>
                            </div>
                            <div>
                                <img src="https://physiofitadelaide.com.au/wp-content/uploads/2020/03/pregnant-woman-exercising-yoga-1024x683.jpg" />
                                <p className="legend">Exercise 8</p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/kKYvnjV/IMG-9186-1.png" />
                                <p className="legend">Exercise 9</p>
                            </div>
                        </Carousel>
                        </ImgContainer>
                    </Wrapper>
                </div>
                <Footer />
            </Container>

        </>
    )
}

export default YogaTips;
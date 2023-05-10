import React from 'react'
import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";

const CardView = () => {
    const Container = styled.div`
  width: 100vw;
  background-color: #ffe6e6;
  background-size: cover;
  border-radius:5px;
`;
    const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

    const CardBox = styled.div`
    flex-basis: calc(33.33% - 10px);
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
    justify-content: center;

`;

    const Card = styled.div`
  background-color: white;
  width: 250px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  cursor: pointer;


`;

    const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

    const CardTitle = styled.div`
  margin: 10px 0;
  font-weight:600;

`;


    const Title = styled.h3`
margin: -5px 0;
padding:30px 0;
  display: flex;
  justify-content: center;
  font-size: 48px;
  color: #956C6E;
  align: center;

`;

    const CardIcon = styled.div`
  font-size: 48px;
  margin-bottom: 10px;
`;


    const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

    const Image = styled.img`
    padding-top:25px;
  height: 140px;
`;
    let navigate = useNavigate();

    return (

        <Container>
            <Title>Our Services</Title>
            <CardContainer>
                <CardBox>
                    <Card onClick={() => { navigate('/pregnancyTips') }}>
                        <ImgContainer >
                            <Image src="https://i.ibb.co/3SnYw9B/Mask-Group-8.png" />
                        </ImgContainer>
                        <CardTitle>Pregnancy Tips</CardTitle>
                    </Card>
                </CardBox>
                <CardBox>
                    <Card onClick={() => { navigate('/mealPlans') }}>
                        <ImgContainer  >
                            <Image src="https://i.ibb.co/sqBhdjm/Mask-Group-2.png" />
                        </ImgContainer>
                        <CardTitle>Meal Plans</CardTitle>
                    </Card>
                </CardBox>
                <CardBox>
                    <Card onClick={() => { navigate('/yogaTips') }}>
                        <ImgContainer>
                            <Image src="https://i.ibb.co/jHk7YY5/Mask-Group-3.png" />
                        </ImgContainer>
                        <CardTitle>Yoga & Exercises</CardTitle>
                    </Card>
                </CardBox>
                <CardBox>
                    <Card onClick={() => { navigate('/channelDoc') }}>
                        <ImgContainer>
                            <Image src="https://i.ibb.co/Dtkp3mz/Mask-Group-4.png" />
                        </ImgContainer>
                        <CardTitle>Channel a Doctor</CardTitle>
                    </Card>
                </CardBox>
                <CardBox>
                    <Card onClick={() => { navigate('/instructors') }}>
                        <ImgContainer>
                            <Image src="https://i.ibb.co/YfWWvJj/Mask-Group-7.png" />
                        </ImgContainer>
                        <CardTitle>Instructors</CardTitle>
                    </Card>
                </CardBox>
                <CardBox>
                <Card onClick={() => { navigate('/reading') }}>
                        <ImgContainer>
                            <Image src="https://i.ibb.co/XVDv8QP/Mask-Group-6.png" />
                        </ImgContainer>
                        <CardTitle>Reading Materials</CardTitle>
                    </Card>
                </CardBox>
            </CardContainer>
        </Container>
    )
}

export default CardView
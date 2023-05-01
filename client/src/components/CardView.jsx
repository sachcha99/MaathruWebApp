import React from 'react'
import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const CardView = () => {
const Container = styled.div`
  width: 100vw;
  background-color: #ffe6e6;
  background-size: cover;
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
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto

`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardTitle = styled.h3`
  margin: 10px 0;
`;

const CardIcon = styled.div`
  font-size: 48px;
  margin-bottom: 10px;
`;
    return (
        <Container>
            <CardContainer>
                <CardBox>
                    <Card>
                        <CardIcon><AccountCircleIcon /></CardIcon>
                        <CardTitle>Card 1</CardTitle>
                    </Card>
                </CardBox>
                <CardBox>
                    <Card>
                        <CardIcon><AccountCircleIcon /></CardIcon>
                        <CardTitle>Card 2</CardTitle>
                    </Card>
                </CardBox>
                <CardBox>
                    <Card>
                        <CardIcon><AccountCircleIcon /></CardIcon>
                        <CardTitle>Card 3</CardTitle>
                    </Card>
                </CardBox>
                <CardBox>
                    <Card>
                        <CardIcon><AccountCircleIcon /></CardIcon>
                        <CardTitle>Card 3</CardTitle>
                    </Card>
                </CardBox>
                <CardBox>
                    <Card>
                        <CardIcon><AccountCircleIcon /></CardIcon>
                        <CardTitle>Card 3</CardTitle>
                    </Card>
                </CardBox>
                <CardBox>
                    <Card>
                        <CardIcon><AccountCircleIcon /></CardIcon>
                        <CardTitle>Card 3</CardTitle>
                    </Card>
                </CardBox>
            </CardContainer>
        </Container>
    )
}

export default CardView
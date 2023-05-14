import React from 'react'
import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Journey = () => {
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
  margin: auto

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
//   height: 100%;
//   width:950px%;
background-color:#fff;
margin: 50px 80px;
  flex: 1;
  display: flex;
  justify-content: center;

`;

  const Button = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 20px;
  background-color: #956C6E;
  cursor: pointer;
  border: 2px solid #956C6E;
  border-radius: 6px;
  color: #fff;
`;
  const Image = styled.img`
padding-top:25px;
//   height: 140px;
width: 60%;
`;

  const ButtonContainer = styled.div`
display: flex;
justify-content: center;
padding-bottom: 30px;
`;
  return (
    <Container>
      <CardContainer>

        {/* <CardBox>
                    <Card> */}
        <ImgContainer>
          <Image src="https://i.ibb.co/zQDs2Cm/Group-356.png" />
        </ImgContainer>

        {/* </Card>
                </CardBox> */}
      </CardContainer>
      <ButtonContainer>
        <Button>START JOURNEY</Button>
      </ButtonContainer>


    </Container>
  )
}

export default Journey
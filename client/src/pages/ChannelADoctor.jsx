import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from "styled-components";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { newAppointment } from '../redux/appointment';

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
flex: 1;
`;

const Stack = styled.div`
width: 90%;
flex: 1;
background-color: #fff;
border-radius:8px;
margin-bottom: 25px;
`;

const Image = styled.img`
height: 10px;
`;

const Title = styled.div`
font-weight: 600;
font-size:26px;
color: #956C6E;
padding-bottom:25px;
`;

const DayField = styled.div`
font-weight: 700;
font-size:40px;
color: #956C6E;
display: flex;
justify-content: center;
align-items: center;
height: 100%;

`;

const MealsField = styled.div`
font-weight: 400;
font-size:15px;
color: #956C6E;
display: flex;
justify-content: center;
align-items: center;
padding:8px 0;

`;

const MealsTitle = styled.div`
font-weight: 700;
font-size:20px;
color: #956C6E;
display: flex;
justify-content: center;
align-items: center;
padding:10px 0;
`;

const FlexBox = styled.div`
display: flex;
justify-content: space-between;
background-color:#fff ;
padding:20px 20px 0 20px; 
`;

const SimpleFlexBox = styled.div`
display: flex;
// justify-content: space-between;
// background-color:#fff ;
// padding:20px 20px 0 20px; 
`;

const CenterAlignedFlexBox = styled.div`
display: flex;
align-items: center;
// justify-content: space-between;
// background-color:#fff ;
// padding:20px 20px 0 20px; 
`;

const Button = styled.button`
  padding: 12px;
  margin-right: 20px;
  font-size: 15px;
  background-color: #fff;
  cursor: pointer;
  border: 2px solid #956C6E;
  border-radius: 6px;
  color: #956C6E;
  margin-bottom: 25px;
  transition: 0.8s;


  &:hover {
    opacity: 1;
    background-color: #956C6E;
    border: 2px solid #956C6E;
    color: #fff;  }
`;

const CheckButton = styled.button`
  padding: 12px 25px;
  font-size: 15px;
  background-color: #956C6E;
  cursor: pointer;
  border: 2px solid #956C6E;
  border-radius: 6px;
  color: #fff;
  margin: 15px 0;
  transition: 0.8s;


  &:hover {
    opacity: 1;
    background-color: #fff;
    border: 2px solid #956C6E;
    color: #956C6E;  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const CardBox = styled.div`
    flex-basis: calc(33.33% - 10px);
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
    justify-content: center;
    border: 2px solid #956C6E;
    border-radius: 10px;
    padding:10px 10px 25px 10px ;

`;

const CalenderBox = styled.div`

border: 2px solid #956C6E;
border-radius: 10px;
padding: -10px;

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
    padding-top:25px;
    height: 100px;
`;

const CardTitle = styled.div`
margin: 10px 0;
font-weight:600;

`;


const ChannelADoctor = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function disableWeekends() {
        const currDate = Date.now();
        const dt = new Date(currDate)
        return dt.getDay() === 0 || dt.getDay() === 6;
    }

    function disableRandomDates() {
        return Math.random() > 0.7;
    }

    return (
        <>
            <Container>
                <Navbar />
                <div>
                    <Wrapper>
                        <Title>Channel a Doctor</Title>
                        <Stack >
                            <FlexBox>
                                <SimpleFlexBox>
                                    <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                        <Avatar sx={{ width: 60, height: 60 }} />
                                    </div>
                                    <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <div><b>Dr.Nalinda Rodrigo</b></div>
                                        <SimpleFlexBox>
                                            <div>VOG </div>
                                            <CenterAlignedFlexBox>
                                                <Image style={{ paddingLeft: '8px' }} src="https://i.ibb.co/5MKt97r/Group-360.png" />
                                            </CenterAlignedFlexBox>
                                        </SimpleFlexBox>

                                    </div>

                                </SimpleFlexBox>
                                <Button onClick={() => {  dispatch(newAppointment({ 'doctorName': "Dr.Nalinda Rodrigo",'specialization': "VOG"})); navigate('/doctor') }}>View Profile</Button>

                            </FlexBox>
                            <Grid container spacing={0}>
                                <Grid item xs={8}>
                                    <CardContainer>
                                        <CardBox>
                                            <Card >
                                                <ImgContainer >
                                                    <CardImage src="https://i.ibb.co/RzPbDBP/hemas.png" />
                                                </ImgContainer>
                                                <CheckButton>Check Availability</CheckButton>
                                            </Card>
                                        </CardBox>
                                        <CardBox>
                                            <Card o>
                                                <ImgContainer  >
                                                    <CardImage src="https://i.ibb.co/CQgJJsY/asiri-helath-logo.png" />
                                                </ImgContainer>
                                                <CheckButton>Check Availability</CheckButton>
                                            </Card>
                                        </CardBox>
                                    </CardContainer>
                                </Grid>
                                <Grid item xs={4}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateCalendar
                                            hintText="Weekends Disabled" shouldDisableDate={disableRandomDates} />
                                    </LocalizationProvider>
                                </Grid>
                            </Grid>
                        </Stack>

                        <Stack >
                            <FlexBox>
                                <SimpleFlexBox>
                                    <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                        <Avatar sx={{ width: 60, height: 60 }} />
                                    </div>
                                    <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <div><b>Dr.Roshan Jayasinghe</b></div>
                                        <SimpleFlexBox>
                                            <div>VOG </div>
                                            <CenterAlignedFlexBox>
                                                <Image style={{ paddingLeft: '8px' }} src="https://i.ibb.co/5MKt97r/Group-360.png" />
                                            </CenterAlignedFlexBox>
                                        </SimpleFlexBox>

                                    </div>

                                </SimpleFlexBox>
                                <Button onClick={() => {  dispatch(newAppointment({ 'doctorName': "Dr. Roshan Jayasinghe",'address': "Malabe",'experience': "11 years",'specialization': "VOG"})); navigate('/doctor') }}>View Profile</Button>

                            </FlexBox>
                            <Grid container spacing={0}>
                                <Grid item xs={8}>
                                    <CardContainer>
                                        <CardBox>
                                            <Card >
                                                <ImgContainer >
                                                    <CardImage src="https://i.ibb.co/RzPbDBP/hemas.png" />
                                                </ImgContainer>
                                                <CheckButton>Check Availability</CheckButton>
                                            </Card>
                                        </CardBox>
                                        <CardBox>
                                            <Card o>
                                                <ImgContainer  >
                                                    <CardImage src="https://i.ibb.co/4Y2Zrdd/z-p30-Lanka-Hospitals-removebg-preview.png" />
                                                </ImgContainer>
                                                <CheckButton>Check Availability</CheckButton>
                                            </Card>
                                        </CardBox>
                                    </CardContainer>
                                </Grid>
                                <Grid item xs={4}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateCalendar
                                            hintText="Weekends Disabled" shouldDisableDate={disableRandomDates} />
                                    </LocalizationProvider>
                                </Grid>
                            </Grid>
                        </Stack>

                        <Stack >
                            <FlexBox>
                                <SimpleFlexBox>
                                    <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                        <Avatar sx={{ width: 60, height: 60 }} />
                                    </div>
                                    <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <div><b>Dr.Sunil Perera</b></div>
                                        <SimpleFlexBox>
                                            <div>VOG </div>
                                            <CenterAlignedFlexBox>
                                                <Image style={{ paddingLeft: '8px' }} src="https://i.ibb.co/5MKt97r/Group-360.png" />
                                            </CenterAlignedFlexBox>
                                        </SimpleFlexBox>

                                    </div>

                                </SimpleFlexBox>
                                <Button onClick={() => {  dispatch(newAppointment({ 'doctorName': "Dr.Sunil Perera",'address': "Nugegoda",'experience': "10 years",'specialization': "VOG"})); navigate('/doctor') }}>View Profile</Button>

                            </FlexBox>
                            <Grid container spacing={0}>
                                <Grid item xs={8}>
                                    <CardContainer>
                                        <CardBox>
                                            <Card >
                                                <ImgContainer >
                                                    <CardImage src="https://i.ibb.co/RzPbDBP/hemas.png" />
                                                </ImgContainer>
                                                <CheckButton>Check Availability</CheckButton>
                                            </Card>
                                        </CardBox>
                                        <CardBox>
                                            <Card o>
                                                <ImgContainer  >
                                                    <CardImage src="https://i.ibb.co/CQgJJsY/asiri-helath-logo.png" />
                                                </ImgContainer>
                                                <CheckButton>Check Availability</CheckButton>
                                            </Card>
                                        </CardBox>
                                    </CardContainer>
                                </Grid>
                                <Grid item xs={4}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateCalendar
                                            hintText="Weekends Disabled" shouldDisableDate={disableRandomDates} />
                                    </LocalizationProvider>
                                </Grid>
                            </Grid>
                        </Stack>


                        
                    </Wrapper>
                </div>
                <Footer />
            </Container>

        </>
    )
}

export default ChannelADoctor;
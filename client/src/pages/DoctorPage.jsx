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
import PlaceIcon from '@mui/icons-material/Place';
import MedicationIcon from '@mui/icons-material/Medication';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import StarIcon from '@mui/icons-material/Star';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Divider from '@mui/material/Divider';
import { createTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { newAppointment } from '../redux/appointment';
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";


const theme = createTheme();
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.5),
        border: 0,
        '&.Mui-disabled': {
            border: 0,
        },
        '&:not(:first-of-type)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-of-type': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}));

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
// background-color: #fff;
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
justify-content: center;
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
  font-size: 15px;
  background-color: #fff;
  cursor: pointer;
  border: 2px solid #956C6E;
  border-radius: 6px;
  color: #956C6E;
  margin: 15px 0;
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
//   display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
const InsTitle = styled.div`
font-weight: 500;
font-size:20px;
color: #956C6E;
display: flex;
justify-content: center;
align-items: center;
padding:10px 0;
background-color:#fff;
`;

const DescTitle = styled.div`
font-weight: 500;
font-size:15px;
color: #956C6E;
display: flex;
justify-content: flex-start;
align-items: center;
padding:10px 0;
background-color:#fff;
`;


const ReviewsTitle = styled.div`
font-weight: 500;
font-size:18px;
color: #956C6E;
display: flex;
justify-content: flex-start;
align-items: center;
padding:10px 0 0 0;
background-color:#fff;
`;

const ButtonContainer = styled.div`
    display:'flex';
    justify-content:'space-evenly';
    width:'100%';
`;

const ChannelButton = styled.button`
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
const DoctorPage = () => {

    const dispatch = useDispatch();
    const [value, setValue] = React.useState(dayjs('2023-04-17'));

    const [time, setTime] = React.useState('left');
    const [formats, setFormats] = React.useState(() => ['italic']);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    const handleTime = (event, newTime) => {
        setTime(newTime);
        // dispatch(newAppointment({ 'appTime':newTime}))
    };
    function disableWeekends() {
        const currDate = Date.now();
        const dt = new Date(currDate)
        return dt.getDay() === 0 || dt.getDay() === 6;
    }

    
    function disableRandomDates() {
        return Math.random() > 0.7;
    }
       const appointment = useSelector((state) => state.appointment)
       console.log("appointment:::",appointment)

           let navigate = useNavigate();

    return (

        <>
            <Container>
                <Navbar />
                <div>
                    <Wrapper>
                        <Title>Channel a Doctor</Title>
                        <Stack >

                            <Grid container spacing={2}>
                                <Grid sx={{ backgroundColor: '#fff', marginRight: '25px', borderRadius: '10px' }} item xs={4}>
                                    <CardContainer>
                                        <FlexBox>
                                            <Avatar sx={{ width: 80, height: 80 }} alt={appointment.value.data.doctorName} src="/static/images/avatar/2.jpg" />
                                        </FlexBox>
                                        <InsTitle>{appointment.value.data.doctorName}</InsTitle>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                            <div style={{ display: 'flex' }}>
                                                <PlaceIcon />
                                                <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}> From</div>
                                            </div>
                                            <div>
                                            {appointment.value.data.address}
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                            <div style={{ display: 'flex' }} >
                                                <MedicationIcon />
                                                <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}> Specialization</div>
                                            </div>
                                            <div>
                                            {appointment.value.data.specialization}
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                            <div style={{ display: 'flex' }}>
                                                <MedicalServicesIcon />
                                                <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}> Experience</div>
                                            </div>
                                            <div>
                                            {appointment.value.data.experience}
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                            <div style={{ display: 'flex' }}>
                                                <StarIcon />
                                                <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>Rating</div>
                                            </div>
                                            <div>
                                                4.5/5
                                            </div>
                                        </div>
                                    </CardContainer>
                                </Grid>
                                <Grid sx={{ heght:'80%',backgroundColor: '#fff', marginRight: '25px', borderRadius: '10px' }} item xs={4}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateCalendar value={value} onChange={(newValue) => setValue(newValue)}
                                            shouldDisableDate={disableRandomDates} />
                                    </LocalizationProvider>
                                    <ButtonContainer style={{display:'flex', justifyContent:'space-evenly'}}>
                                    <Button>Go Back</Button>
                                    <ChannelButton onClick={() => {  dispatch(newAppointment({ 'appointmentTime': time,'appointmentDate': value})); navigate('/channel') }}>Channel</ChannelButton>

                                    </ButtonContainer>

                                </Grid>
                                <Grid sx={{ backgroundColor: '#fff', borderRadius: '10px' }} item xs={3}>
                                    <div style={{ paddingBottom: '10px' }}><b>Morning</b></div>
                                    <StyledToggleButtonGroup
                                        value={time}
                                        exclusive
                                        onChange={(e)=>handleTime(e,e.target.value)}
                                        aria-label="text time"
                                        sx={{ display: 'flex', flexWrap: 'wrap' }}
                                    >
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="0800">
                                            8:00 AM
                                        </ToggleButton>
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="0830">
                                            8:30 AM
                                        </ToggleButton>
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="0900" aria-label="right aligned">
                                            9:00 AM
                                        </ToggleButton>
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="0930" aria-label="justified" disabled>
                                            9:30 AM
                                        </ToggleButton>
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="1000" aria-label="left aligned">
                                            10:00 AM
                                        </ToggleButton>
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="1030" aria-label="centered">
                                            10:30 AM
                                        </ToggleButton>
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="1100" aria-label="right aligned">
                                            11:00 AM
                                        </ToggleButton>
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="1130" aria-label="justified" disabled>
                                            11:30 AM
                                        </ToggleButton>
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="1200" aria-label="left aligned">
                                            12:00 PM
                                        </ToggleButton>
                                    </StyledToggleButtonGroup>


                                    <div style={{ paddingBottom: '10px' }}><b>Evening</b></div>
                                    <StyledToggleButtonGroup
                                        value={time}
                                        exclusive
                                        onChange={(e)=>handleTime(e,e.target.value)}
                                        aria-label="text time"
                                        sx={{ display: 'flex', flexWrap: 'wrap' }}
                                    >
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="0200">
                                            2:00 PM
                                        </ToggleButton>
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="0230">
                                            2:30 PM
                                        </ToggleButton>
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="0300" aria-label="right aligned">
                                            3:00 PM
                                        </ToggleButton>
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="0330" aria-label="justified" disabled>
                                            3:30 PM
                                        </ToggleButton>
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="0400" aria-label="left aligned">
                                            4:00 PM
                                        </ToggleButton>
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="0430" aria-label="centered">
                                            4:30 PM
                                        </ToggleButton>
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="0500" aria-label="right aligned">
                                            5:00 PM
                                        </ToggleButton>
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="0530" aria-label="justified" disabled>
                                            5:30 AM
                                        </ToggleButton>
                                        <ToggleButton sx={{ marginBottom: '15px', border: '2px solid #808080' }} value="0600" aria-label="left aligned">
                                            6:00 PM
                                        </ToggleButton>
                                    </StyledToggleButtonGroup>


                                </Grid>


                            </Grid>
                            <Grid container spacing={2}>

                                <Grid sx={{ backgroundColor: '#fff', marginRight: '25px', marginTop: '50px', borderRadius: '10px', padding: '25px' }} item xs={4}>
                                    <DescTitle>Description</DescTitle>
                                    <div style={{ fontSize: '12px' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est nibh, malesuada sit amet pharetra at, gravida quis sapien. Nam ac congue lacus. In blandit orci sit amet lacus ultricies hendrerit. Etiam at tellus in sapien consectetur suscipit quis sit amet nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin et efficitur tellus. Duis placerat diam id efficitur euismod.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est nibh, malesuada sit amet pharetra at, gravida quis sapien. Nam ac congue lacus. In blandit orci sit amet lacus ultricies hendrerit. Etiam at tellus in sapien consectetur suscipit quis sit amet nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin et efficitur tellus. Duis placerat diam id efficitur euismod.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est nibh, malesuada sit amet pharetra at, gravida quis sapien. Nam ac congue lacus. In blandit orci sit amet lacus ultricies hendrerit. Etiam at tellus in sapien consectetur suscipit quis sit amet nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                    </div>
                                </Grid>

                                <Grid sx={{ backgroundColor: '#fff', marginLeft: '25px', marginTop: '50px', borderRadius: '10px', padding: '25px' }} item xs={7}>
                                    <ReviewsTitle>Reviews for Dr. Gaia Kodithuwakku (154)</ReviewsTitle>
                                    <Image src="https://i.ibb.co/5MKt97r/Group-360.png" />

                                    <Divider style={{ marginTop: "25px" }} />

                                    <SimpleFlexBox style={{ marginTop: "25px" }}>
                                        <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                            <Avatar alt="Hasan Azavi" src="/" sx={{ width: 40, height: 40 }} />
                                        </div>
                                        <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <div><b>Hasan Azavi</b></div>
                                            <SimpleFlexBox>
                                                <div style={{ fontSize: '10px', color: "#404040" }}>Colombo</div>
                                                <CenterAlignedFlexBox>
                                                    <Image style={{ paddingLeft: '8px' }} src="https://i.ibb.co/5MKt97r/Group-360.png" />
                                                </CenterAlignedFlexBox>
                                            </SimpleFlexBox>

                                        </div>

                                    </SimpleFlexBox>
                                    <div style={{ fontSize: '15px', paddingLeft: '60px', paddingTop: '8px' }}>Great Service...!</div>


                                    <SimpleFlexBox style={{ marginTop: "25px" }}>
                                        <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                            <Avatar alt="Daham Kalyana" src="/" sx={{ width: 40, height: 40 }} />
                                        </div>
                                        <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <div><b>Daham Kalyana</b></div>
                                            <SimpleFlexBox>
                                                <div style={{ fontSize: '10px', color: "#404040" }}>Colombo</div>
                                                <CenterAlignedFlexBox>
                                                    <Image style={{ paddingLeft: '8px' }} src="https://i.ibb.co/5MKt97r/Group-360.png" />
                                                </CenterAlignedFlexBox>
                                            </SimpleFlexBox>

                                        </div>

                                    </SimpleFlexBox>
                                    <div style={{ fontSize: '15px', paddingLeft: '60px', paddingTop: '8px' }}>Very Friendly and Helpful</div>


                                    <SimpleFlexBox style={{ marginTop: "25px" }}>
                                        <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                            <Avatar alt="Zuuvi" src="/" sx={{ width: 40, height: 40 }} />
                                        </div>
                                        <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <div><b>Zuuvi</b></div>
                                            <SimpleFlexBox>
                                                <div style={{ fontSize: '10px', color: "#404040" }}>Colombo</div>
                                                <CenterAlignedFlexBox>
                                                    <Image style={{ paddingLeft: '8px' }} src="https://i.ibb.co/5MKt97r/Group-360.png" />
                                                </CenterAlignedFlexBox>
                                            </SimpleFlexBox>

                                        </div>

                                    </SimpleFlexBox>
                                    <div style={{ fontSize: '15px', paddingLeft: '60px', paddingTop: '8px' }}>Highly Recommended</div>

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

export default DoctorPage;
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
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import { useEffect } from 'react';
import API from '../api';

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
background-color:#FFB6C1 ;
padding:20px 20px 0 20px; 
`;

const SimpleFlexBox = styled.div`
display: flex;
justify-content: center;
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
  background-color: #FFB6C1;
  cursor: pointer;
  border: 2px solid #956C6E;
  border-radius: 6px;
  color: #956C6E;
  transition: 0.8s;
  margin-bottom:20px;


  &:hover {
    opacity: 1;
    background-color: #956C6E;
    border: 2px solid #956C6E;
    color: #fff;  }
`;

const RewButton = styled.button`
  padding: 5px;
  font-size: 13px;
  background-color: #FFB6C1;
  cursor: pointer;
  border: 2px solid #956C6E;
  border-radius: 6px;
  color: #956C6E;
  transition: 0.8s;
  margin-left:8px;

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
    height: 150px;
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
background-color:#FFB6C1;
`;

const FeedbackTitle = styled.div`
font-weight: 400;
font-size:32px;
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
const UserProfile = () => {


    const [alignment, setAlignment] = React.useState('left');
    const [formats, setFormats] = React.useState(() => ['italic']);
    const userInfoDetails = JSON.parse(localStorage.getItem("userInfo"));
    const [appointment, setAppointment] = useState();

    useEffect(() => {
        const getAppointments = async () => {
            try {
                const result = await API.get(`appointment/user/${userInfoDetails._id}`)
                console.log("result+++++++", result.data[0])
                if (result.length !== 0) {
                    setAppointment(result.data[0]);
                }
            } catch (err) {
                console.log("err", err)
            }
        };
        getAppointments();
    }, []);

    console.log("userInfoDetails", userInfoDetails)
    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
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
                        <Title>Profile</Title>
                        <Stack >

                            <Grid container spacing={2}>
                                <Grid sx={{ marginRight: '25px', borderRadius: '10px' }} item xs={4}>
                                    <div style={{ height: '420px', backgroundColor: '#fff', marginBottom: '25px', padding: '15px', borderRadius: '10px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>

                                        <CardContainer style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                                            <FlexBox style={{ backgroundColor: '#fff', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                                                <Avatar sx={{ width: 80, height: 80 }} alt={userInfoDetails && userInfoDetails.fullName} src="/static/images/avatar/2.jpg" />
                                            </FlexBox>
                                            <InsTitle style={{ backgroundColor: '#fff' }}>{userInfoDetails && userInfoDetails.fullName}</InsTitle>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                <div style={{ display: 'flex' }}>
                                                    <PlaceIcon />
                                                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}> From</div>
                                                </div>
                                                <div>
                                                    {userInfoDetails && userInfoDetails.address}
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                <div style={{ display: 'flex' }} >
                                                    <CallIcon />
                                                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}> Contact</div>
                                                </div>
                                                <div>
                                                    {userInfoDetails && userInfoDetails.mobileNo}
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                <div style={{ display: 'flex' }}>
                                                    <MailOutlineIcon />
                                                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}> Email</div>
                                                </div>
                                                <div>
                                                    {userInfoDetails && userInfoDetails.email}
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                <div style={{ display: 'flex' }}>
                                                    <PregnantWomanIcon />
                                                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}> Pregnancy Month</div>
                                                </div>
                                                <div>
                                                    {userInfoDetails && (((userInfoDetails.pregnancyDate.split('T'))[0]).split('-'))[1]}
                                                </div>
                                            </div>

                                        </CardContainer>
                                    </div>
                                </Grid>
                                <Grid sx={{ marginLeft: '25px', borderRadius: '10px' }} item xs={7}>
                                    <div style={{ height: '450px', backgroundColor: '#fff', marginBottom: '25px', borderRadius: '10px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>

                                        <div style={{ fontSize: '20px', color: '#fff', padding: '10px', backgroundColor: '#956C6E', height: '30px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                                            <div><b>Dashboard</b></div>
                                        </div>
                                        <div style={{ padding: '10px 30px ' }}><b>Recent Magazines you have read</b></div>
                                        <div style={{ paddingLeft: '60px' }}>
                                            <Grid container >
                                                <Grid sx={{ cursor: 'pointer' }} onClick={() => { window.open('https://www.pnmag.com/', '_blank'); }} item xs={2}>
                                                    <CardImage src="https://i.ibb.co/SQkCKxZ/pr1.png" />
                                                </Grid>
                                                <Grid sx={{ cursor: 'pointer' }} onClick={() => { window.open('https://www.fitpregnancy.com/', '_blank'); }} item xs={2}>
                                                    <CardImage src="https://i.ibb.co/8XdMr04/pr2.jpg" />
                                                </Grid>
                                                <Grid sx={{ cursor: 'pointer' }} onClick={() => { window.open('https://www.whattoexpect.com/pregnancy/', '_blank'); }} item xs={2}>
                                                    <CardImage src="https://i.ibb.co/yVCyQSd/pr3.jpg" />
                                                </Grid>

                                            </Grid>
                                        </div>
                                        <div style={{ padding: '10px 30px ' }}><b>Recent Audio books you listened</b></div>

                                        <div style={{ paddingLeft: '60px' }}>

                                            <Grid container >
                                                <Grid sx={{ cursor: 'pointer' }} onClick={() => { window.open('https://www.pnmag.com/', '_blank'); }} item xs={2}>
                                                    <CardImage src="https://i.ibb.co/C6yQZYB/51-Ue-UJRbwu-S-SL500.jpg" />
                                                </Grid>
                                                <Grid sx={{ cursor: 'pointer' }} onClick={() => { window.open('https://www.fitpregnancy.com/', '_blank'); }} item xs={2}>
                                                    <CardImage src="https://i.ibb.co/9V8fYFx/41-B9-Gjp3ea-L-SL500.jpg" />
                                                </Grid>
                                                <Grid sx={{ cursor: 'pointer' }} onClick={() => { window.open('https://www.whattoexpect.com/pregnancy/', '_blank'); }} item xs={2}>
                                                    <CardImage src="https://i.ibb.co/G5788YJ/41-Ab-MFY2y0-L-SL500.jpg" />
                                                </Grid>
                                                <Grid sx={{ cursor: 'pointer' }} onClick={() => { window.open('https://www.popsugar.com/family/pregnancy', '_blank'); }} item xs={2}>
                                                    <CardImage src="https://i.ibb.co/JCGyRMm/418ekjfs-HZL-SL500.jpg" />
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </div>
                                </Grid>



                            </Grid>

                            <Grid container spacing={2}>
                                <Grid sx={{ marginRight: '25px', borderRadius: '10px' }} item xs={4}>
                                    <div style={{ height: '450px', backgroundColor: '#fff', marginBottom: '25px', padding: '15px', borderRadius: '10px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>

                                        <DescTitle>Protein Recommendations </DescTitle>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <div style={{ width: '150px', border: '2px solid #956C6E' }}>
                                                    <SimpleFlexBox>
                                                        <CardImage src="https://i.ibb.co/GRCzYwF/proteinex-mama-chocolate-png.png" />
                                                    </SimpleFlexBox>
                                                    <SimpleFlexBox>
                                                        <div style={{ width: '150px', display: 'flex', justifyContent: 'center', color: '#fff', backgroundColor: '#956C6E', padding: '10px', cursor: 'pointer' }}><b>Shop Now</b></div>
                                                    </SimpleFlexBox>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div style={{ width: '150px', border: '2px solid #956C6E' }}>
                                                    <SimpleFlexBox>
                                                        <CardImage src="https://i.ibb.co/7jTdGM4/Vivamom-Maternal-Nutrition-Supplement-removebg-preview.png" />
                                                    </SimpleFlexBox>
                                                    <SimpleFlexBox>
                                                        <div style={{ width: '150px', display: 'flex', justifyContent: 'center', color: '#fff', backgroundColor: '#956C6E', padding: '10px', cursor: 'pointer' }}><b>Shop Now</b></div>
                                                    </SimpleFlexBox>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div style={{ width: '150px', border: '2px solid #956C6E' }}>
                                                    <SimpleFlexBox>
                                                        <CardImage src="https://i.ibb.co/F6b0Xr2/Horlick-removebg-preview.png" />
                                                    </SimpleFlexBox>
                                                    <SimpleFlexBox>
                                                        <div style={{ width: '150px', display: 'flex', justifyContent: 'center', color: '#fff', backgroundColor: '#956C6E', padding: '10px', cursor: 'pointer' }}><b>Shop Now</b></div>
                                                    </SimpleFlexBox>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div style={{ width: '150px', border: '2px solid #956C6E' }}>
                                                    <SimpleFlexBox>
                                                        <CardImage src="https://i.ibb.co/Gs4CYK2/geofit-mom-removebg-preview.png" />
                                                    </SimpleFlexBox>
                                                    <SimpleFlexBox>
                                                        <div style={{ width: '150px', display: 'flex', justifyContent: 'center', color: '#fff', backgroundColor: '#956C6E', padding: '10px', cursor: 'pointer' }}><b>Shop Now</b></div>
                                                    </SimpleFlexBox>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid sx={{ marginLeft: '25px', borderRadius: '10px' }} item xs={7}>
                                    <div style={{ height: '480px', marginTop: '15px', backgroundColor: '#fff', marginBottom: '25px', borderRadius: '10px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>



                                        <Grid container spacing={2}>
                                            <Grid sx={{ marginRight: '25px', borderRadius: '10px' }} item xs={5}>
                                                <div style={{ backgroundColor: '#FFB6C1', marginBottom: '25px', marginLeft: '25px', borderRadius: '10px' }}>

                                                    {appointment &&
                                                        <CardContainer >
                                                            <div style={{ fontSize: '15px', color: '#fff', padding: '10px', backgroundColor: '#956C6E', height: '50px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>

                                                                <FlexBox style={{ backgroundColor: 'transparent' }}>
                                                                    <Avatar sx={{ width: 80, height: 80 }} alt={appointment && appointment.doctorName} src="/static/images/avatar/2.jpg" />
                                                                </FlexBox>
                                                                <InsTitle><b>{appointment && appointment.doctorName}</b></InsTitle>
                                                                <InsTitle>{appointment && appointment.specialization}</InsTitle>

                                                            </div>
                                                            <div style={{ height: '230px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                                                                <FlexBox >
                                                                    <Button>View Profile</Button>
                                                                </FlexBox>
                                                            </div>
                                                            {/* <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '100px' }}>
                                                <div style={{ display: 'flex' }}>
                                                    <StarIcon />
                                                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>Rating</div>
                                                </div>
                                                <div>
                                                    4.5/5
                                                </div>
                                            </div> */}
                                                        </CardContainer>}
                                                </div>
                                            </Grid>
                                            <Grid sx={{ marginRight: '25px', borderRadius: '10px' }} item xs={6}>
                                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                    <FeedbackTitle>Your Appointments</FeedbackTitle>


                                                </div>

                                                {appointment &&
                                                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                        <div>
                                                            <div style={{ fontSize: '15px', color: '#808080', paddingTop: '20px' }}>Session Date </div>
                                                            <div style={{ fontSize: '18px', color: '#000' }}><b>{appointment && appointment.appointmentDate}</b></div>
                                                        </div>
                                                        <div>
                                                            <div style={{ fontSize: '15px', color: '#808080', paddingTop: '20px' }}>Session Period </div>
                                                            <div style={{ fontSize: '18px', color: '#000' }}><b>{appointment && ((appointment.appointmentTime).split(" "))[1] == "AM" ? 'Morning' : 'Evening'}</b></div>
                                                        </div>
                                                        <div>
                                                            <div style={{ fontSize: '15px', color: '#808080', paddingTop: '20px' }}>Session Time </div>
                                                            <div style={{ fontSize: '18px', color: '#000' }}><b>{appointment && appointment.appointmentTime}</b></div>
                                                        </div>
                                                    </div>
                                                }
                                                <div>
                                                    <div style={{ backgroundColor: '#FFB6C1', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', fontSize: '14px', color: '#000', marginTop: '40px' }}><div>How was the appointment went? </div><RewButton>Leave a Review</RewButton></div>
                                                </div>

                                            </Grid>

                                        </Grid>

                                    </div>
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

export default UserProfile;
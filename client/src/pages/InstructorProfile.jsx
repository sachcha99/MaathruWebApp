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
const InstructorProfile = () => {


    const [alignment, setAlignment] = React.useState('left');
    const [formats, setFormats] = React.useState(() => ['italic']);

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
                                    <div style={{ backgroundColor: '#fff', marginBottom: '25px', padding: '15px', borderRadius: '10px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>

                                        <CardContainer style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                                            <FlexBox style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                                                <Avatar sx={{ width: 80, height: 80 }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                            </FlexBox>
                                            <InsTitle>Gaia Kodithuwakku</InsTitle>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                <div style={{ display: 'flex' }}>
                                                    <PlaceIcon />
                                                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}> From</div>
                                                </div>
                                                <div>
                                                    Nugegoda
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                <div style={{ display: 'flex' }} >
                                                    <CallIcon />
                                                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}> Contact</div>
                                                </div>
                                                <div>
                                                    071 452 4789
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                                <div style={{ display: 'flex' }}>
                                                    <MailOutlineIcon />
                                                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}> Email</div>
                                                </div>
                                                <div>
                                                    gayakodi@gmail.com
                                                </div>
                                            </div>

                                        </CardContainer>
                                    </div>
                                </Grid>
                                <Grid sx={{ marginLeft: '25px', borderRadius: '10px' }} item xs={7}>
                                    <div style={{ height: '300px', backgroundColor: '#fff', marginBottom: '25px', borderRadius: '10px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>

                                        <div style={{ fontSize: '20px', color: '#fff', padding: '10px', backgroundColor: '#956C6E', height: '30px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                                            <div><b>My Portfolio</b></div>
                                        </div>
                                    </div>
                                </Grid>



                            </Grid>

                            <Grid container spacing={2}>
                                <Grid sx={{ marginRight: '25px', borderRadius: '10px' }} item xs={4}>
                                    <div style={{ height: '220px',backgroundColor: '#fff', marginBottom: '25px', padding: '15px', borderRadius: '10px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>

                                        <DescTitle>Description</DescTitle>
                                        <div style={{ fontSize: '12px' }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est nibh, malesuada sit amet pharetra at, gravida quis sapien. Nam ac congue lacus. In blandit orci sit amet lacus ultricies hendrerit. Etiam at tellus in sapien consectetur suscipit quis sit amet nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin et efficitur tellus. Duis placerat diam id efficitur euismod.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est nibh, malesuada sit amet pharetra at, gravida quis sapien. Nam ac congue lacus. In blandit orci sit amet lacus ultricies hendrerit. Etiam at tellus in sapien consectetur suscipit quis sit amet nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                        </div>
                                    </div>
                                </Grid>
                                <Grid sx={{ marginLeft: '25px', borderRadius: '10px' }} item xs={7}>
                                    <div style={{ height: '250px', backgroundColor: '#fff', marginBottom: '25px', borderRadius: '10px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>

                                        <div style={{ height:'100%',display: 'flex',flexDirection:'column' ,justifyContent: 'center', alignItems: 'center' }}>
                                            <FeedbackTitle>Any Experience with Gaia</FeedbackTitle>
                                            <Button>Leave a Feedback</Button>
                                            <div style={{ fontSize: '14px' }}>
                                                Your feedback will be only seen by Gaia
                                            </div>
                                        </div>

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

export default InstructorProfile;
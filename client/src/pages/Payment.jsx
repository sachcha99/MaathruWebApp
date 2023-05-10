import React, { useState } from 'react'
import Footer from '../components/Footer'
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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import Navbar from "../components/Navbar";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import TextField from '@mui/material/TextField';
import BadgeIcon from '@mui/icons-material/Badge';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import PaymentsModal from '../components/PaymentsModal';


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
height: 30px;
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

const ChangeButton = styled.button`
  padding: 12px;
  font-size: 15px;
  background-color: #fff;
  cursor: pointer;
  border: 2px solid #956C6E;
  border-radius: 6px;
  color: #956C6E;
  margin: 15px 0 0 0;
  transition: 0.8s;
  width:200px;


  &:hover {
    opacity: 1;
    background-color: #956C6E;
    border: 2px solid #956C6E;
    color: #fff;  }
`;

const Button = styled.button`
  padding: 12px;
  font-size: 15px;
  background-color: #ffd304;
  cursor: pointer;
  border: 2px solid #ffd304;
  border-radius: 6px;
  color: #fff;
  margin: 15px 0;
  transition: 0.8s;
  width:500px;


  &:hover {
    opacity: 0.7;
    background-color: #d9b300;
    border: 2px solid #d9b300;
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
padding:10px 0 0 0;
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
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
`;

const FormContainer = styled.div`
    display:'flex';
    flex-direction:'column';
    align-items:'center';
    flex-wrap:'wrap';
    // width:'100%';
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
const Payment = () => {


    const [alignment, setAlignment] = React.useState('left');
    const [formats, setFormats] = React.useState(() => ['italic']);
    const [userDetails, setUserDetails] = useState({ fullName: "", email: "", userType: "mother", password: "", confirmPassword: "", address: "", birthDate: dayjs('2022-04-17'), mobileNo: "", pregnancyDate: dayjs('2022-04-17') })

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
                        <Title>Payments</Title>
                        <Stack >

                            <Grid container spacing={2}  sx={{ display:'flex', justifyContent:'space-evenly' }} >
                                <Grid sx={{ marginRight: '25px', borderRadius: '10px' }} item xs={3}>
                                    

                                    <div style={{height:'300px', backgroundColor: '#fff', padding: '25px', marginBottom: '25px', borderRadius: '10px' }}>
                                        <ReviewsTitle>Appointment Details</ReviewsTitle>

                                        <div style={{ fontSize: '15px', color: '#808080', paddingTop: '20px' }}>Session Date </div>
                                        <div style={{ fontSize: '18px', color: '#000' }}><b>11/11/2023</b></div>

                                        <div style={{ fontSize: '15px', color: '#808080', paddingTop: '20px' }}>Session Period </div>
                                        <div style={{ fontSize: '18px', color: '#000' }}><b>Morning</b></div>

                                        <div style={{ fontSize: '15px', color: '#808080', paddingTop: '20px' }}>Session Time </div>
                                        <div style={{ fontSize: '18px', color: '#000' }}><b>11:30AM</b></div>

                                        <div style={{ fontSize: '12px' }}>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid sx={{ marginRight: '25px', borderRadius: '10px' }} item xs={3}>
                                <div style={{ height:'300px',backgroundColor: '#fff', padding: '25px', marginBottom: '25px', borderRadius: '10px' }}>
                                        <ReviewsTitle>Patient Details</ReviewsTitle>

                                        <div style={{ fontSize: '15px', color: '#808080', paddingTop: '20px' }}>Name </div>
                                        <div style={{ fontSize: '18px', color: '#000' }}><b>11/11/2023</b></div>

                                        <div style={{ fontSize: '15px', color: '#808080', paddingTop: '20px' }}>Mobile No </div>
                                        <div style={{ fontSize: '18px', color: '#000' }}><b>Morning</b></div>

                                        <div style={{ fontSize: '15px', color: '#808080', paddingTop: '20px' }}>Email</div>
                                        <div style={{ fontSize: '18px', color: '#000' }}><b>11:30AM</b></div>

                                        <div style={{ fontSize: '15px', color: '#808080', paddingTop: '20px' }}>Pregnancy Date</div>
                                        <div style={{ fontSize: '18px', color: '#000' }}><b>11/11/2023</b></div>

                                        <div style={{ fontSize: '12px' }}>
                                        </div>

                                    </div>

                                </Grid>
                                <Grid sx={{ borderRadius: '10px' }} item xs={3}>
                                    

                                    <div style={{ height:'300px',backgroundColor: '#fff', padding: '25px', marginBottom: '25px', borderRadius: '10px' }}>
                                        <ReviewsTitle>Payment Details</ReviewsTitle>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div style={{ fontSize: '15px', fontWeight: '500', color: '#3d3d3d', paddingTop: '20px' }}>Doctor Fee </div>
                                            <div style={{ fontSize: '15px', color: '#3d3d3d', fontWeight: '500', paddingTop: '20px' }}>Rs. 2500</div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div style={{ fontSize: '15px', fontWeight: '500', color: '#3d3d3d', paddingTop: '20px' }}>Hospital Fee </div>
                                            <div style={{ fontSize: '15px', color: '#3d3d3d', fontWeight: '500', paddingTop: '20px' }}>Rs. 400</div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div style={{ fontSize: '15px', fontWeight: '500', color: '#3d3d3d', paddingTop: '20px' }}>Discount </div>
                                            <div style={{ fontSize: '15px', color: '#3d3d3d', fontWeight: '500', paddingTop: '20px' }}>Rs. 0</div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div style={{ fontSize: '15px', fontWeight: '500', color: '#3d3d3d', paddingTop: '20px' }}>Service Fee </div>
                                            <div style={{ fontSize: '15px', color: '#3d3d3d', fontWeight: '500', paddingTop: '20px' }}>Rs. 100</div>
                                        </div>

                                        <Divider style={{ marginTop: '25px' }}/>

                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div style={{ fontSize: '15px', fontWeight: '700', color: '#956C6E', paddingTop: '20px' }}>Total Fee </div>
                                            <div style={{ fontSize: '15px', color: '#956C6E', fontWeight: '700', paddingTop: '20px' }}>Rs. 3000</div>
                                        </div>
                                    </div>



                                </Grid>


                            </Grid>
                            <ButtonContainer>

                                <Button>
                                <Image src="https://i.ibb.co/YB3xS2T/Pay-Pal-svg.png" />
                                </Button>
                                                                <PaymentsModal/>

                            </ButtonContainer>


                        </Stack>



                    </Wrapper>
                </div>
                <Footer />
            </Container>

        </>
    )
}

export default Payment;
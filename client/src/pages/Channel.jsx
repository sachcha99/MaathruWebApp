import React, { useState, useEffect} from 'react'
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
import { newAppointment } from '../redux/appointment';
import { useSelector, useDispatch } from 'react-redux';
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
  background-color: #fff;
  cursor: pointer;
  border: 2px solid #956C6E;
  border-radius: 6px;
  color: #956C6E;
  margin: 15px 0;
  transition: 0.8s;
  width:200px;


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
    display:'flex';
    justify-content:'space-evenly';
    width:'100%';
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
const Channel = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [alignment, setAlignment] = React.useState('left');
    const [formats, setFormats] = React.useState(() => ['italic']);
    const [userDetails, setUserDetails] = useState({ fullName: "", email: "",birthDate: dayjs('2022-04-17'), mobileNo: "", pregnancyDate: dayjs('2022-04-17') })
    const [pregnancyDate, setPregnancyDate] = useState("")
    const userInfoDetails = JSON.parse(localStorage.getItem("userInfo"));
    console.log("userInfoDetails:::",userInfoDetails)

    useEffect(() => {
        if (userInfoDetails) {
            
            setUserDetails({ fullName: userInfoDetails.fullName, email: userInfoDetails.email, birthDate: dayjs(userInfoDetails.birthDate.split('T')[0]), mobileNo: userInfoDetails.mobileNo, pregnancyDate: dayjs(userInfoDetails.pregnancyDate.split('T')[0]) })
            dispatch(newAppointment({ ...appointment.value.data, patientFullName: userInfoDetails.fullName, patientEmail: userInfoDetails.email, patientBirthDate: (dayjs(userInfoDetails.birthDate.split('T')[0])).$d.toISOString().split('T')[0], patientMobileNo: userInfoDetails.mobileNo, patientPregnancyDate: (dayjs(userInfoDetails.pregnancyDate.split('T')[0])).$d.toISOString().split('T')[0] }))

        }
    }, []);

    const handleBirthdate = (value) => {
        const date = new Date(value.$d);
        const formattedDate = date.toLocaleDateString("en-GB");
        setUserDetails({ ...userDetails, birthDate: value })
        dispatch(newAppointment({ ...appointment.value.data, 'patientBirthDate': formattedDate}))
    };

    const handleDate = (value) => {
        const date = new Date(value.$d);
        const formattedDate = date.toLocaleDateString("en-GB");
        console.log("value++++-------",value)

        console.log("value::", value.$d.toISOString().split('T')[0]);
        setPregnancyDate(formattedDate);
        setUserDetails({ ...userDetails, pregnancyDate: value })
        dispatch(newAppointment({ ...appointment.value.data, 'patientPregnancyDate': formattedDate }))
    };

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


    const appointment = useSelector((state) => state.appointment)
    console.log("appointment:::====", appointment)
    return (
        <>
            <Container>
                <Navbar />
                <div>
                    <Wrapper>
                        <Title>Channel a Doctor</Title>
                        <Stack >

                            <Grid container spacing={2}>
                                <Grid sx={{ marginRight: '25px', borderRadius: '10px' }} item xs={3}>
                                    <div style={{ backgroundColor: '#fff', marginBottom: '25px', borderRadius: '10px' }}>

                                        <CardContainer >
                                            <div style={{ fontSize: '15px', color: '#fff', padding: '10px', backgroundColor: '#956C6E', height: '50px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>

                                                <FlexBox style={{ backgroundColor: 'transparent' }}>
                                                    <Avatar sx={{ width: 80, height: 80 }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                                </FlexBox>
                                                <InsTitle><b>{appointment && appointment.value.data.doctorName}</b></InsTitle>
                                                <InsTitle>{appointment && appointment.value.data.specialization}</InsTitle>

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
                                        </CardContainer>
                                    </div>

                                    <div style={{ backgroundColor: '#fff', padding: '25px', marginBottom: '25px', borderRadius: '10px' }}>
                                        <ReviewsTitle>Appointment Details</ReviewsTitle>

                                        <div style={{ fontSize: '15px', color: '#808080', paddingTop: '20px' }}>Session Date </div>
                                        <div style={{ fontSize: '18px', color: '#000' }}><b>{appointment && appointment.value.data.appointmentDate}</b></div>

                                        <div style={{ fontSize: '15px', color: '#808080', paddingTop: '20px' }}>Session Period </div>
                                        <div style={{ fontSize: '18px', color: '#000' }}><b>{appointment && ((appointment.value.data.appointmentTime).split(" "))[1] == "AM" ? 'Morning' : 'Evening'}</b></div>

                                        <div style={{ fontSize: '15px', color: '#808080', paddingTop: '20px' }}>Session Time </div>
                                        <div style={{ fontSize: '18px', color: '#000' }}><b>{appointment && appointment.value.data.appointmentTime}</b></div>

                                        <div style={{ fontSize: '12px' }}>
                                        </div>
                                        <FlexBox >
                                            <ChangeButton>Change Appointment</ChangeButton>
                                        </FlexBox>
                                    </div>
                                </Grid>
                                <Grid sx={{ marginRight: '25px', borderRadius: '10px' }} item xs={5}>
                                    <div style={{ backgroundColor: '#fff', marginBottom: '25px', borderRadius: '10px' }}>
                                        <div style={{ fontSize: '15px', color: '#fff', padding: '10px', backgroundColor: '#956C6E', height: '50px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                                            <div><b>Welcome to Maathru</b></div>
                                            Wishing you good health {userInfoDetails && userInfoDetails.fullName}
                                        </div>
                                        <div style={{ height: '580px', display: 'flex', flexDirection: 'column', padding: '15px', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', marginLeft: '25px' }}>
                                                <ReviewsTitle>Your Details</ReviewsTitle>
                                                <div style={{ fontSize: '12px', color: '#808080', marginBottom: '25px' }}>Channeling for a different patient? No worries! Edit this below form. </div>
                                            </div>
                                            <TextField
                                                label="Full Name"
                                                id="fullName"
                                                autoComplete='off'
                                                value={userDetails.fullName}
                                                onChange={(e) => { setUserDetails({ ...userDetails, fullName: e.target.value }); dispatch(newAppointment({ ...appointment.value.data, 'patientFullName': e.target.value })) }}
                                                sx={{
                                                    "& .MuiInputBase-root": {
                                                        width: 500
                                                    },

                                                    input: { color: 'black', marginLeft: '8px' },
                                                    m: 1, fieldset: { borderColor: "black" },
                                                    "& .MuiOutlinedInput-root.Mui-focused": {
                                                        "& > fieldset": {
                                                            borderColor: "black"
                                                        }
                                                    }

                                                }}
                                                InputLabelProps={{
                                                    style: { color: '#000' },
                                                }}
                                                InputProps={{
                                                    sx: {
                                                        width: '100%'
                                                    },
                                                    startAdornment: <BadgeIcon style={{ color: 'black' }} />,
                                                }}
                                            />


                                            <TextField
                                                label="Mobile Number"
                                                id="mobileNo"
                                                type="tel"
                                                autoComplete='off'
                                                value={userDetails.mobileNo}
                                                onChange={(e) => { setUserDetails({ ...userDetails, mobileNo: e.target.value }); dispatch(newAppointment({ ...appointment.value.data, 'patientMobileNo': e.target.value })) }}
                                                sx={{
                                                    "& .MuiInputBase-root": {
                                                        width: 500
                                                    },

                                                    input: { color: 'black', marginLeft: '8px' },
                                                    m: 1, fieldset: { borderColor: "black" },
                                                    "& .MuiOutlinedInput-root.Mui-focused": {
                                                        "& > fieldset": {
                                                            borderColor: "black"
                                                        }
                                                    }

                                                }}
                                                InputLabelProps={{
                                                    style: { color: '#000' },
                                                }}
                                                InputProps={{
                                                    sx: {
                                                        width: '100%'
                                                    },
                                                    startAdornment: <CallIcon style={{ color: 'black' }} />,
                                                }}
                                            />

                                            <TextField
                                                label="E-mail"
                                                onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }); dispatch(newAppointment({ ...appointment.value.data, 'patientEmail': e.target.value })) }}
                                                value={userDetails.email}
                                                type='email'
                                                id="email"
                                                autoComplete='off'
                                                sx={{
                                                    "& .MuiInputBase-root": {
                                                        width: 500
                                                    },
                                                    input: { color: 'black', marginLeft: '8px' },
                                                    m: 1, fieldset: { borderColor: "black" },
                                                    "& .MuiOutlinedInput-root.Mui-focused": {
                                                        "& > fieldset": {
                                                            borderColor: "black"
                                                        }
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    style: { color: '#000' },
                                                }}
                                                InputProps={{
                                                    sx: {
                                                        width: '100%'
                                                    },
                                                    startAdornment: <MailOutlineIcon style={{ color: 'black' }} />,
                                                }}
                                            />



                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['DatePicker', 'DatePicker']}>

                                                    <DatePicker
                                                        label="Birth Date"
                                                        onChange={(newValue) => { handleBirthdate(newValue) }}
                                                        value={userDetails.birthDate}
                                                        sx={{
                                                            "& .MuiInputBase-root": {
                                                                width: 500
                                                            },

                                                            input: { color: 'black', marginLeft: '8px', borderColor: "black" },
                                                            m: 1, fieldset: { borderColor: "black" },
                                                            "& .MuiOutlinedInput-root.Mui-focused": {
                                                                "& > fieldset": {
                                                                    borderColor: "black"
                                                                }
                                                            }

                                                        }}
                                                        InputLabelProps={{
                                                            style: { color: '#000', borderColor: "black" },
                                                        }}
                                                    />
                                                </DemoContainer>

                                            </LocalizationProvider>

                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['DatePicker', 'DatePicker']}>

                                                    <DatePicker
                                                        label="Date of Pregnancy"
                                                        onChange={(newValue) => { handleDate(newValue) }}

                                                        value={userDetails.pregnancyDate}
                                                        sx={{
                                                            "& .MuiInputBase-root": {
                                                                width: 500
                                                            },

                                                            input: { color: 'black', marginLeft: '8px', borderColor: "black" },
                                                            m: 1, fieldset: { borderColor: "black" },
                                                            "& .MuiOutlinedInput-root.Mui-focused": {
                                                                "& > fieldset": {
                                                                    borderColor: "black"
                                                                }
                                                            }

                                                        }}
                                                        InputLabelProps={{
                                                            style: { color: '#000', borderColor: "black" },
                                                        }}
                                                    />
                                                </DemoContainer>

                                            </LocalizationProvider>

                                            <ButtonContainer style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                                                <Button>Go Back</Button>
                                                {/* <PaymentsModal disabled={!appointment.value.data.patientFullName && !appointment.value.data.patientMobileNo && !appointment.value.data.patientEmail && !appointment.value.data.patientBirthDate && !appointment.value.data.patientPregnancyDate  }/> */}
                                                <CheckButton onClick={() => { navigate('/payment') }}>Confirm & Pay</CheckButton>
                                            </ButtonContainer>
                                        </div>
                                    </div>

                                </Grid>
                                <Grid sx={{ borderRadius: '10px' }} item xs={3}>
                                    <div style={{ backgroundColor: '#fff', padding: '25px', marginBottom: '25px', borderRadius: '10px' }}>
                                        <ReviewsTitle>Patient Details</ReviewsTitle>

                                        <div style={{ fontSize: '15px', color: '#808080', paddingTop: '20px' }}>Name </div>
                                        <div style={{ fontSize: '18px', color: '#000' }}><b>{userDetails && userDetails.fullName ? userDetails.fullName : ""}</b></div>

                                        <div style={{ fontSize: '15px', color: '#808080', paddingTop: '20px' }}>Mobile No </div>
                                        <div style={{ fontSize: '18px', color: '#000' }}><b>{userDetails && userDetails.mobileNo ? userDetails.mobileNo : ""}</b></div>

                                        <div style={{ fontSize: '15px', color: '#808080', paddingTop: '20px' }}>Email</div>
                                        <div style={{ fontSize: '18px', color: '#000' }}><b>{userDetails && userDetails.email ? userDetails.email : ""}</b></div>

                                        <div style={{ fontSize: '15px', color: '#808080', paddingTop: '20px' }}>Pregnancy Date</div>
                                        <div style={{ fontSize: '18px', color: '#000' }}><b>{pregnancyDate && pregnancyDate}</b></div>


                                        <div style={{ fontSize: '12px' }}>
                                        </div>

                                    </div>

                                    <div style={{ backgroundColor: '#fff', padding: '25px', marginBottom: '25px', borderRadius: '10px' }}>
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

                                        <Divider style={{ marginTop: '25px' }} />

                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div style={{ fontSize: '15px', fontWeight: '700', color: '#956C6E', paddingTop: '20px' }}>Total Fee </div>
                                            <div style={{ fontSize: '15px', color: '#956C6E', fontWeight: '700', paddingTop: '20px' }}>Rs. 3000</div>
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

export default Channel;
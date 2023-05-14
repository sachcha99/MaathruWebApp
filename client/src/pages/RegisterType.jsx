import styled from "styled-components";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import React, { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// import API from './../api'
// import { useSelector, useDispatch } from 'react-redux';
// import { login, userInfo } from '../redux/user';
// import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffe6e6;
  background-size: cover;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffe6e6;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 70%;
  height: 400px;
  padding: 20px;
  background: rgb(0,0,0);
  background: #FFB6C1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 14px;

`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.div`
  font-size: 12px;
  margin: 20px 0px;
  width: 500px
`;

const LogInSpan = styled.span`
  margin-left: 5px;
  color: #7d9eff;
`;

const LogInDiv = styled.div`
  width: 500px
  font-size: 12px;
  display: flex;
  justify-content: center
`;

const Button = styled.button`
  width: 500px;
  border: none;
  padding: 15px 20px;
  background-color: white;
  color:#2148C0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top:10px;
`;

const RadioButtonContainer = styled.div`
  flex: 1;
  min-width: 80%;
  margin: 20px 10px 0px 0px;
  padding: 10px;  
  border:1px solid #767676;
  border-radius: 3px; 
  display: flex;
`;

const RadioInput = styled.div`
  display: flex;
  margin: 0 10px
`;

const LogoImg = styled.img`
  width: 100px;
  position: absolute;
  top: 5px;
  left: 5px;
  // background-color: white;
`;

const CartImg = styled.img`
  width: 120px;
`;

const OrImg = styled.img`
  width: 500px;
  margin: 15px 0;
`;


const SocialImg = styled.img`
  width: 200px;
  margin: 15px 0;
`;

const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
width: 100%;
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
width: 340px;
height: 280px;
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
cursor: pointer;
border-radius: 14px;


`;

const ImgContainer = styled.div`
height: 100%;
flex: 1;
`;


const CardTitle = styled.div`
margin: 10px 0;
font-size:20px;
font-weight:600;
color:#956C6E;

`;

const Image = styled.img`
padding-top:25px;
  height: 180px;
`;
const RegisterType = () => {
  const [userDetails, setUserDetails] = useState({ username: "", password: "" })
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState("");
  const [snackbarMsg, setSnackbarMsg] = useState("");
  //   const user = useSelector((state) => state.user)
  //   const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     if (userDetails.password !== "" && userDetails.username !== "") {

  //       console.log("userDetails::", userDetails)
  //       try {
  //         const result = await API.post('user/validate', userDetails)
  //         console.log("result", result)
  //         setSnackbarType("success")
  //         setSnackbarMsg("Logged In Successfully")
  //         handleOpenSnackbar()
  //         let decodedToken = jwt_decode(result.data.token)
  //         localStorage.setItem('token', result.data.token)
  //         localStorage.setItem('userInfo', JSON.stringify(result.data.userDetails))
  //         dispatch(login({ 'fullName': decodedToken.fullName, 'username': decodedToken.username }))
  //         dispatch(userInfo(result.data.userDetails))
  //         if (result.data.userDetails.userType === "buyer") {
  //           navigate('/')
  //         }
  //         if (result.data.userDetails.userType === "seller") {
  //           navigate('/sellerDashboard')
  //         }
  //         if (result.data.userDetails.userType === "admin") {
  //           navigate('/adminDashboard')
  //         }

  //       } catch (error) {
  //         console.log("error", error)
  //         setSnackbarType("error")
  //         setSnackbarMsg(error.response.data)
  //         handleOpenSnackbar()
  //       }

  //     }
  //     else {
  //       setSnackbarType("error")
  //       setSnackbarMsg("Please fill all the fields")
  //       handleOpenSnackbar()
  //     }

  //   };

  return (
    <MainContainer>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>WHY ARE YOU HERE?</Title>

          <CardContainer>
            <CardBox>
              <Card onClick={() => { navigate("/registerMother") }}>
                <ImgContainer>
                  <Image src="https://i.ibb.co/3SnYw9B/Mask-Group-8.png" />
                </ImgContainer>
                <CardTitle>I am having a baby</CardTitle>
              </Card>
            </CardBox>
            <CardBox>
              <Card onClick={() => { navigate("/registerInstructor") }}>
                <ImgContainer>
                  <Image src="https://i.ibb.co/YfWWvJj/Mask-Group-7.png" />
                </ImgContainer>
                <CardTitle>I am here to Instruct</CardTitle>
              </Card>
            </CardBox>
          </CardContainer>

        </Wrapper>
      </Container>
    </MainContainer>
  );
};

export default RegisterType;

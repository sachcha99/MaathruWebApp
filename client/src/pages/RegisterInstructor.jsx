import { useRef } from "react";
import styled from "styled-components";
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import BadgeIcon from "@mui/icons-material/Badge";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "../components/Navbar";
import ReactPlayer from "react-player";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import api from "../api";
import { Box, IconButton, Typography } from "@mui/material";
import { useEffect } from "react";

// import API from './../api'
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MainContainer = styled.div`
  width: 100vw;
  height: 140vh;
  background-color: #ffe6e6;
  background-size: cover;
`;

const Container = styled.div`
  width: 100vw;
  height: 230vh;
  background-color: #ffe6e6;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 600px;
  padding: 20px;
  background: rgb(0, 0, 0);
  background: #ffb6c1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 26px;
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
  width: 500px;
`;

const SignUpSpan = styled.span`
  margin-left: 5px;
  color: #956c6e;
`;

const SignUpDiv = styled.div`
  width: 500px
  font-size: 12px;
  display: flex;
  justify-content: center;
  margin-top:15px;
`;

const Button = styled.button`
  width: 500px;
  border: none;
  padding: 15px 20px;
  background-color: #956c6e;
  color: #feeced;
  font-size: 17px;
  font-weight: 600;
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
  margin-top: 10px;
`;

const RadioButtonContainer = styled.div`
  flex: 1;
  min-width: 80%;
  margin: 10px 10px 0px 10px;
  padding: 6px 10px 6px 10px;

  border: 1.5px solid #fff;
  border-radius: 3px;
  display: flex;
`;

const RadioInput = styled.div`
  display: flex;
  margin: 0 10px;
`;

const LogoImg = styled.img`
  width: 100px;
  position: absolute;
  top: 5px;
  left: 5px;
  // background-color: white;
`;

const CartImg = styled.img`
  width: 40px;
`;

const OrImg = styled.img`
  width: 500px;
  margin: 15px 0;
`;

const SocialImg = styled.img`
  width: 200px;
  margin: 15px 0;
`;

const FlexBox = styled.div`
  display: flex;
  width: "40%";
`;

const FileWrapper = styled.div`
  width: 500px;
  border: 1.5px solid black;
  border-radius: 1px;
  height: 30vh;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FileToolBox = styled.div`
  width: 200px;
  border: 1px dotted black;
  border-radius: 1px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UploadButton = styled.button`
  width: 100px;
  border: none;
  padding: 15px 20px;
  background-color: #956c6e;
  color: #feeced;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
`;

const ClearButton = styled.button`
  width: 100px;
  border: none;
  padding: 15px 20px;
  background-color: red;
  color: #feeced;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
`;

const RegisterInstructor = () => {
  const fileInputRef = useRef(null);
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    address: "",
    userType: "instructor",
    password: "",
    mobileNo: "",
    description: "",
    portfolio: "",
    report: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState("");
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [disable, setDisable] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  useEffect(() => {
    if (imageUrl) {
      console.log("imageUrl:::", imageUrl);
      setUserDetails({ ...userDetails, report: imageUrl });
    }
  }, [imageUrl]);

  const handleFileChange = (event) => {
    if (fileInputRef.current && fileInputRef.current.files) {
      setSelectedFile(fileInputRef.current.files[0]);
      setPreview(URL.createObjectURL(fileInputRef.current.files[0]));
    }
  };

  const handleClear = () => {
    setPreview(null);
    setSelectedFile(null);
  };

  console.log(userDetails.report);

  const handleSubmit = async (event) => {
    console.log(userDetails.report);
    event.preventDefault();
    setDisable(true);
    try {
      let videoResult = null;
      if (selectedFile) {
        let formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("fileName", selectedFile.name);
        videoResult = await api.post("video/create", formData);
      }
      if (
        userDetails.fullName !== "" &&
        userDetails.email !== "" &&
        userDetails.password !== "" &&
        confirmPassword !== "" &&
        userDetails.description !== "" &&
        userDetails.address !== "" &&
        userDetails.mobileNo !== ""
        // userDetails.report !== ""
      ) {
        if (userDetails.password === confirmPassword) {
          if (!isValidEmail(userDetails.email)) {
            setSnackbarType("error");
            setSnackbarMsg("Please enter a valid email");
            handleOpenSnackbar();
          } else {
            try {
              console.log("userDetails", userDetails);
              const result = await api.post("user/create", {
                ...userDetails,
                portfolio: videoResult ? videoResult.data.publicLink : "",
              });
              console.log("result", result);
              setUserDetails({
                fullName: "",
                email: "",
                userType: "instructor",
                password: "",
                address: "",
                mobileNo: "",
                description: "",
                portfolio: "",
                report: "",
              });
              setImageUrl();
              setConfirmPassword("");
              setSelectedFile(null);
              setPreview(null);
              setSnackbarType("success");
              setSnackbarMsg("User Created Successfully");
              setDisable(false);
              handleOpenSnackbar();
            } catch (error) {
              setDisable(false);
              setSnackbarType("error");
              setSnackbarMsg(error.response.data.message);
              handleOpenSnackbar();
            }
          }
        } else {
          setDisable(false);
          setSnackbarType("error");
          setSnackbarMsg("Passwords are not matched");
          handleOpenSnackbar();
        }
      } else {
        setDisable(false);
        setSnackbarType("error");
        setSnackbarMsg("Please fill all the fields");
        handleOpenSnackbar();
      }
    } catch (error) {
      setDisable(false);
      setSnackbarType("error");
      setSnackbarMsg("File upload fail");
      handleOpenSnackbar();
    }
  };

  return (
    <MainContainer>
      <Navbar />
      <Container>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarType}
            sx={{ width: "100%" }}
          >
            {snackbarMsg}
          </Alert>
        </Snackbar>
        <Wrapper>
          <Title>REGISTER</Title>

          <TextField
            label="Full Name"
            id="fullName"
            autoComplete="off"
            value={userDetails.fullName}
            onChange={(e) => {
              setUserDetails({ ...userDetails, fullName: e.target.value });
            }}
            sx={{
              "& .MuiInputBase-root": {
                width: 500,
              },

              input: { color: "black", marginLeft: "8px" },
              m: 1,
              fieldset: { borderColor: "black" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "black",
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
            InputProps={{
              sx: {
                width: "100%",
              },
              startAdornment: <BadgeIcon style={{ color: "black" }} />,
            }}
          />
          <TextField
            label="E-mail"
            onChange={(e) => {
              setUserDetails({ ...userDetails, email: e.target.value });
            }}
            value={userDetails.email}
            type="email"
            id="email"
            autoComplete="off"
            sx={{
              "& .MuiInputBase-root": {
                width: 500,
              },
              input: { color: "black", marginLeft: "8px" },
              m: 1,
              fieldset: { borderColor: "black" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "black",
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
            InputProps={{
              sx: {
                width: "100%",
              },
              startAdornment: <MailOutlineIcon style={{ color: "black" }} />,
            }}
          />

          <TextField
            type="password"
            label="Password"
            onChange={(e) => {
              setUserDetails({ ...userDetails, password: e.target.value });
            }}
            id="password"
            value={userDetails.password}
            sx={{
              "& .MuiInputBase-root": {
                width: 500,
              },
              input: { color: "black", marginLeft: "8px" },
              m: 1,
              fieldset: { borderColor: "black" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "black",
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
            InputProps={{
              sx: {
                width: "100%",
              },
              startAdornment: <KeyIcon style={{ color: "black" }} />,
            }}
          />

          <TextField
            type="password"
            label="Confirm Password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            id="confirmPassword"
            value={confirmPassword}
            sx={{
              "& .MuiInputBase-root": {
                width: 500,
              },
              input: { color: "black", marginLeft: "8px" },
              m: 1,
              fieldset: { borderColor: "black" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "black",
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
            InputProps={{
              sx: {
                width: "100%",
              },
              startAdornment: <KeyIcon style={{ color: "black" }} />,
            }}
          />

          <TextField
            label="Address"
            id="fullName"
            autoComplete="off"
            value={userDetails.address}
            onChange={(e) => {
              setUserDetails({ ...userDetails, address: e.target.value });
            }}
            sx={{
              "& .MuiInputBase-root": {
                width: 500,
              },

              input: { color: "black", marginLeft: "8px" },
              m: 1,
              fieldset: { borderColor: "black" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "black",
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
            InputProps={{
              sx: {
                width: "100%",
              },
              startAdornment: <HomeIcon style={{ color: "black" }} />,
            }}
          />

          <TextField
            label="Mobile Number"
            id="mobileNo"
            type="tel"
            autoComplete="off"
            value={userDetails.mobileNo}
            onChange={(e) => {
              setUserDetails({ ...userDetails, mobileNo: e.target.value });
            }}
            sx={{
              "& .MuiInputBase-root": {
                width: 500,
              },

              input: { color: "black", marginLeft: "8px" },
              m: 1,
              fieldset: { borderColor: "black" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "black",
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
            InputProps={{
              sx: {
                width: "100%",
              },
              startAdornment: <CallIcon style={{ color: "black" }} />,
            }}
          />
          <TextField
            id="description"
            name="description"
            label="Description"
            autoComplete="description"
            value={userDetails.description}
            onChange={(e) => {
              setUserDetails({ ...userDetails, description: e.target.value });
            }}
            variant="outlined"
            multiline
            rows={4}
            sx={{
              "& .MuiInputBase-root": {
                width: 500,
              },

              input: { color: "black", marginLeft: "8px" },
              m: 1,
              fieldset: { borderColor: "black" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "black",
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
            InputProps={{
              sx: {
                width: "100%",
              },
            }}
          />
          <Typography
            sx={{
              marginTop: "10px",
              marginBottom: "2px",
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "left",
            }}
          >
            Portfolio
          </Typography>
          {preview ? (
            <Box sx={{ position: "relative", marginTop: "8px" }}>
              <ReactPlayer
                height={"300px"}
                width={"500px"}
                url={preview}
                controls={true}
              />
              <IconButton
                sx={{ position: "absolute", top: 5, right: 0, color: "red" }}
                aria-label="upload"
              >
                <CloseIcon onClick={handleClear} />
              </IconButton>
            </Box>
          ) : (
            <FileWrapper onClick={() => fileInputRef.current?.click()}>
              <Input
                style={{ display: "none" }}
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <IconButton aria-label="upload">
                <AddIcon />
              </IconButton>
              <Typography>Add a Video</Typography>
            </FileWrapper>
          )}
          <Typography
            sx={{
              marginTop: "10px",
              marginBottom: "2px",
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "left",
            }}
          >
            Upload Reports
          </Typography>
          <UploadDropzone
            uploader={Uploader({ apiKey: "free" })} // Required.
            options={{ multi: false }} // Optional.
            width="90%" // Optional.
            height="350px" // Optional.
            onUpdate={(files) => {
              // Optional.
              if (files.length === 0) {
                console.log("No files selected.");
              } else {
                console.log("Files uploaded:");
                console.log(files.map((f) => f.fileUrl));
                setImageUrl(files.map((f) => f.fileUrl)[0]);
              }
            }}
          />

          <ButtonContainer>
            {/* <Button onClick={(e) => handleSubmit(e)}>SIGN UP</Button> */}
            <Button disabled={disable} onClick={(e) => handleSubmit(e)}>
              Register
            </Button>
          </ButtonContainer>
          <SignUpDiv>
            Already have an account
            <Link style={{ textDecoration: "none" }} to="/login">
              {" "}
              <SignUpSpan>Log In</SignUpSpan>
            </Link>
          </SignUpDiv>
        </Wrapper>
      </Container>
    </MainContainer>
  );
};

export default RegisterInstructor;

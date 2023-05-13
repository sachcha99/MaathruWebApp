import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import { Box, Button, IconButton } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import api from "../api";

const Container = styled.div`
  width: 100vw;
  background-color: #fff;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 20px;
  background: rgb(0, 0, 0);
  background: #ffb6c1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
`;

const RejectButton = styled.button`
  padding: 10px;
  border: 2px solid #e10000;
  background-color: #e10000;
  cursor: pointer;
  font-weight: 700;
  color: white;
  border-radius: 10px;
  transition: 0.8s;
  width: 90px;

  &:hover {
    opacity: 1;
    background-color: #7b0000;
  }
`;

const ApproveButton = styled.button`
  padding: 10px;
  border: 2px solid #00a429;
  background-color: #00a429;
  cursor: pointer;
  font-weight: 700;
  color: white;
  border-radius: 10px;
  transition: 0.8s;
  width: 90px;

  &:hover {
    opacity: 1;
    background-color: #005916;
  }
`;

const StatusButton = styled.button`
  padding: 15px;
  border: 2px solid white;
  background-color: #e9e9e9;
  cursor: pointer;
  font-weight: 700;
  color: black;
  border-radius: 8px;
  transition: 0.8s;

  &:hover {
    opacity: 1;
    background-color: #aaaaaa;
  }
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  margin-left: 15px;
  border-radius: 50%;
  display: inline-block;
`;

const Dashboard = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    console.log("call");
    const result = await api.get(`user/type/${1}`);
    setData(result?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnPress = async (id, type) => {
    console.log("call", id, type);
    const result = await api.put(`user/update/${id}`, {
      isVerified: type,
      _id: id,
    });
    console.log(result);
    fetchData();
  };

  return (
    <>
      <Container>
        <Navbar />
        <div>
          <Wrapper>
            <Box>
              <Typography variant="h4" component="div" gutterBottom>
                Welcome to your Dashboard!
              </Typography>
              <Typography variant="h6" component="div" gutterBottom>
                Here you can view your profile, edit your profile, and view your
                students.
              </Typography>
              {data?.length > 0 ? (
                data?.map((user) => (
                  <Box
                    key={user?._id}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      background: "white",
                      borderRadius: "8px",
                      p: 2,
                      height: "200px",
                      boxSizing: "border-box",
                      marginBlock: 4,
                      boxShadow: "-1px 1px 7px 1px #DBBACD",
                    }}
                  >
                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        boxSizing: "border-box",
                      }}
                    >
                      <Typography variant="h6" component="div" gutterBottom>
                        Profile
                      </Typography>
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <BadgeIcon
                          fontSize="small"
                          style={{ color: "black" }}
                        />
                        Name: {user?.fullName}
                      </Typography>
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <MailOutlineIcon
                          fontSize="small"
                          style={{ color: "black" }}
                        />{" "}
                        Email: {user?.email}
                      </Typography>
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <CallIcon fontSize="small" style={{ color: "black" }} />{" "}
                        Phone Number: {user?.mobileNo}
                      </Typography>
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <HomeIcon fontSize="small" style={{ color: "black" }} />{" "}
                        Address: {user?.address}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        boxSizing: "border-box",
                        height: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: 14,
                        }}
                      >
                        Download documents
                        <IconButton aria-label="delete" size="large">
                          <DownloadForOfflineRoundedIcon
                            fontSize="inherit"
                            color="#407ebd"
                          />
                        </IconButton>
                      </Box>
                      {!user.isVerified === 'approved'|| 'Rejected'? (
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <ApproveButton
                            onClick={() => handleOnPress(user?._id, "approved")}
                          >
                            Approve
                          </ApproveButton>
                          <RejectButton
                            onClick={() => handleOnPress(user?._id, "Rejected")}
                          >
                            Reject
                          </RejectButton>
                        </Box>
                      ) : (
                        <StatusButton>
                          {user.isVerified === "approved"
                            ? "Approved"
                            : "Rejected"}
                          <Dot
                            style={
                              user.isVerified === "approved"
                                ? { backgroundColor: "green" }
                                : { backgroundColor: "red" }
                            }
                          />
                        </StatusButton>
                      )}
                    </Box>
                  </Box>
                ))
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                    height: "300px",
                  }}
                >
                  <Typography variant="h6" component="div" gutterBottom>
                    No data to show
                  </Typography>
                </Box>
              )}
            </Box>
          </Wrapper>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default Dashboard;

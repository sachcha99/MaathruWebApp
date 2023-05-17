import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  const NavbarContainer = styled.div`
    height: 85px !important;
    width: 100vw;
    height: 100%;
    background-color: #000000;
  `;

  const Wrapper = styled.div`
    padding: 10px 20px;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.6531862745098039) 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: -30px;
    padding-right: 40px;
  `;

  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;

  const Center = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;

  const MenuItm = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    color: white;
  `;

  const Login = styled.div`
    font-size: 14px;
    cursor: pointer;
    color: white;
  `;
  const ToolWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
  `;

  const LogoImg = styled.img`
    width: 70px;
    padding-left: 20px;
  `;

  const token = localStorage.getItem("token") || null;
  const userInfoDetails = JSON.parse(localStorage.getItem("userInfo"));
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [openMenu, setOpenMenu] = React.useState(false);

  const handleOpenUserMenu = (event) => {
    if (token) {
      setOpenMenu(true);
    } else {
      navigate("/login");
    }
  };

  const handleCloseUserMenu = () => {
    setOpenMenu(false);
  };
  const logout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    navigate("/");
    window.location.reload();
  };

  const handleClickMenuItem = () => {
    if (userInfoDetails?.userType === "admin") {
      navigate("/dashboard");
    } else if (userInfoDetails?.userType === "mother") {
      navigate("/profile");
    } else {
      navigate("/insProfile");
    }
  };

  return (
    <NavbarContainer>
      <Wrapper>
        <Left>
          {userInfoDetails?.userType !== "instructor" ? <Link style={{ textDecoration: "none" }} to="/">
            <LogoImg src="https://i.ibb.co/rcGdSJP/Component-1-1.png" />
          </Link>
          :< Link style={{ textDecoration: "none" }} >
            <LogoImg src="https://i.ibb.co/rcGdSJP/Component-1-1.png" />
          </Link>}
        </Left>
        <Right>
          {userInfoDetails?.userType !== "instructor" && <>
            <Link style={{ textDecoration: "none" }} to="/">
              <MenuItm>HOME</MenuItm>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/">
              <MenuItm>SERVICES</MenuItm>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/">
              <MenuItm>ABOUT US</MenuItm>
            </Link>
          </>
          }
          <Box
            sx={{
              flexGrow: 0,
              ml: 3,
              backgroundColor: "#2b2626",
              borderRadius: 10,
              paddingInline: 1,
              paddingBlock: 0.5,
            }}
          >
            <Tooltip title={token ? "open menu" : "login"}>
              <Stack
                flexDirection="row"
                gap={1}
                alignItems="center"
                onClick={handleOpenUserMenu}
              >
                <IconButton sx={{ p: 0 }}>
                  <AccountCircleIcon sx={{ color: "white" }} />
                </IconButton>
                <Link style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "regular",
                    }}
                  >
                    {token ? userInfoDetails?.fullName.split(" ")[0] : "Login"}
                  </Typography>
                </Link>
              </Stack>
            </Tooltip>
            {token ? (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openMenu}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleClickMenuItem}>
                  <Typography textAlign="center">
                    {userInfoDetails?.userType === "admin"
                      ? "Dashboard"
                      : "View Profile"}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    logout();
                  }}
                >
                  <LogoutIcon fontSize="16px" sx={{ color: "black" }} />
                  <Typography
                    sx={{
                      ml: 1,
                    }}
                  >
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            ) : null}
          </Box>
        </Right>
      </Wrapper>
    </NavbarContainer>
  );
};

export default Navbar;

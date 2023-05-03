import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';

const Navbar = () => {

    const NavbarContainer = styled.div`
    height: 85px !important;
    width: 100vw;
    height: 100%;
    background-color: #000000;
`;

    const Wrapper = styled.div`
    padding: 10px 20px;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0.6531862745098039) 0%, rgba(0,0,0,0.65) 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: -30px;
    padding-right:40px;
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
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const logout = (e) => {
        localStorage.removeItem("token");
        localStorage.removeItem("userInfo");
        window.location.reload();
        navigate("/");
    }

    return (
        <NavbarContainer>
            <Wrapper>
                <Left>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <LogoImg src='https://i.ibb.co/rcGdSJP/Component-1-1.png' />
                    </Link>
                </Left>
                <Right>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <MenuItm>HOME</MenuItm>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/products">
                        <MenuItm>SERVICES</MenuItm>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/categories">
                        <MenuItm>ABOUT US</MenuItm>
                    </Link>
                    {!token ?
                        <ToolWrapper>
                            <IconButton>
                                <AccountCircleIcon sx={{ color: "white" }} />
                            </IconButton>
                            <Link style={{ textDecoration: 'none' }} to="/login">
                                <Login>LOGIN</Login>
                            </Link>
                        </ToolWrapper>
                        :
                        <ToolWrapper >

                            <IconButton>
                                <AccountCircleIcon sx={{ color: "white" }} />
                            </IconButton>
                            <Link style={{ textDecoration: 'none' }}>
                                <Login>{(userInfoDetails.fullName.split(' '))[0]}</Login>
                            </Link>
                            <Tooltip title="Log out">
                                <IconButton style={{marginLeft:'30px'}} onClick={() => { logout() }}>
                                    <LogoutIcon sx={{ color: "white" }} />
                                </IconButton>


                            </Tooltip>
                        </ToolWrapper>
                    }

                </Right>
            </Wrapper>
        </NavbarContainer>
    )
}

export default Navbar

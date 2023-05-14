import { Grid } from '@mui/material'
import React from 'react'
import styled from "styled-components";

const Image = styled.img`
padding-top:25px;
height: 330px;
`;

const Magazines = () => {
    return (
        <Grid container spacing={2}>
            <Grid sx={{cursor:'pointer'}} onClick={()=>{    window.open('https://www.pnmag.com/', '_blank');}} item xs={3}>
                <Image src="https://i.ibb.co/SQkCKxZ/pr1.png" />
            </Grid>
            <Grid sx={{cursor:'pointer'}} onClick={()=>{    window.open('https://www.fitpregnancy.com/', '_blank');}} item xs={3}>
                <Image src="https://i.ibb.co/8XdMr04/pr2.jpg" />
            </Grid>
            <Grid sx={{cursor:'pointer'}} onClick={()=>{    window.open('https://www.whattoexpect.com/pregnancy/', '_blank');}} item xs={3}>
                <Image src="https://i.ibb.co/yVCyQSd/pr3.jpg" />
            </Grid>
            <Grid sx={{cursor:'pointer'}} onClick={()=>{    window.open('https://www.popsugar.com/family/pregnancy', '_blank');}} item xs={3}>
                <Image src="https://i.ibb.co/BNsFGqj/pr4.jpg" />
            </Grid>
            <Grid sx={{cursor:'pointer'}} onClick={()=>{    window.open('https://www.babycenter.com/pregnancy', '_blank');}} item xs={3}>
                <Image src="https://i.ibb.co/r4pwbwd/pr5.jpg" />
            </Grid>
            <Grid sx={{cursor:'pointer'}} onClick={()=>{    window.open('https://americanpregnancy.org/', '_blank');}} item xs={3}>
                <Image src="https://i.ibb.co/WHyWwZs/pr6.jpg" />
            </Grid>
            <Grid sx={{cursor:'pointer'}} onClick={()=>{    window.open('https://www.pnmag.com/', '_blank');}} item xs={3}>
                <Image src="https://i.ibb.co/nftTX16/pr7.jpg" />
            </Grid>
            <Grid sx={{cursor:'pointer'}} onClick={()=>{    window.open('https://www.whattoexpect.com/pregnancy/', '_blank');}} item xs={3}>
                <Image src="https://i.ibb.co/C2KLX5Q/pr8.jpg" />
            </Grid>
        </Grid>
    )
}

export default Magazines
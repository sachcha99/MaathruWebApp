import { Grid } from '@mui/material'
import React from 'react'
import styled from "styled-components";
import ReactAudioPlayer from 'react-audio-player';

const Image = styled.img`
height: 350px;
`;
const CardImage = styled.img`
padding-top:25px;
height: 250px;
`;

const StyledAudioPlayer = styled(ReactAudioPlayer)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 95%;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;

  & > audio {
    width: 100%;
    max-width: 300px;
    margin-bottom: 10px;
  }

  & > button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
  }
`;


const AudioBooks = () => {
    return (
        <Grid container spacing={2}>
            <Grid sx={{ cursor: 'pointer' }} onClick={() => { window.open('https://www.pnmag.com/', '_blank'); }} item xs={3}>
                <Image src="https://i.ibb.co/1q2KZBr/51ame-O9tw-BL-SL500.jpg" />
            </Grid>
            <Grid sx={{ cursor: 'pointer', backgroundColor: '#fff', borderRadius: '10px' }} onClick={() => { window.open('https://www.fitpregnancy.com/', '_blank'); }} item xs={9}>
                <StyledAudioPlayer
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    //   autoPlay
                    controls
                />
                <Grid container spacing={28}>
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
                    <Grid sx={{ cursor: 'pointer' }} onClick={() => { window.open('https://www.babycenter.com/pregnancy', '_blank'); }} item xs={2}>
                        <CardImage src="https://i.ibb.co/DptZPfs/411-M0c-o-FBL-SL500.jpg" />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default AudioBooks
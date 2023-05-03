import React from 'react'
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
import { Button } from '@mui/material';

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
border-radius:8px;
margin-bottom: 25px;
`;

const Image = styled.img`
padding-top:25px;
height: 600px;
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

const DescriptionField = styled.div`
font-weight: 400;
font-size:12px;
color: #956C6E;
display: flex;
justify-content: center;
align-items: center;
padding:8px 0;

`;

const InsTitle = styled.div`
font-weight: 500;
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
`;
const Instructors = () => {
    return (
        <>
            <Container>
                <Navbar />
                <div>
                    <Wrapper>
                        <Title>Instructors</Title>
                        <Stack >
                            <Grid container spacing={2}>
                                <Grid style={{ backgroundColor: "#fff", margin: "8px", }} item xs={3}>
                                    <FlexBox>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </FlexBox>
                                    <InsTitle>Gaia Kodithuwakku</InsTitle>

                                    <DescriptionField>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus vestibulum felis, sit amet pretium risus rhoncus eu. Donec pellentesque fermentum sapien. Proin hendrerit commodo purus, vel sollicitudin velit lacinia in. Nullam sodales viverra neque, id consectetur mauris tincidunt eu. Praesent ut placerat dolor. Etiam sed elementum dolor. Ut iaculis massa at sem blandit mollis. In lacus est, elementum sed tortor sit amet, tincidunt convallis risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien, sed pharetra purus. </DescriptionField>
                                    <FlexBox>

                                    <Button>View Profile</Button>
                                    </FlexBox>
                                </Grid>
                                <Grid style={{ backgroundColor: "#fff", margin: "8px" }} item xs={3}>
                                <FlexBox>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </FlexBox>
                                    <InsTitle>Gaia Kodithuwakku</InsTitle>

                                    <DescriptionField>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus vestibulum felis, sit amet pretium risus rhoncus eu. Donec pellentesque fermentum sapien. Proin hendrerit commodo purus, vel sollicitudin velit lacinia in. Nullam sodales viverra neque, id consectetur mauris tincidunt eu. Praesent ut placerat dolor. Etiam sed elementum dolor. Ut iaculis massa at sem blandit mollis. In lacus est, elementum sed tortor sit amet, tincidunt convallis risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien, sed pharetra purus. </DescriptionField>
                                    <FlexBox>

                                    <Button>View Profile</Button>
                                    </FlexBox>
                                </Grid>
                                <Grid style={{ backgroundColor: "#fff", margin: "8px" }} item xs={3}>
                                <FlexBox>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </FlexBox>
                                    <InsTitle>Gaia Kodithuwakku</InsTitle>

                                    <DescriptionField>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus vestibulum felis, sit amet pretium risus rhoncus eu. Donec pellentesque fermentum sapien. Proin hendrerit commodo purus, vel sollicitudin velit lacinia in. Nullam sodales viverra neque, id consectetur mauris tincidunt eu. Praesent ut placerat dolor. Etiam sed elementum dolor. Ut iaculis massa at sem blandit mollis. In lacus est, elementum sed tortor sit amet, tincidunt convallis risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien, sed pharetra purus. </DescriptionField>
                                    <FlexBox>

                                    <Button>View Profile</Button>
                                    </FlexBox>
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

export default Instructors;
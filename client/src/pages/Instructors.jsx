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
// flex: 1;
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
padding:8px 30px;
background-color:#fff;


`;

const InsTitle = styled.div`
font-weight: 500;
font-size:20px;
color: #956C6E;
display: flex;
justify-content: center;
align-items: center;
padding:10px 0;
background-color:#fff;
`;


const FlexBox = styled.div`
display: flex;
justify-content: center;
background-color:#fff ;
padding:20px 20px 0 20px; 
`;

const Button = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  background-color: #fff;
  cursor: pointer;
  border: 2px solid #956C6E;
  border-radius: 6px;
  color: #956C6E;
  margin-bottom: 25px;
  transition: 0.8s;


  &:hover {
    opacity: 1;
    background-color: #956C6E;
    border: 2px solid #956C6E;
    color: #fff;  }
`;


const Line = styled.div`
border: 1px solid #bdbcbe;
margin: 0 20px;
background-color: #fff ;

`;
const Instructors = () => {
    return (
        <>
            <Container>
                <Navbar />
                <div>
                    <Wrapper>
                        <Title>Instructors</Title>

                        <Grid style={{ paddingRight: '50px' }} container spacing={4}>
                            <Grid item xs={4}>
                                <FlexBox>
                                    <Avatar sx={{ width: 80, height: 80 }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </FlexBox>
                                <InsTitle>Gaia Kodithuwakku</InsTitle>
                                <DescriptionField>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus vestibulum felis, sit amet pretium risus rhoncus eu. Donec pellentesque fermentum sapien. Proin hendrerit commodo purus, vel sollicitudin velit lacinia in. Nullam sodales viverra neque, id consectetur mauris tincidunt eu. Praesent ut placerat dolor. Etiam sed elementum dolor. Ut iaculis massa at sem blandit mollis. In lacus est, elementum sed tortor sit amet, tincidunt convallis risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien, sed pharetra purus. </DescriptionField>
                                <FlexBox>
                                    <Button>View Profile</Button>
                                </FlexBox>
                            </Grid>
                            <Grid item xs={4}>
                                <FlexBox>
                                    <Avatar sx={{ width: 80, height: 80 }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </FlexBox>
                                <InsTitle>Gaia Kodithuwakku</InsTitle>
                                <DescriptionField>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus vestibulum felis, sit amet pretium risus rhoncus eu. Donec pellentesque fermentum sapien. Proin hendrerit commodo purus, vel sollicitudin velit lacinia in. Nullam sodales viverra neque, id consectetur mauris tincidunt eu. Praesent ut placerat dolor. Etiam sed elementum dolor. Ut iaculis massa at sem blandit mollis. In lacus est, elementum sed tortor sit amet, tincidunt convallis risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien, sed pharetra purus. </DescriptionField>
                                <FlexBox>
                                    <Button>View Profile</Button>
                                </FlexBox>
                            </Grid>
                            <Grid item xs={4}>
                                <FlexBox>
                                    <Avatar sx={{ width: 80, height: 80 }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </FlexBox>
                                <InsTitle>Gaia Kodithuwakku</InsTitle>

                                <DescriptionField>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus vestibulum felis, sit amet pretium risus rhoncus eu. Donec pellentesque fermentum sapien. Proin hendrerit commodo purus, vel sollicitudin velit lacinia in. Nullam sodales viverra neque, id consectetur mauris tincidunt eu. Praesent ut placerat dolor. Etiam sed elementum dolor. Ut iaculis massa at sem blandit mollis. In lacus est, elementum sed tortor sit amet, tincidunt convallis risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien, sed pharetra purus. </DescriptionField>
                                <FlexBox>
                                    <Button>View Profile</Button>
                                </FlexBox>
                            </Grid>
                        </Grid>
                    </Wrapper>
                </div>
                <Footer />
            </Container>

        </>
    )
}

export default Instructors;
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
background-color: #fff;
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

const MealsField = styled.div`
font-weight: 400;
font-size:15px;
color: #956C6E;
display: flex;
justify-content: center;
align-items: center;
padding:8px 0;

`;

const MealsTitle= styled.div`
font-weight: 700;
font-size:20px;
color: #956C6E;
display: flex;
justify-content: center;
align-items: center;
padding:10px 0;
`;

const MealPlans = () => {
    return (
        <>
            <Container>
                <Navbar />
                <div>
                    <Wrapper>
                        <Title>Meal Plans</Title>
                        <Stack >
                            <Grid  container spacing={0}>
                                <Grid item xs={3}>
                                    <DayField>Day 1</DayField>
                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E", paddingBlock: '15px'}} item xs={3}>
                                <MealsTitle>Breakfast</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>

                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E"}}  item xs={3}>
                                <MealsTitle>Lunch</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E"}} item xs={3}>
                                <MealsTitle>Dinner</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>                                </Grid>
                            </Grid>
                        </Stack>

                        <Stack >
                            <Grid  container spacing={0}>
                                <Grid item xs={3}>
                                    <DayField>Day 1</DayField>
                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E", paddingBlock: '15px'}} item xs={3}>
                                <MealsTitle>Breakfast</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>

                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E"}}  item xs={3}>
                                <MealsTitle>Lunch</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E"}} item xs={3}>
                                <MealsTitle>Dinner</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>                                </Grid>
                            </Grid>
                        </Stack>


                        <Stack >
                            <Grid  container spacing={0}>
                                <Grid item xs={3}>
                                    <DayField>Day 2</DayField>
                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E", paddingBlock: '15px'}} item xs={3}>
                                <MealsTitle>Breakfast</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>

                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E"}}  item xs={3}>
                                <MealsTitle>Lunch</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E"}} item xs={3}>
                                <MealsTitle>Dinner</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>                                </Grid>
                            </Grid>
                        </Stack>


                        <Stack >
                            <Grid  container spacing={0}>
                                <Grid item xs={3}>
                                    <DayField>Day 3</DayField>
                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E", paddingBlock: '15px'}} item xs={3}>
                                <MealsTitle>Breakfast</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>

                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E"}}  item xs={3}>
                                <MealsTitle>Lunch</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E"}} item xs={3}>
                                <MealsTitle>Dinner</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>                                </Grid>
                            </Grid>
                        </Stack>


                        <Stack >
                            <Grid  container spacing={0}>
                                <Grid item xs={3}>
                                    <DayField>Day 4</DayField>
                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E", paddingBlock: '15px'}} item xs={3}>
                                <MealsTitle>Breakfast</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>

                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E"}}  item xs={3}>
                                <MealsTitle>Lunch</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E"}} item xs={3}>
                                <MealsTitle>Dinner</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>                                </Grid>
                            </Grid>
                        </Stack>


                        <Stack >
                            <Grid  container spacing={0}>
                                <Grid item xs={3}>
                                    <DayField>Day 5</DayField>
                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E", paddingBlock: '15px'}} item xs={3}>
                                <MealsTitle>Breakfast</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>

                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E"}}  item xs={3}>
                                <MealsTitle>Lunch</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E"}} item xs={3}>
                                <MealsTitle>Dinner</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>                                </Grid>
                            </Grid>
                        </Stack>


                        <Stack >
                            <Grid  container spacing={0}>
                                <Grid item xs={3}>
                                    <DayField>Day 6</DayField>
                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E", paddingBlock: '15px'}} item xs={3}>
                                <MealsTitle>Breakfast</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>

                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E"}}  item xs={3}>
                                <MealsTitle>Lunch</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E"}} item xs={3}>
                                <MealsTitle>Dinner</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>                                </Grid>
                            </Grid>
                        </Stack>


                        <Stack >
                            <Grid  container spacing={0}>
                                <Grid item xs={3}>
                                    <DayField>Day 7</DayField>
                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E", paddingBlock: '15px'}} item xs={3}>
                                <MealsTitle>Breakfast</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>

                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E"}}  item xs={3}>
                                <MealsTitle>Lunch</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>                                </Grid>
                                <Grid  style={{borderLeft:"1px solid #956C6E"}} item xs={3}>
                                <MealsTitle>Dinner</MealsTitle>
                                <MealsField>Food 1 - Dummy Food Name</MealsField>
                                <MealsField>Food 2 - Dummy Food Name</MealsField>
                                <MealsField>Food 3 - Dummy Food Name</MealsField>
                                <MealsField>Food 4 - Dummy Food Name</MealsField>
                                <MealsField>Food 5 - Dummy Food Name</MealsField>
                                <MealsField>Snack 1 - Dummy Snack Name</MealsField>                                </Grid>
                            </Grid>
                        </Stack>
                    </Wrapper>
                </div>
                <Footer />
            </Container>

        </>
    )
}

export default MealPlans;
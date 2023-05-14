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

const MealsTitle = styled.div`
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
                            <Grid container spacing={0}>
                                <Grid item xs={3}>
                                    <DayField>Day 1</DayField>
                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E", paddingBlock: '15px' }} item xs={3}>
                                    <MealsTitle>Breakfast</MealsTitle>
                                    <MealsField>Food - Greek yogurt with berries</MealsField>
                                    <MealsField>Chia seeds</MealsField>
                                    <MealsField>Snack - Energy balls</MealsField>

                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E" }} item xs={3}>
                                    <MealsTitle>Lunch</MealsTitle>
                                    <MealsField>Food - Bean burritos</MealsField>
                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E" }} item xs={3}>
                                    <MealsTitle>Dinner</MealsTitle>
                                    <MealsField>Food  - Shredded chicken sandwiches</MealsField>
                                </Grid>
                            </Grid>
                        </Stack>

                        <Stack >
                            <Grid container spacing={0}>
                                <Grid item xs={3}>
                                    <DayField>Day 2</DayField>
                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E", paddingBlock: '15px' }} item xs={3}>
                                    <MealsTitle>Breakfast</MealsTitle>
                                    <MealsField>Food - 2 eggs with whole wheat toas</MealsField>

                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E" }} item xs={3}>
                                    <MealsTitle>Lunch</MealsTitle>
                                    <MealsField>Food - Chicken salad wrap</MealsField>
                                    <MealsField>Snack - slices of cheese</MealsField>
                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E" }} item xs={3}>
                                    <MealsTitle>Dinner</MealsTitle>
                                    <MealsField>Food - Veggie, chicken, or turkey tacos</MealsField>
                                </Grid>
                            </Grid>
                        </Stack>


                        <Stack >
                            <Grid container spacing={0}>
                                <Grid item xs={3}>
                                    <DayField>Day 3</DayField>
                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E", paddingBlock: '15px' }} item xs={3}>
                                    <MealsTitle>Breakfast</MealsTitle>
                                    <MealsField>Steel - cut oats with berries and walnuts</MealsField>

                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E" }} item xs={3}>
                                    <MealsTitle>Lunch</MealsTitle>
                                    <MealsField>Food - Avocado toast with sliced cheese</MealsField>
                                    <MealsField>and fruit</MealsField>
                                    <MealsField>Snack - Cut vegetables with dressing</MealsField>
                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E" }} item xs={3}>
                                    <MealsTitle>Dinner</MealsTitle>
                                    <MealsField>Food - Vegetable, tofu, chicken, or </MealsField>
                                    <MealsField>shrimp stir fry with rice</MealsField>
                                </Grid>
                            </Grid>
                        </Stack>


                        <Stack >
                            <Grid container spacing={0}>
                                <Grid item xs={3}>
                                    <DayField>Day 4</DayField>
                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E", paddingBlock: '15px' }} item xs={3}>
                                    <MealsTitle>Breakfast</MealsTitle>
                                    <MealsField>Food - Egg quiche with a side </MealsField>
                                    <MealsField>of fruit</MealsField>

                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E" }} item xs={3}>
                                    <MealsTitle>Lunch</MealsTitle>
                                    <MealsField>Food - Salad with sliced chicken </MealsField>
                                    <MealsField>or tofu</MealsField>
                                    <MealsField>Snack - Nuts and fruit</MealsField>
                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E" }} item xs={3}>
                                    <MealsTitle>Dinner</MealsTitle>
                                    <MealsField>Food - Bean burrito bowl</MealsField>
                                </Grid>
                            </Grid>
                        </Stack>


                        <Stack >
                            <Grid container spacing={0}>
                                <Grid item xs={3}>
                                    <DayField>Day 5</DayField>
                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E", paddingBlock: '15px' }} item xs={3}>
                                    <MealsTitle>Breakfast</MealsTitle>
                                    <MealsField>Food - Bagel sandwich</MealsField>
                                    <MealsField>Snack - Fruit protein smoothie</MealsField>

                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E" }} item xs={3}>
                                    <MealsTitle>Lunch</MealsTitle>
                                    <MealsField>Food - Tuna salad sandwich</MealsField>
                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E" }} item xs={3}>
                                    <MealsTitle>Dinner</MealsTitle>
                                    <MealsField>Food - Tortellini with chicken </MealsField>
                                    <MealsField>and vegetables</MealsField>
                                </Grid>
                            </Grid>
                        </Stack>


                        <Stack >
                            <Grid container spacing={0}>
                                <Grid item xs={3}>
                                    <DayField>Day 6</DayField>
                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E", paddingBlock: '15px' }} item xs={3}>
                                    <MealsTitle>Breakfast</MealsTitle>
                                    <MealsField>Food - Granola with milk</MealsField>
                                    <MealsField>Snack - Tex mex chicken quinoa</MealsField>

                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E" }} item xs={3}>
                                    <MealsTitle>Lunch</MealsTitle>
                                    <MealsField>Food - Apple with peanut butter</MealsField>
                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E" }} item xs={3}>
                                    <MealsTitle>Dinner</MealsTitle>
                                    <MealsField>Food - Fish and vegetable side</MealsField>
                                </Grid>
                            </Grid>
                        </Stack>


                        <Stack >
                            <Grid container spacing={0}>
                                <Grid item xs={3}>
                                    <DayField>Day 7</DayField>
                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E", paddingBlock: '15px' }} item xs={3}>
                                    <MealsTitle>Breakfast</MealsTitle>
                                    <MealsField>Food -  Fruit protein smoothie</MealsField>

                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E" }} item xs={3}>
                                    <MealsTitle>Lunch</MealsTitle>
                                    <MealsField>Food -  Vegetable salad and brown rice</MealsField>
                                    <MealsField>Snack - veggies with hummus</MealsField>
                                </Grid>
                                <Grid style={{ borderLeft: "1px solid #956C6E" }} item xs={3}>
                                    <MealsTitle>Dinner</MealsTitle>
                                    <MealsField>Food - Pork chops and sweet potatoes</MealsField>
                                    <MealsField>with soup</MealsField>
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

export default MealPlans;
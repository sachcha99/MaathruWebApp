import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from "styled-components";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';


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
width: 50%;
flex: 1;
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

const YogaTips = () => {
    return (
        <>
            <Container>
                <Navbar />
                <div>
                    <Wrapper>
                        <Title>Best Prenatal Yoga Poses for Pregnant Women</Title>
                        <ImgContainer >
                        <Carousel>
                            <div>
                                <img src="https://i.ibb.co/M5NHXm7/Picture2.png" alt="Picture2" border="0"/>
                                <p className="legend">
                                <Typography>Head-to-knee forward bend </Typography>&nbsp;
                                <Typography>This forward bend strengthens your back muscles, stimulates digestion, and promotes relaxation. It stretches your back, hips, and legs.</Typography>
                                <Typography>1.Sit on the edge of a cushion, block, or folded blanket with your left leg extended.</Typography>
                                <Typography>2.Place the sole of left foot against inner right thigh.</Typography>
                                <Typography>3.Inhale as you reach arms overhead.</Typography>
                                <Typography>4.Exhale to fold forward slightly, lengthening the front of your torso.</Typography>
                                <Typography>5.Place your hands on your body or the floor.</Typography>
                                <Typography>6.Hold this position for up to 1 minute.</Typography>
                                <Typography>7.Repeat on the other side.</Typography>
                                </p>
                            </div>
                            <div >
                                <img src="https://i.ibb.co/4FGrvP5/Picture3.png" />
                                <p className="legend">
                                <Typography>Wide-angle seated forward bend </Typography>&nbsp;
                                <Typography>This pose increases flexibility in your low back, hips, and legs. It builds strength in your spine, low back, and pelvis.</Typography>
                                <Typography>1.Sit on the edge of a cushion, block, or folded blanket, with your legs out to the side, allowing your pelvis to tilt forward.</Typography>
                                <Typography>2.Reach arms overhead.</Typography>
                                <Typography>3.Bend at your hips as you fold forward.</Typography>
                                <Typography>4.Place hands in front of you or take hold of your big toes.</Typography>
                                <Typography>5.	Hold this position for up to 1 minute..</Typography>
                                </p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/ZxW9jHj/Picture5.png" alt="Picture5" border="0" />
                                <p className="legend">
                                <Typography>Cat-cow pose </Typography>&nbsp;
                                <Typography>This gentle backbend relieves tension, improves spinal mobility, and boosts circulation. You’ll feel a nice stretch in your neck, shoulders, and torso.</Typography>
                                <Typography>1.Start on all fours..</Typography>
                                <Typography>2.Inhale as you arch your spine, lower your belly, and gaze upward.</Typography>
                                <Typography>3.Exhale as you draw chin into chest and arch spine upward.</Typography>
                                <Typography>4.Continue this gentle flow for up to 1 minute.</Typography>
                                </p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/kc2jzjp/Picture6.png" alt="Picture6" border="0" />
                                <p className="legend">
                                <Typography>Bound angle pose </Typography>&nbsp;
                                <Typography>The butterfly stretch boosts circulation, stimulates your digestive organs, and promotes relaxation. It improves flexibility in your low back, hips, and inner thighs, which helps prepare your body for delivery.</Typography>
                                <Typography>1.Sit on the edge of a cushion, block, or folded blanket, allowing your pelvis to tilt forward.</Typography>
                                <Typography>2.Press the soles of your feet together.</Typography>
                                <Typography>3.Bring feet in toward hips to deepen the stretch.</Typography>
                                <Typography>4.Root your lower body into the floor as you lengthen your spine.</Typography>
                                <Typography>5.Interlace fingers under pinky toes or place hands on your ankles or shins.</Typography>
                                <Typography>6.Hold this position for up to 1 minute.</Typography>
                                <Typography>7.Repeat 2–4 times.</Typography>
                                </p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/QPLC2mR/Picture7.png" alt="Picture7" border="0" />
                                <p className="legend">
                                <Typography>Child’s pose</Typography>&nbsp;
                                <Typography>This relaxing pose stretches your shoulders, chest, and low back. It increases flexibility in your spine, hips, and thighs.</Typography>
                                <Typography>1.Start on all fours.</Typography>
                                <Typography>2.Touch big toes together and spread knees wide.</Typography>
                                <Typography>3.Lower your hips back onto your heels.</Typography>
                                <Typography>4.Reach arms in front of you.</Typography>
                                <Typography>5.Breathe deeply.</Typography>
                                <Typography>6.Hold this position for up to 1 minute.</Typography>
                                </p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/5rdZtdx/Picture8.png" alt="Picture8" border="0" />
                                <p className="legend">
                                <Typography>Triangle pose </Typography>&nbsp;
                                <Typography>This strengthening pose gives you a burst of energy while relieving neck and back tension.</Typography>
                                <Typography>1.Start in a standing position.</Typography>
                                <Typography>2.Step left foot forward to widen your stance. The left foot’s toes are pointed ahead. Keep the left knee straight so there is no bend</Typography>
                                <Typography>3.Slightly angle the back foot (right foot) , so there is more stability.</Typography>
                                <Typography>4.Open your hips by rotating your hips and torso from the center to the right.</Typography>
                                <Typography>5.Slowly reach the left arm down towards the left ankle. Here you have the option to place the left on a block on inside of of your left leg, on your leg, or on the floor.</Typography>
                                <Typography>6.Reach the right arm up above the right shoulder. Right palm facing away from the body.</Typography>
                                <Typography>7.Hold this pose for 30 seconds</Typography>
                                <Typography>8.Repeat on the other side.</Typography>
                                </p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/GdsGxPN/Picture9.png" alt="Picture9" border="0" />
                                <p className="legend">
                                <Typography>Warrior II </Typography>&nbsp;
                                <Typography>Warrior II improves circulation, strengthens your whole body, and opens your hips. It also relieves neck and back pain. This pose allows you to experiment with your center of gravity as you align your body.</Typography>
                                <Typography>1.From standing, step left foot back and turn toes out to the left slightly.</Typography>
                                <Typography>2.Align the inside of left foot so it’s in line with right heel.</Typography>
                                <Typography>3.Open your hips to face the side.</Typography>
                                <Typography>4.Raise your arms to be parallel to the floor, with palms facing down.</Typography>
                                <Typography>5.Bend right knee, making sure it doesn’t extend past your ankle.</Typography>
                                <Typography>6.Gaze over your front middle finger.</Typography>
                                <Typography>7.Hold this pose for 30 seconds.</Typography>
                                <Typography>8.	Repeat on the other side.</Typography>
                                </p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/tJxLMHq/Picture10.png" alt="Picture10" border="0" />
                                <p className="legend">
                                <Typography>Easy pose </Typography>&nbsp;
                                <Typography>This classic seated pose lengthens your spine, opens your hips, and promotes mental clarity.</Typography>
                                <Typography>1.Sit on the edge of a cushion, block, or folded blanket, allowing your pelvis to tilt forward.</Typography>
                                <Typography>2.Cross right leg over left leg.</Typography>
                                <Typography>3.Place hands in any comfortable position.</Typography>
                                <Typography>4.Close your eyes and breathe deeply.</Typography>
                                <Typography>5.Hold this position for up to 1 minute.</Typography>
                                <Typography>6.Repeat on the other side.</Typography>
                                </p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/v4p8nnD/Picture11.png" alt="Picture11" border="0" />
                                <br /><br />
                                <p className="legend">
                                <Typography>Side corpse pose (Parsva Savasana)</Typography>&nbsp;
                                <Typography>This restorative pose relieves fatigue and enhances relaxation.</Typography>
                                <Typography>1.Lie on your left side.</Typography>
                                <Typography>2.Keep left leg straight.</Typography>
                                <Typography>3.Bend right knee and support it with cushions.</Typography>
                                <Typography>4.Place a cushion under your head.</Typography>
                                <Typography>5.Place your hands on your body or the floor.</Typography>
                                <Typography>5.Relax in this position for 15 minutes.</Typography>
                                </p>
                            </div>
                        </Carousel>
                        </ImgContainer>
                    </Wrapper>
                </div>
                <Footer />
            </Container>

        </>
    )
}

export default YogaTips;
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from "styled-components";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
  border-radius: 14px;

`;

const PregnancyTips = () => {
    return (
        <>
            <Container>
                <Navbar />
                <div>
                    <Wrapper>

                        <Accordion style={{ width: '920px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>1.How I feel when I’m pregnant ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Everyone is different, but hormones can cause lots of changes in your body and the way you feel. Some of us may have tender breasts, get tired easily or feel sick (at any time of the day, and not just in the morning). Even if you were planning on becoming pregnant, realising that you are can still come as a bit of a shock, so don’t worry if you feel up and down.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ width: '920px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>2.Why do I need a midwife?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Your midwife will make sure that you get the best possible care, tailored around you. It’s known that high quality care throughout pregnancy, birth and following the birth can have a really positive effect on the health of women and babies, and on the healthy development of children throughout their life. That’s why your midwife, and other health professionals, work hard to make sure that wherever you live in Scotland and whatever your circumstances, we all have a positive experience of maternity and neonatal care.Your midwife will be there for you every step of the way, supporting you throughout your pregnancy as well as after the birth. Chat with them about your needs and choices and then you can work together to plan what’s best for you and your baby.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ width: '920px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>3.Do I need to get any vaccinations ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The best way to protect yourself and your baby from serious disease and illness is to get the recommended vaccines at the right time. NHS Scotland recommends that pregnant women should have the COVID-19, flu and whooping cough vaccines. You can get the COVID-19 and flu vaccines at any stage of your pregnancy, while whooping cough is recommended from week 16. Ask you midwife for more information on how to get your vaccines.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ width: '920px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>4.Can I exercise when pregnant?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes, you can! Staying active is good for you and your baby. It can help you control weight gain, improve fitness, reduce high blood pressure, improve sleep, and improve your mood. All good!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ width: '920px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>5.How much exercise should i do?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We know that you’ll have loads of other things to fill your day, but try to squeeze a little exercise here and there. Try and aim for about 150 minutes a week. This might sound like a lot – but if you break it up into two 15-minute bursts, 5 times a week, you’re there! You could do it in a couple of little walks each day, over the course of the week. If you’re already very sporty, you may have to cut down a bit while you’re pregnant. As a general rule, if you feel better for it, then keep doing it. But stop exercising if you feel it’s becoming uncomfortable for you.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ width: '920px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>6.What should i eat when pregnant?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We know that morning sickness makes eating and drinking challenging – but trust us, a good diet can help you feel so much better, from the inside out.
                                    <Typography>It’s important to stay hydrated, so try to boost the amount of water you drink each day.</Typography>
                                    <Typography>Try and eat at least 5 portions of fruit and vegetables a day. They’re a good source of vitamins, minerals and fibre, and you can eat them fresh, frozen, from a tin, dried or juiced – whichever way you like them.</Typography>
                                    <Typography>Every day, try to include 3-4 portions of carbohydrates. Things like bread, cereal, noodles, pasta, rice and potatoes. Even better, go for wholegrain or whole wheat varieties.</Typography>
                                    <Typography>Making sure you’re getting enough dairy and Vitamin D means your wee baby’s bones will harden as they develop. Dairy contains calcium and is found in foods like yoghurt, milk and hard cheese.</Typography>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Wrapper>
                </div>
                <Footer />
            </Container>

        </>
    )
}

export default PregnancyTips;
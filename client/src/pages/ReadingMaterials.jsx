import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from "styled-components";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Magazines from '../components/Magazines';
import AudioBooks from '../components/AudioBooks';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

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

const ReadingMaterials = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Container>
                <Navbar />
                <div>
                    <Wrapper>
                        <Box sx={{ width: '100%' }}>
                            <Tabs centered indicatorColor="secondary" textColor="inherit" value={value} onChange={handleChange} aria-label="nav tabs example">
                                <Tab label="Magazines" {...a11yProps(0)} />
                                <Tab label="Audio Books" {...a11yProps(1)} />
                            </Tabs>
                            <TabPanel value={value} index={0}>
                                <Magazines />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <AudioBooks />
                            </TabPanel>
                        </Box>
                    </Wrapper>
                </div>
                <Footer />
            </Container>

        </>
    )
}

export default ReadingMaterials;
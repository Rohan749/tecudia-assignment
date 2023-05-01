import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WorkIcon from '@mui/icons-material/Work';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GradingIcon from '@mui/icons-material/Grading';
import JobDefine from './TabPanels/JobDefine';
import JobSalary from './TabPanels/JobSalary';
import JobCandidateInfo from './TabPanels/JobCandidateInfo';
import JobCandidateReview from './TabPanels/JobCandidateReview';
import Aos from "aos";
import "aos/dist/aos.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  useEffect(function () {
    Aos.init();
  }, []);


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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabComponent = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{minWidth: '50rem'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs sx={{width: 'fit-content'}} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<WorkIcon/>} iconPosition='start' label="Define a job" {...a11yProps(0)}/>
          <Tab icon={<LocalAtmIcon/>} iconPosition='start' label="Salary" {...a11yProps(1)} />
          <Tab icon={<PersonAddIcon/>} iconPosition='start' label="Candidate Info" {...a11yProps(2)} />
          <Tab icon={<GradingIcon/>} iconPosition='start' label="Review" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div data-aos="fade-left">
        <JobDefine />
        </div>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div data-aos="fade-left">
        <JobSalary />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div data-aos="fade-left">
        <JobCandidateInfo />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div data-aos="fade-left">
        <JobCandidateReview />
        </div>
      </TabPanel>
    </Box>
  );
}

export default TabComponent;
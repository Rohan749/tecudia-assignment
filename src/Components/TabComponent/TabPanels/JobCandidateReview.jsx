import { Accordion, AccordionDetails, Box, Divider, Typography } from '@mui/material'
import React from 'react'
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CandidateDetails from '../ReviewSection/CandidateDetails';
import SalaryDetails from '../ReviewSection/SalaryDetails';
import JobDetails from '../ReviewSection/JobDetails';

const JobCandidateReview = () => {
  return (
    <>
      <Box>
        <Typography gutterBottom sx={{ fontSize: '1.8rem' }}>
          Blockchain Developer
        </Typography>
        <Divider />
        <Accordion>
          <AccordionSummary sx={{ padding: '1.5rem' }}
            expandIcon={<ExpandMoreIcon />}
          >Candidate Details</AccordionSummary>
          <AccordionDetails>
            <Box>
              <CandidateDetails />
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary sx={{ padding: '1.5rem' }}
            expandIcon={<ExpandMoreIcon />}
          >Salary Details</AccordionSummary>
          <AccordionDetails>
            <Box>
              <SalaryDetails />
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary sx={{ padding: '1.5rem' }}
            expandIcon={<ExpandMoreIcon />}
          >Job Description</AccordionSummary>
          <AccordionDetails>
            <Box>
              <JobDetails />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  )
}

export default JobCandidateReview
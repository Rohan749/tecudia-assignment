import { Box, Button, Chip, Grid, Select, Stack } from '@mui/material'
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import AddIcon from '@mui/icons-material/Add';
import BackupIcon from '@mui/icons-material/Backup';

const JobCandidateInfo = () => {

  return (
    <>
      <Grid container sx={{ display: 'flex' }}>
        <Grid item sx={{ margin: '0 1rem 0 1rem' }} xs='5.45'>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Minimum Education</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="Bachelor's Degree"
              label="Minimum Education"
            >
              <MenuItem>10th</MenuItem>
              <MenuItem>12th</MenuItem>
              <MenuItem>Bachelor's Degree</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sx={{ margin: '0 1rem 0 1rem' }} xs='5.45'>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Preferred Education</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="Bachlor's Degree"
              label="Preferred Education"
            >
              <MenuItem>12th</MenuItem>
              <MenuItem>Bachelor's Degree</MenuItem>
              <MenuItem>Master's Degree</MenuItem>
              <MenuItem>Higher Studies</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container sx={{ display: 'flex', marginTop: '3rem' }}>
        <Grid item sx={{ margin: '0 1rem 0 1rem' }} xs='5.45'>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Experience</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="2 Years"
              label="Experience"
            >
              <MenuItem >1 year</MenuItem>
              <MenuItem >2 years</MenuItem>
              <MenuItem >3 or more years</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sx={{ margin: '0 1rem 0 1rem' }} xs='5.45'>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Time</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="Timing"
              label="Time"
            >
              <MenuItem>Morning Shift</MenuItem>
              <MenuItem>Evening Shift</MenuItem>
              <MenuItem>Night Shift</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <FormControl fullWidth sx={{ marginTop: '3rem' }}>
        <InputLabel id="demo-simple-select-label">Preferred Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="English"
          label="Preferred Language"
        >
          <MenuItem>English</MenuItem>
          <MenuItem>Hindi</MenuItem>
          <MenuItem>Latin</MenuItem>
          <MenuItem>German</MenuItem>
        </Select>

        <Stack sx={{ margin: '2rem 0' }} direction="row" spacing={1}>
          <Chip icon={<AddIcon />} label="Language 1" variant="filled" />
          <Chip icon={<AddIcon />} label="Language 2" variant="filled" />
          <Chip icon={<AddIcon />} label="Language 3" variant="filled" />
        </Stack>
      </FormControl>

      <Box sx={{ 
        height: '5rem',
        border: '2px solid grey',  
        borderStyle: 'dotted', 
        borderRadius: '1rem', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' 
        }}>
          <Button variant='text' startIcon={<BackupIcon />}>Drop the files here or Click to Upload</Button>
      </Box>
    </>
  )
}

export default JobCandidateInfo
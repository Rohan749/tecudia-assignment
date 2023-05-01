import { Box, Button, TextField, TextareaAutosize } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';

const JobDetails = () => {

  return (
    <>
      <Box>
        <Box sx={{ marginBottom: '1rem' }}>
          <Box>Job Description*</Box>
          <TextareaAutosize
            style={{
              backgroundColor: 'rgb(245,245,245)',
              width: '96%',
              maxWidth: '100%',
              height: '10rem',
              border: 'none',
              padding: '1rem'
            }} color="primary" defaultValue=
            'We are seeking a remote, freelance blockchain developer to join our team and develop a high quality website. The idea candidate will have a strong background in blockchain and law with experience in front-end and back-end development.'
          />
        </Box>

        <Box sx={{ marginBottom: '2rem' }}>
          <Box>Job Location</Box>
          <TextField id="outlined-read-only-input"
            defaultValue="United States"
            InputProps={{
              readOnly: true
            }}
            variant='outlined'
            sx={{ backgroundColor: 'rgb(245,245,245)', }}
            color="primary" fullWidth />

        </Box>
      </Box>
      <Box sx={{marginLeft: '1.1rem', display: 'flex', justifyContent: 'right'}}>
          <Button endIcon={<SendIcon />} size='large' sx={{margin: '5px'}} variant='contained'>Publish</Button>
      </Box>
    </>
  )
}

export default JobDetails
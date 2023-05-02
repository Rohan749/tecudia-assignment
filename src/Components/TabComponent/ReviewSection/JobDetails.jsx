import { Box, Button, Chip, Stack, TextField, TextareaAutosize } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const JobDetails = () => {

  return (
    <>
      <Box>
        <Box sx={{ marginBottom: '1rem' }}>
          <Box sx={{ marginBottom: '2rem' }}>
          <Box>Job Title</Box>
          <TextField id="outlined-read-only-input"
            defaultValue="Block-chain Developer"
            InputProps={{
              readOnly: true
            }}
            variant='outlined'
            sx={{ backgroundColor: 'rgb(245,245,245)', }}
            color="primary" fullWidth />
        </Box>
        <Box>
          <Box>Skills</Box>
          <Stack sx={{ marginBottom: '2rem' }} direction="row" spacing={1}>
          <Chip icon={<CloseIcon />} label="Benefits" />
          <Chip icon={<CloseIcon />} label="Skill 2" variant="filled" />
          <Chip icon={<CloseIcon />} label="Skill 3" variant="filled" />
          <Chip icon={<CloseIcon />} label="Skill 4" variant="filled" />
        </Stack>
        </Box>
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
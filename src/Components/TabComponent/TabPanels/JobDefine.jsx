import { Box, Chip, Stack, TextField, TextareaAutosize } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

const JobDefine = () => {

    return (
        <Box>
            <Box sx={{ marginBottom: '2rem' }}>
                <Box>Job Title*</Box>
                <TextField variant='outlined' sx={{ backgroundColor: 'rgb(245,245,245)', }} color="primary" placeholder='eg. Backend Developer' fullWidth />
            </Box>
            <Box sx={{ marginBottom: '1rem' }}>
                <Box>Skills*</Box>
                <TextField variant='outlined' sx={{ backgroundColor: 'rgb(245,245,245)' }} color="primary" placeholder='Search or select skills' fullWidth />
            </Box>
            <Stack sx={{ marginBottom: '2rem' }} direction="row" spacing={1}>
                <Chip icon={<AddIcon />} label="Skill 1" />
                <Chip icon={<AddIcon />} label="Skill 2" variant="filled" />
                <Chip icon={<AddIcon />} label="Skill 3" variant="filled" />
                <Chip icon={<AddIcon />} label="Skill 4" variant="filled" />
                <Chip icon={<AddIcon />} label="Skill 5" variant="filled" />
            </Stack>

            <Box sx={{ marginBottom: '1rem' }}>
                <Box>Job Description*</Box>
                <TextareaAutosize 
                style={{ 
                backgroundColor: 'rgb(245,245,245)',
                width: '96%',
                maxWidth: '100%', 
                height: '10rem', 
                border: 'none', 
                padding: '1rem' }} color="primary" placeholder='Eg.: Responsibilities, qualities etc.' />
            </Box>

            <Box sx={{ marginBottom: '2rem' }}>
                <Box>Job Location</Box>
                <TextField variant='outlined' sx={{ backgroundColor: 'rgb(245,245,245)', }} color="primary" placeholder='Search or Select Job Location' fullWidth />
            </Box>
        </Box>
    )
}

export default JobDefine
import { Box, Chip, MenuItem, Select, Stack, TextField } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const JobSalary = () => {
    return (
        <>
            <Box>
                <Box sx={{ marginBottom: '2rem', display: 'flex' }}>
                    <Box sx={{marginRight: '1rem'}}>
                        <div>Maximum*</div>
                        <TextField variant='outlined' sx={{ backgroundColor: 'rgb(245,245,245)', }} color="primary" placeholder='eg. $20000' />
                    </Box>
                    <Box sx={{marginRight: '1rem'}}>
                        <div>Minimum*</div>
                        <TextField variant='outlined' sx={{ backgroundColor: 'rgb(245,245,245)', }} color="primary" placeholder='eg. $10000' />
                    </Box>
                    <Box sx={{marginRight: '1rem'}}>
                        <div>Rate*</div>
                        <Select fullWidth labelId="demo-simple-select-label" sx={{ width: '10rem', backgroundColor: 'rgb(245,245,245)' }}>
                            <MenuItem value={1}>Monthly</MenuItem>
                            <MenuItem value={2}>Yearly</MenuItem>
                        </Select>
                    </Box>
                </Box>
                <Box sx={{ marginBottom: '2rem' }}>
                <Box>Benefits (Optional)</Box>
                <Select variant='outlined' sx={{ backgroundColor: 'rgb(245,245,245)' }} fullWidth />
            </Box>
            <Stack sx={{ marginBottom: '2rem' }} direction="row" spacing={1}>
                <Chip icon={<AddIcon />} label="Benefits" />
                <Chip icon={<AddIcon />} label="Skill 2" variant="filled" />
                <Chip icon={<AddIcon />} label="Skill 3" variant="filled" />
                <Chip icon={<AddIcon />} label="Skill 4" variant="filled" />
                <Chip icon={<AddIcon />} label="Skill 5" variant="filled" />
            </Stack>
            </Box>
        </>
    )
}

export default JobSalary
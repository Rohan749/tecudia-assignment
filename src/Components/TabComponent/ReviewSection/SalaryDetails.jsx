import React from 'react'
import { Box, Chip, MenuItem, Select, Stack, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const SalaryDetails = () => {
  return (
    <>
      <Box>
        <Box sx={{ marginBottom: '2rem', display: 'flex' }}>
          <Box sx={{ marginRight: '1rem' }}>
            <div>Minimum*</div>
            <TextField
              id="outlined-read-only-input"
              defaultValue="$20000"
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box sx={{ marginRight: '1rem' }}>
            <div>Maximum*</div>
            <TextField
              id="outlined-read-only-input"
              defaultValue="$40000"
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box sx={{ marginRight: '1rem' }}>
            <div>Rate*</div>
            <Select fullWidth 
            value="Monthly" 
            labelId="demo-simple-select-label" 
            sx={{ width: '10rem', backgroundColor: 'rgb(245,245,245)' }}>
              <MenuItem value="Monthly">
                <em>Monthly</em>
              </MenuItem>
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
        </Stack>
      </Box>
    </>
  )
}

export default SalaryDetails
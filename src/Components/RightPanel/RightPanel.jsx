import React from 'react'
import SaveIcon from '@mui/icons-material/Save';
import { Box, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Button } from '@mui/material'

const RightPanel = () => {
  return (
    <>
        <Box sx={{ minWidth: '25rem' , display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Box sx={{ backgroundColor: 'rgb(235,235,235)', borderRadius: '7px', width: '17rem', height: '10.2rem', margin: '2rem', padding: '10px' }}>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Publish</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="publish"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="publish" control={<Radio />} label="Publish" />
                                        <FormControlLabel value="draft" control={<Radio />} label="Draft" />
                                    </RadioGroup>
                                </FormControl>
                                <Box sx={{ display: 'flex', justifyContent: 'right', marginTop:'20px'}}>
                                    <Button size='small' variant='contained' startIcon={<SaveIcon />}>Save Changes</Button>
                                </Box>
                        </Box>
                        <Box sx={{backgroundColor: 'rgb(235,235,235)', borderRadius: '7px', width: '17rem', height: '12.8rem', margin: '2rem', padding: '10px' }}>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Proprity</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="urgent"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="urgent" control={<Radio />} label="Urgent" />
                                        <FormControlLabel value="1month" control={<Radio />} label="After 1 month" />
                                        <FormControlLabel value="2month" control={<Radio />} label="After 2 months" />
                                    </RadioGroup>
                                </FormControl>
                                <Box sx={{ display: 'flex', justifyContent: 'right', marginTop:'20px'}}>
                                    <Button size='small' variant='contained' startIcon={<SaveIcon />}>Save Changes</Button>
                                </Box>
                        </Box>
                    </Box>
    </>
  )
}

export default RightPanel
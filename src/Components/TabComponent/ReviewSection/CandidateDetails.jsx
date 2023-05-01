import React from 'react'
import { Chip, Grid, Select, Stack } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import AddIcon from '@mui/icons-material/Add';

const CandidateDetails = () => {
    return (
        <>
            <Grid container sx={{ display: 'flex' }}>
                <Grid item sx={{ margin: '0 1rem 0 1rem' }} xs='5.45'>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Minimum Education</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value="B.A"
                            label="Minimum Education"
                        >
                            <MenuItem value="B.A">
                                <em>B.A</em>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item sx={{ margin: '0 1rem 0 1rem' }} xs='5.45'>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Preferred Education</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value="B.tech Crypto"
                            label="Preferred Education"
                        >
                            <MenuItem value="B.tech Crypto">
                                <em>B.tech Crypto</em>
                            </MenuItem>
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
                            value='4 Years'
                            label="Experience"
                        >
                            <MenuItem value="4 Years">
                                <em>4 Years</em>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item sx={{ margin: '0 1rem 0 1rem' }} xs='5.45'>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Time</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value="Full-time"
                            label="Time"
                        >
                            <MenuItem value="Full-time">
                                <em>Full Time</em>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <FormControl fullWidth sx={{ marginTop: '3rem' }}>
                <InputLabel id="demo-simple-select-label">Preferred Language</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={'language'}
                    label="Preferred Language"
                >
                    <MenuItem>English</MenuItem>
                    <MenuItem>Tamil</MenuItem>
                    <MenuItem>Telgu</MenuItem>
                </Select>

                <Stack sx={{ margin: '2rem 0' }} direction="row" spacing={1}>
                    <Chip icon={<AddIcon />} label="English" variant="filled" />
                    <Chip icon={<AddIcon />} label="Tamil" variant="filled" />
                    <Chip icon={<AddIcon />} label="Telgu" variant="filled" />
                </Stack>
            </FormControl>
        </>
    )
}

export default CandidateDetails
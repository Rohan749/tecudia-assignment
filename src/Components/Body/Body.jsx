import React from 'react'
import SideBar from '../SideBar/SideBar'
import { Box } from '@mui/material';
import JobSection from '../JobSection/JobSection';
import NavigationBar from '../NavigationBar/NavigationBar';

const Body = () => {
    return (
        <>
            <Box sx={{ background: 'white' }}>
                <SideBar />
                <NavigationBar />
                <JobSection />
            </Box>
        </>
    )
}

export default Body
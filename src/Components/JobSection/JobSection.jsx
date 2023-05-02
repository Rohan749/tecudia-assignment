import { Box } from '@mui/material'
import React from 'react'
import TabComponent from '../TabComponent/TabComponent'
import RightPanel from '../RightPanel/RightPanel'

const JobSection = () => {
    return (
        <>
            <Box sx={{ paddingTop: '8rem', marginLeft: '20rem', width: '100%' }}>
                <h1>
                    Post a job
                </h1>
                <Box sx={{ display: 'flex' }}>
                    <TabComponent />
                    <RightPanel />
                </Box>
            </Box>
        </>
    )
}

export default JobSection
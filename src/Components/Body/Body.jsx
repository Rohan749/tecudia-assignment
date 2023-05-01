import React from 'react'
import SideBar from '../SideBar/SideBar'
import { AppBar, Badge, Box, Button, Divider, Icon, IconButton } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import JobSection from '../JobSection/JobSection';

const Body = () => {
  return (
    <>
    <Box sx={{display: 'flex', background: 'white'}}>
        <SideBar />

        {/* Top Navigation Bar */}
        
        <AppBar sx={{ width: '100vw', padding: '2rem 1rem', backgroundColor: 'white' }} >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
                    <Button variant='contained' startIcon={<AddIcon />}>Click Me</Button>
                    <Box sx={{ padding: '0 25px' }}>
                        <IconButton>
                            <Badge badgeContent={9} color='primary'>
                                <Icon>
                                    <NotificationsIcon />
                                </Icon>
                            </Badge>
                        </IconButton>
                    </Box>
                    <Divider />
                    <Button endIcon={<KeyboardArrowDownIcon />}>BetFlix</Button>
                </Box>
            </AppBar>
            <JobSection />
    </Box>
    </>
  )
}

export default Body
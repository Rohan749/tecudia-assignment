import React from 'react'
import { AppBar, Badge, Box, Button, Divider, Icon, IconButton } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavigationBar = () => {
  return (
    <>
         <AppBar sx={{ width: '100vw', padding: '2rem 1rem', backgroundColor: 'white' }} >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
                    <Button variant='contained' startIcon={<AddIcon />}>Post a job</Button>
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
    </>
  )
}

export default NavigationBar
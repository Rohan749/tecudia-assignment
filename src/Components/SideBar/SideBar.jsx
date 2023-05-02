import { Box, CardActionArea, Drawer, Icon, IconButton, List } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import EmailIcon from '@mui/icons-material/Email';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';


const SideBar = () => {
    return (
        <>
            <Drawer variant="permanent" >
                <List sx={{ backgroundColor: 'rgb(245, 245, 245)', height: '260vh', width: '15rem' }}>
                    <CardActionArea>
                        <Box sx={{ display: 'flex', alignItems: 'center', padding: '1.1rem' }}>
                            <IconButton>
                                <Icon>
                                    <MenuIcon />
                                </Icon>
                            </IconButton>
                            <h2>Tecudia</h2>
                        </Box>
                    </CardActionArea>
                    <CardActionArea>
                        <Box p={2}>
                            <IconButton>
                                <HomeIcon />
                            </IconButton>
                            Dashboard
                        </Box>
                    </CardActionArea>
                    <CardActionArea>
                        <Box p={2}>
                            <IconButton>
                                <PeopleIcon />
                            </IconButton>
                            Discover Talents
                        </Box>
                    </CardActionArea>
                    <CardActionArea>
                        <Box p={2}>
                            <IconButton>
                                <EmailIcon />
                            </IconButton>
                            Messages
                        </Box>
                    </CardActionArea>
                    <CardActionArea>
                        <Box p={2}>
                            <IconButton>
                                <InstallMobileIcon />
                            </IconButton>
                            Shortlisted
                        </Box>
                    </CardActionArea>
                    <CardActionArea>
                        <Box p={2}>
                            <IconButton>
                                <ApartmentIcon />
                            </IconButton>
                            Company Profile
                        </Box>
                    </CardActionArea>
                    <CardActionArea>
                        <Box p={2}>
                            <IconButton>
                                <SettingsIcon />
                            </IconButton>
                            Settings
                        </Box>
                    </CardActionArea>

                </List>
            </Drawer>
        </>
    )
}

export default SideBar
import * as React from 'react';
import {FC, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import {Button, Grid, Link, Tooltip} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import UseSwitchesCustom from "../../assets/themes/components/UseSwitchesCustom";
import RightSideMenu from "./RightSideMenu";
import Typography from '@mui/material/Typography';
import lightThemeColors from "../../assets/themes/utils/lightThemeColors";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";

interface DrawerMenuI {
    onMenuClick: () => void,
}

const Header: FC<DrawerMenuI> = (props) => {
    const [openCalenderRightSideMenu, setOpenCalenderRightSideMenu] = useState(false);
    let theme = useTheme();
    const isMobileSize = useMediaQuery(theme.breakpoints.down('md'));


    const toggleRightSideMenu = () => {
        setOpenCalenderRightSideMenu(!openCalenderRightSideMenu)
    };

    return (
        <AppBar position="fixed" elevation={0} /*sx={{backgroundColor: '#dcdcdd'}}*/>
            <Toolbar disableGutters>
                <IconButton onClick={props.onMenuClick} sx={{mr: 'none', display: {md: 'none'}}}>
                    <MenuIcon/>
                </IconButton>
                <IconButton size={"large"} sx={{padding: 3}}>
                    <HomeIcon color="action"/>
                </IconButton>
                <Link href="#" ml={1} mr={1} hidden={isMobileSize}>Following</Link>
                <Link href="#" ml={1} mr={1} hidden={isMobileSize}>Browse</Link>
                <Box flexGrow={1}/>
                <Grid>
                    <Typography variant={"h5"} color={lightThemeColors.text.secondary} fontWeight={"bold"}>Crypto</Typography>
                </Grid>

                <Box flexGrow={1}/>
                <Tooltip title="Calender">
                    <IconButton color="inherit" onClick={toggleRightSideMenu}>
                        <EventAvailableIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Profile">
                    <IconButton size="large" color="inherit" onClick={e => console.log(412412)}>
                        <AccountCircle/>
                    </IconButton>
                </Tooltip>
                <UseSwitchesCustom/>
            </Toolbar>
            <RightSideMenu openDrawer={openCalenderRightSideMenu} closeDrawer={toggleRightSideMenu}/>
        </AppBar>)
}

export default Header;
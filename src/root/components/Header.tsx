import * as React from 'react';
import {FC, useState} from 'react';
import {Link as RouterLink} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import {Link, Tooltip} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import UseSwitchesCustom from "../../assets/themes/components/UseSwitchesCustom";
import Typography from '@mui/material/Typography';
import RightSideMenu from "./RightSideMenu";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import {ToggleButton} from "@mui/lab";
import {LinkToDashboardView, LinkToProfileView} from "../../routes/MainRoutes";

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
        <AppBar position="fixed" elevation={0}>
            <Toolbar disableGutters>
                <IconButton onClick={props.onMenuClick} sx={{mr: 'none', display: {md: 'none'}}}>
                    <MenuIcon/>
                </IconButton>
                <ToggleButton
                    size={'large'}
                    value={"check"}
                    selected={false}
                    sx={{border: "2px solid transparent"}}
                    component={RouterLink} to={LinkToDashboardView()}
                >
                    <HomeIcon color="action"/>
                </ToggleButton>
                <Link href="#" ml={1} mr={1} hidden={isMobileSize}>Following</Link>
                <Link href="#" ml={1} mr={1} hidden={isMobileSize}>Browse</Link>
                <Box flexGrow={1}/>
                <Tooltip title="Calender">
                    <IconButton onClick={toggleRightSideMenu}>
                        <EventAvailableIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Profile">
                    <IconButton size="large" component={RouterLink} to={LinkToProfileView()}>
                        <AccountCircle/>
                    </IconButton>
                </Tooltip>
                <UseSwitchesCustom/>
            </Toolbar>
            <RightSideMenu openDrawer={openCalenderRightSideMenu} closeDrawer={toggleRightSideMenu}/>
        </AppBar>)
}

export default Header;
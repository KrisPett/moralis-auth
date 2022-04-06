import React, {useContext, useEffect, useState} from 'react';
import {Link as RouterLink} from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {RootModel} from "../RootModel";
import {RootModelContext} from "../RootModelContext";
import {Button, Divider, Grid, ListItemButton, Popover} from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {LinkToLoginView, LinkToOverviewView} from "../../routes/MainRoutes";
import CryptoPayStyle from "../../assets/themes/components/CryptoPayStyle";

interface Props {
    isOpen?: boolean,
    onClose?: () => void
}

interface TmpArrayCollapseList {
    settings: [{ id: string, open: boolean }]
}

const SideMenu = (props: Props) => {
    const theme = useTheme();
    const rootData = useContext<RootModel>(RootModelContext)
    const toggleDrawerVariant = useMediaQuery(theme.breakpoints.down('md'));
    const [coursesList, setCoursesList] = useState<TmpArrayCollapseList>({settings: [{id: "", open: false}]});
    const drawerWidth = 240;

    useEffect(() => {
        let newArray = {settings: [{}]} as TmpArrayCollapseList
        rootData.sideMenuContent.map(item => {
            let tmpArray = {id: item.id, open: false}
            newArray.settings.push(tmpArray)
        })
        setCoursesList(newArray)
    }, [rootData.sideMenuContent])

    const onClickToggleOpen = (id: string) => {

        setCoursesList(state => ({
            ...state,
            settings: state.settings.map(item => item.id === id ? {...item, open: !item.open} : item)
        }) as TmpArrayCollapseList);
    };

    const collapseItemIfOpen = (onClickItem: any) => {
        let findById = coursesList.settings.find(item => item.id === onClickItem.id);
        if (findById) return findById.open
    }

    return (
        <Box sx={{display: 'flex'}}>
            <Box
                component="nav"
                sx={{width: {md: drawerWidth}, flexShrink: {sm: 0}}}
            >
                <Drawer
                    open={props.isOpen}
                    onClose={props.onClose}
                    variant={toggleDrawerVariant ? "temporary" : "permanent"}
                    ModalProps={{keepMounted: true}}
                    sx={{
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                        '& > div': {marginTop: {xs: 0, md: 8}}
                    }}
                >
                    <Grid container p={1}>
                        <Grid item xs={12}>
                            <Box overflow={"auto"} maxHeight={"85vh"}>
                                <Typography variant={"subtitle1"} fontWeight={"bold"} paddingLeft={2} mt={2}
                                            style={{textAlign: "start"}}>
                                    General
                                </Typography>
                                <Divider/>
                                <List>
                                    <ListItemButton sx={{padding: 2}}
                                                    component={RouterLink}
                                                    to={LinkToOverviewView()}
                                    >
                                        <Typography>Dashboard</Typography>
                                    </ListItemButton>
                                    <ListItemButton sx={{padding: 2}}>
                                        <Typography>Analytics</Typography>
                                    </ListItemButton>
                                    <ListItemButton sx={{padding: 2}}>
                                        <Typography>Finance</Typography></ListItemButton>
                                    <ListItemButton sx={{padding: 2}}>
                                        <Typography>Logistics</Typography>
                                    </ListItemButton>
                                </List>
                                <Typography variant={"subtitle1"} fontWeight={"bold"} paddingLeft={2} mt={1}
                                            style={{textAlign: "start"}}>
                                    Management
                                </Typography>
                                <Divider/>
                                <List>
                                    {rootData.sideMenuContent.map(item => {
                                        return (<div key={item.id}>
                                                <ListItemButton
                                                    onClick={() => onClickToggleOpen(item.id)}
                                                    sx={{
                                                        padding: 2,
                                                        '&:hover': {'.MuiSvgIcon-root': {color: theme.palette.primary.main}}
                                                    }}
                                                >
                                                    <Typography variant={"subtitle1"}>{item.title}</Typography>
                                                    {collapseItemIfOpen(item) ? <ExpandMore/> : <KeyboardArrowRight/>}
                                                </ListItemButton>
                                                {item.subContent.map(unit => {
                                                    return (
                                                        <Collapse key={unit.id} in={collapseItemIfOpen(item)}
                                                                  unmountOnExit>
                                                            <ListItemButton sx={{padding: 2}} key={unit.id}>
                                                                <Typography ml={2} variant={"subtitle2"}>
                                                                    {unit.title}
                                                                </Typography>
                                                            </ListItemButton>
                                                        </Collapse>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}
                                </List>
                                <Typography variant={"subtitle1"}
                                            fontWeight={"bold"}
                                            paddingLeft={2} mt={1}
                                            style={{textAlign: "start"}}
                                >
                                    PLATFORMS
                                </Typography>
                                <Divider/>
                                <List>
                                    <ListItemButton sx={{padding: 2}}
                                                    component={RouterLink}
                                                    to={LinkToLoginView()}>
                                        <Typography>Login</Typography>
                                    </ListItemButton>
                                    <ListItemButton sx={{padding: 2}}><Typography>Mail</Typography></ListItemButton>
                                    <ListItemButton sx={{padding: 2}}><Typography>Chat</Typography></ListItemButton>
                                    <ListItemButton sx={{padding: 2}}><Typography>Blog</Typography></ListItemButton>
                                    <ListItemButton sx={{padding: 2}}><Typography>Calender</Typography></ListItemButton>
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box flexGrow={1}/>
                    <Grid item xs={12} mb={8}>
                        <BasicPopover/>
                    </Grid>
                </Drawer>
            </Box>
        </Box>
    );
}

export default SideMenu;

const BasicPopover = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button fullWidth onClick={handleClick}>
                Open Popover
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <CryptoPayStyle/>
            </Popover>
        </div>
    );
}

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
import {Button, Divider, Grid, ListItemButton} from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import {ExpandMore} from "@mui/icons-material";
import {LinkToDashboardView, LinkToProfileView} from "../../routes/MainRoutes";

interface Props {
    isOpen?: boolean,
    onClose?: () => void
}

interface TmpArrayCollapseList {
    settings: [{ id: string, open: boolean }]
}

const SideMenu = (props: Props) => {
    const rootData = useContext<RootModel>(RootModelContext)
    let theme = useTheme();
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
                                                    to={LinkToDashboardView()}
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
                                                sx={{padding: 2, '&:hover': {'.MuiSvgIcon-root': {color: theme.palette.primary.main}}}}
                                            >
                                                <Typography variant={"subtitle1"}>{item.title}</Typography>
                                                {collapseItemIfOpen(item) ? <ExpandMore/> : <KeyboardArrowRight/>}
                                            </ListItemButton>
                                            <Collapse in={collapseItemIfOpen(item)} unmountOnExit>
                                                {item.subContent.map(unit => {
                                                    return (
                                                        <ListItemButton sx={{padding: 2}} key={unit.id}>
                                                            <Typography ml={2} variant={"subtitle2"}>
                                                                {unit.title}
                                                            </Typography>
                                                        </ListItemButton>
                                                    )
                                                })}
                                            </Collapse>
                                        </div>)
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
                                    <ListItemButton sx={{padding: 2}}><Typography>Login</Typography></ListItemButton>
                                    <ListItemButton sx={{padding: 2}}><Typography>Mail</Typography></ListItemButton>
                                    <ListItemButton sx={{padding: 2}}><Typography>Chat</Typography></ListItemButton>
                                    <ListItemButton sx={{padding: 2}}><Typography>Blog</Typography></ListItemButton>
                                    <ListItemButton sx={{padding: 2}}><Typography>Calender</Typography></ListItemButton>
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} mt={2}>
                        <Button fullWidth>Buy Crypto</Button>
                    </Grid>
                </Drawer>
            </Box>
        </Box>
    );
}

export default SideMenu;

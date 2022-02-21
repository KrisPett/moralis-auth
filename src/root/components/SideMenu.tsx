import React, {FC, useContext, useEffect, useState} from 'react'
import {Box, Collapse, CssBaseline, Drawer, List, ListItem, Typography, useMediaQuery, useTheme} from "@mui/material";
import {ExpandMore, KeyboardArrowRight} from "@mui/icons-material";
import {RootModel} from "../RootModel";
import {RootViewContext} from "../RootViewContext";
import {blue} from "@mui/material/colors";
import colors from "../../assets/themes/utils/colors";

interface DrawerMenuI {
    isOpen: boolean,
    closeSideMenu: () => void,
}

interface TmpArrayCollapseList {
    settings?: [{ id: string, open: boolean }]
}

const SideMenu: FC<DrawerMenuI> = (props) => {
    let theme = useTheme();
    const toggleVariant = useMediaQuery(theme.breakpoints.down('md'));
    const [tmpArrayList, setTmpArrayList] = useState<TmpArrayCollapseList>();
    // @ts-ignore
    const rootData = useContext<RootModel[]>(RootViewContext)

    useEffect(() => {
        let newArray = {settings: []}
        rootData.map(item => {
            let tmpArray = {id: item.id, open: false}
            // @ts-ignore
            newArray.settings.push(tmpArray)
        })
        // @ts-ignore
        setTmpArrayList(newArray)
    }, [rootData])

    const onClickToggleOpen = (id: string) => {
        // @ts-ignore
        setTmpArrayList((state: { settings: { id: string; open: any; }[]; }) => ({
            ...state,
            settings: state.settings.map((item: { id: string; open: any; }) =>
                item.id === id ? {...item, open: !item.open} : item
            )
        }));
    };
    const drawerWidth = 240;
    const collapseItemIfOpen = (onClickItem: any) => {
        // @ts-ignore
        return tmpArrayList?.settings.find(item => item.id === onClickItem.id).open;
    }


    return (
        <Drawer
            open={props.isOpen}
            onClose={props.closeSideMenu}
            variant={toggleVariant ? "temporary" : "permanent"}
            PaperProps={{
                sx: {
                    backgroundColor: colors.sidenav.button,
                    width: drawerWidth,
                    borderRadius: "10px",
                    marginTop: "70px",
                    height: "85%",
                    marginLeft: "10px",
                }
            }}

        >
            <List>
                {rootData.map(item => {
                    return (<div key={item.id}>
                        <ListItem
                            button
                            onClick={() => onClickToggleOpen(item.id)}
                            sx={{
                                padding: "20px",
                                boxShadow: "1px 1px 3px grey"
                            }}
                        >
                            <Typography variant={"subtitle1"}>{item.name}</Typography>
                            {collapseItemIfOpen(item) ? <ExpandMore/> : <KeyboardArrowRight/>}
                        </ListItem>
                        <Collapse in={collapseItemIfOpen(item)} unmountOnExit>
                            {item.subContent.map(subContent => {
                                return (
                                    <div key={subContent.id}>
                                        <ListItem button sx={{padding: " 10px"}}>
                                            <Typography sx={{}} variant={"subtitle2"}>
                                                {subContent.title}
                                            </Typography>
                                        </ListItem>
                                    </div>
                                )
                            })}
                        </Collapse>
                    </div>)
                })}
            </List>
        </Drawer>
    );
}

export default SideMenu;

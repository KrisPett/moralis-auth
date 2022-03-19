import React, {FC, useContext, useEffect, useState} from 'react';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    Collapse,
    Divider,
    Drawer,
    FilledInput,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Tab,
    Tabs,
    TextField,
    Typography
} from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {StaticDatePicker} from "@mui/lab";
import {RootModelContext} from "../RootModelContext";
import {NotifyMessages, RootModel, Todo} from "../RootModel";
import HighlightNotificationDaysSideMenuCalender
    from "../../assets/themes/components/HighlightNotificationDaysSideMenuCalender";

const drawerWidth = 350;

interface I {
    openDrawer: boolean
    closeDrawer: () => void,
}

interface ArrayOpenNotifyI {
    settings: [{ id: string, open: boolean }]
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export const SideMenuCalenderPage = () => {
    const rootData = useContext<RootModel>(RootModelContext)
    const [notifyData, setNotifyData] = useState<NotifyMessages[]>();
    const [isCollapseOpenArray, setIsCollapseOpenArray] = useState<ArrayOpenNotifyI>({
        settings: [{id: "", open: false}]
    });

    useEffect(() => {
        refreshNotifyTmpArray();
    }, [rootData.notifyMessages])

    useEffect(() => {
        setNotifyData(rootData.notifyMessages);
    }, [])

    const refreshNotifyTmpArray = () => {
        let newArray = {settings: [{}]} as ArrayOpenNotifyI
        rootData.notifyMessages.forEach(item => {
            let tmpArray = {id: item.id, open: false}
            newArray.settings.push(tmpArray)
        })
        setIsCollapseOpenArray(newArray)
    };

    const onChangeUpdateNotifyList = (newValue: Date | null) => {
        let newValueToDateFormat = newValue?.toLocaleDateString("en-CA");
        let foundObject = rootData.notifyMessages.find(notifyItem => notifyItem.date === newValueToDateFormat);
        if (foundObject) {
            let filterNotifyByDate = rootData.notifyMessages.filter(notifyItem => notifyItem.date === newValueToDateFormat);
            return setNotifyData(filterNotifyByDate)
        } else {
            return setNotifyData(rootData.notifyMessages)
        }
    };

    const collapseNotifyItemIfOpen = (notifyItem: NotifyMessages) => {
        let findNotifyById = isCollapseOpenArray.settings.find(item => item.id === notifyItem.id);
        if (findNotifyById) return findNotifyById.open
        else refreshNotifyTmpArray()
    }

    const onClickToggleOpen = (id: string) => {
        setIsCollapseOpenArray(state => ({
            ...state,
            settings: state.settings.map(item => item.id === id ? {...item, open: !item.open} : item)
        }) as ArrayOpenNotifyI);
    };

    return (
        <Grid container>
            <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        openTo="day"
                        value={new Date()}
                        onChange={(newValue) => onChangeUpdateNotifyList(newValue)}
                        allowSameDateSelection={true}
                        disabled={false}
                        renderInput={(params) => <TextField {...params} sx={{border: "solid"}}/>}
                        renderDay={(day, selectedDates, pickersDayProps) =>
                            HighlightNotificationDaysSideMenuCalender(day, selectedDates, pickersDayProps, rootData)}
                    />
                </LocalizationProvider>
            </Grid>
            <Divider sx={{marginBottom: 3}}/>
            <Box sx={{flexGrow: 1, marginBottom: 10}}>
                {notifyData?.map(notifyItem => {
                    return (
                        <Card
                            key={notifyItem.id}
                            sx={{margin: 1}}
                            onClick={() => onClickToggleOpen(notifyItem.id)}
                        >
                            <CardActionArea>
                                <Grid container p={2} justifyContent={"space-between"}>
                                    <Grid item pt={1}>
                                        <Typography>{notifyItem.date}</Typography>
                                        <Typography>{notifyItem.time}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>{notifyItem.title}</Typography>
                                        <Typography>{notifyItem.author}</Typography>
                                    </Grid>
                                    <Grid container pt={1}>
                                        <Collapse in={collapseNotifyItemIfOpen(notifyItem)} timeout="auto"
                                                  unmountOnExit>
                                            <Grid item>
                                                <Typography>{notifyItem.description}</Typography>
                                            </Grid>
                                        </Collapse>
                                    </Grid>
                                </Grid>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </Box>
        </Grid>
    )
}

export const SideMenuTodoPage = () => {
    const rootData = useContext<RootModel>(RootModelContext)
    const [textInput, setTextInput] = useState("");
    const [todoList, setTodoList] = useState<Todo[]>([]);

    useEffect(() => {
        setTodoList(rootData.todo)
    }, [])

    const btnAddTodoHandler = () => {
        const newElement = {id: todoList.length + 1, title: textInput, checked: false}
        setTodoList(oldArray => [...oldArray, newElement]);
        setTextInput("")
    };

    const updateCheckedStatus = (todoItem: any) => () => {
        setTodoList(todoList => (todoList.map(item => item.id === todoItem.id ? {
            ...item,
            checked: !item.checked
        } : item)))
    };

    const deleteTodoItem = (id: number) => {
        let index = todoList.findIndex(e => e.id === id);
        todoList.splice(index, 1);
    };

    return (
        <Grid container direction={"column"}>
            <Grid item m={1}>
                <Typography variant={"h5"}>Tasks</Typography>
            </Grid>
            <Grid item m={1}>
                <FormControl variant="filled" fullWidth>
                    <InputLabel>Add Tasks</InputLabel>
                    <FilledInput
                        sx={{padding: 1}}
                        value={textInput}
                        type={"text"}
                        onChange={e => setTextInput(e.target.value)}
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter') btnAddTodoHandler()
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <Button
                                    variant={"outlined"}
                                    size={"large"}
                                    onClick={btnAddTodoHandler}
                                >
                                    Add
                                </Button>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Grid>
            <Grid item>
                <List sx={{width: '100%', maxWidth: 360}}>
                    {todoList.map((todoItem) => {
                        return (
                            <ListItem
                                key={todoItem.id}
                                disablePadding
                            >
                                <ListItemButton onClick={updateCheckedStatus(todoItem)}>
                                    <ListItemText primary={todoItem.title}/>
                                    <Button color={"error"}
                                            variant={"outlined"}
                                            onClick={() => deleteTodoItem(todoItem.id)}
                                    >
                                        Delete
                                    </Button>
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Grid>
        </Grid>
    )
}

class TabPanel extends React.Component<TabPanelProps> {
    render() {
        const {children, value, index, ...other} = this.props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Grid container>{children}</Grid>
                    </Box>
                )}
            </div>
        );
    }
}

const RightSideMenu: FC<I> = (props) => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabsOnClick = (event: React.SyntheticEvent, newValue: number) => setTabValue(newValue);

    return (
        <Drawer
            variant="persistent"
            open={props.openDrawer}
            onClose={props.closeDrawer}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    marginTop: 8,
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    borderRadius: "0px"
                },
            }}
            anchor="right"
        >
            <Grid container mt={3} justifyContent={"space-between"} alignItems={"center"}>
                <Tabs
                    scrollButtons="auto"
                    value={tabValue}
                    onChange={handleTabsOnClick}
                >
                    <Tab label="Calender"/>
                    <Tab label="Todo"/>
                </Tabs>
                <Grid item mr={1}>
                    <Button
                        variant={"outlined"}
                        color={"error"}
                        onClick={props.closeDrawer}
                    >
                        X
                    </Button>
                </Grid>
            </Grid>
            <TabPanel value={tabValue} index={0}>
                <SideMenuCalenderPage/>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <SideMenuTodoPage/>
            </TabPanel>
        </Drawer>
    );

}

export default RightSideMenu;


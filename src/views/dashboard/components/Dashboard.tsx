import React, {FC} from 'react';
import {CardActionArea, Grid, Paper, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useMoralis} from "react-moralis";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";

interface ITableRowField {
    rowTitle: string | undefined;
    rowValue: string | undefined;
}

const TableRowField: FC<ITableRowField> = ({rowTitle, rowValue}) => {
    const theme = useTheme();
    if (!rowValue) rowValue = "..."

    return (
        <CardActionArea sx={{
            cursor: "pointer",
            transition: theme.transitions.create(["backgroundColor", "transform"], {duration: theme.transitions.duration.standard}),
            "&:hover": {
                transform: "scale(1.1)"
            }
        }}>
            <Grid container
                  justifyContent={"space-between"}
                  p={3}
                  boxShadow={10}>
                <Grid item xs={12} md={6}>
                    <Typography fontWeight={"bold"} variant={"h6"}>{rowTitle}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography noWrap variant={"h6"}>{rowValue}</Typography>
                </Grid>
            </Grid>
        </CardActionArea>
    )
}


const Dashboard = () => {
    const theme = useTheme();
    const isMobileSize = useMediaQuery(theme.breakpoints.down('md'));
    const {logout, user, Moralis} = useMoralis();

    console.log(user)

    return (
        user ?
            <Box>
                <Paper>
                    <Grid container p={isMobileSize ? 5 : 10} direction={"column"} rowGap={5}>
                        <TableRowField rowTitle={"Username"} rowValue={user.getUsername()}/>
                        <TableRowField rowTitle={"Email"} rowValue={user.getEmail()}/>
                        <TableRowField rowTitle={"Eth Address"} rowValue={user.get("ethAddress")}/>
                        <TableRowField rowTitle={"Sol Address"} rowValue={user.get("solAddress")}/>
                        <TableRowField rowTitle={"Session Token"} rowValue={user.getSessionToken()}/>
                        <Grid item alignSelf={"end"}>
                            <Button size={"large"} onClick={() => logout()}>logout</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            : <></>
    )
};

export default Dashboard;
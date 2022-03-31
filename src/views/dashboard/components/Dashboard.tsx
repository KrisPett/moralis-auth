import React from 'react';
import {Container, Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useMoralis} from "react-moralis";

const Dashboard = () => {
    let {logout} = useMoralis();

    return (
        <Container>
            <Grid container>
                <Grid item>
                    <Typography>dashboard</Typography>
                    <Button onClick={() => logout()}>logout</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
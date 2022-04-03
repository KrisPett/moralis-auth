import React from 'react';
import {Container, Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useMoralis} from "react-moralis";

const Dashboard = () => {
    let {logout, user } = useMoralis();

    return (
        <Container>
            <Grid container>
                <Grid item>
                    <Typography>{user?.getUsername()}</Typography>
                    <Typography>{user?.getEmail()}</Typography>
                    <Typography>{user?.getSessionToken()}</Typography>

                    <Button onClick={() => logout()}>logout</Button>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
import React from 'react';
import {Route, Routes} from "react-router-dom";
import LoginView from "../views/login/LoginView";
import Dashboard from "../views/dashboard/components/Dashboard";
import {Container, Grid} from "@mui/material";

export const LinkToDashboardView = () => "/dashboard";
export const LinkToLoginView = () => "//";
export const LinkToStoreView = (id: string) => "/store/" + id;

const MainRoutes = () => {

    return (
        <Grid sx={{marginLeft: {xs: "0px", md: "250px"}, marginTop: "70px"}}>
            <Routes>
                <Route path={LinkToLoginView()} element={<LoginView/>}/>
                <Route path={LinkToDashboardView()} element={<Dashboard/>}/>
            </Routes>
        </Grid>
    );
};

export default MainRoutes;
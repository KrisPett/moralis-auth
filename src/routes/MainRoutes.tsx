import React from 'react';
import {Route, Routes} from "react-router-dom";
import LoginView from "../views/login/LoginView";
import Dashboard from "../views/dashboard/components/Dashboard";
import {Container, Grid} from "@mui/material";
import ProfileView from "../views/profile/ProfileView";
import DashboardView from "../views/dashboard/DashboardView";

export const LinkToDashboardView = () => "/";
export const LinkToLoginView = () => "//";
export const LinkToStoreView = (id: string) => "/store/" + id;
export const LinkToProfileView = () => "/profile/";

const MainRoutes = () => {

    return (
        <Grid sx={{marginLeft: {xs: "0px", md: "250px"}, marginTop: "70px"}}>
            <Routes>
                <Route path={LinkToLoginView()} element={<LoginView/>}/>
                <Route path={LinkToDashboardView()} element={<DashboardView/>}/>
                <Route path={LinkToProfileView()} element={<ProfileView/>}/>
            </Routes>
        </Grid>
    );
};

export default MainRoutes;
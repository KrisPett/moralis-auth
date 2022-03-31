import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Grid} from "@mui/material";
import ProfileView from "../views/profile/ProfileView";
import DashboardView from "../views/dashboard/DashboardView";

export const LinkToDashboardView = () => "/";
export const LinkToProfileView = () => "/profile/";

const MainRoutes = () => {
    return (
        <Grid sx={{
            marginLeft: {xs: "0px", md: "250px"},
            marginTop: 10,
            minHeight: "90vh"
        }}>
            <Routes>
                <Route path={LinkToDashboardView()} element={<DashboardView/>}/>
                <Route path={LinkToProfileView()} element={<ProfileView/>}/>
            </Routes>
        </Grid>
    );
};

export default MainRoutes;
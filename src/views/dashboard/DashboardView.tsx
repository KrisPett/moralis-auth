import React from 'react';
import Dashboard from "./components/Dashboard";
import {DashboardViewProvider} from "./DashboardViewContext";
import Page from "../../root/components/Page";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Typography} from "@mui/material";

const DashboardView = () => {

    return (
        <Page title={"Dashboard | ChainQT3"}>
            <DashboardViewProvider>
                <Dashboard/>
            </DashboardViewProvider>
        </Page>
    )
};

export default DashboardView;
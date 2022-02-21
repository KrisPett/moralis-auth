import React from 'react';
import Dashboard from "./components/Dashboard";
import {DashboardViewProvider} from "./DashboardViewContext";

const DashboardView = () => {
    return (
        <DashboardViewProvider>
            <Dashboard/>
        </DashboardViewProvider>
    );
};

export default DashboardView;
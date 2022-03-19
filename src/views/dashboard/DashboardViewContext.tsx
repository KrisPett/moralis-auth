import React, {createContext, useEffect, useState} from 'react';
import {CircularProgress} from "@mui/material";
import {RootModel} from "../../root/RootModel";

export const DashboardViewContext = createContext<RootModel | undefined>(undefined);

type Props = {
    children: JSX.Element,
};

export const DashboardViewProvider = ({children}: Props) => {
    const [dashboardViewModel, setDashboardViewModel] = useState<RootModel>()

    if (!dashboardViewModel) return <CircularProgress/>

    return (
        <DashboardViewContext.Provider value={dashboardViewModel}>
            {children}
        </DashboardViewContext.Provider>
    )
}

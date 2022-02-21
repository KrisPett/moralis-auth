import React, {createContext, useEffect, useState} from 'react';
import {CircularProgress} from "@mui/material";
import {RootModel} from "../../root/RootModel";
import RootViewMock from "../../trash/RootViewMock";

export const DashboardViewContext = createContext<RootModel | undefined>(undefined);

type Props = {
    children: JSX.Element,
};

export const DashboardViewProvider = ({children}: Props) => {
    // @ts-ignore
    const [dashboardViewModel, setDashboardViewModel] = useState<RootModel>()

    // @ts-ignore
    useEffect(() => setDashboardViewModel(RootViewMock), [])

    if (!dashboardViewModel) return <CircularProgress/>

    return (
        <DashboardViewContext.Provider value={dashboardViewModel}>
            {children}
        </DashboardViewContext.Provider>
    )
}

import React, {createContext, useEffect, useState} from 'react';
import {CircularProgress} from "@mui/material";
import {Messages, NotifyMessages, RootModel, SideMenuContent, SubContent, Todo} from "../../root/RootModel";

export const DashboardViewContext = createContext<RootModel | undefined>(undefined);

type Props = {
    children: JSX.Element,
};

export const DashboardViewProvider = ({children}: Props) => {
    const [dashboardViewModel, setDashboardViewModel] = useState<RootModel>()

    useEffect(() => {
        const tmpArray = {
            name: "",
            sideMenuContent: [{id: "string", title: "string", subContent: [{id: "string", title: "string",}]}],
            messages: [{id: "string", title: "string", content: "string"}],
            notifyMessages: [{id: "string", date: "string", time: "string", title: "string", description: "string", author: "string"}],
            todo: [{id: 1, title: "string", checked: false}]
        }
        setDashboardViewModel(tmpArray)
    }, [])

    if (!dashboardViewModel) return null

    return (
        <DashboardViewContext.Provider value={dashboardViewModel}>
            {children}
        </DashboardViewContext.Provider>
    )
}

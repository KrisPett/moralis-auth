import React, {createContext, useEffect, useState} from 'react';
import {CircularProgress} from "@mui/material";
import {RootModel} from "./RootModel";
import RootViewMock from "../trash/RootViewMock";

export const RootViewContext = createContext<RootModel | undefined>(undefined);

type Props = {
    children: JSX.Element,
};

export const RootViewProvider = ({children}: Props) => {
    // @ts-ignore
    const [rootData, setRootData] = useState<RootModel>()

    // @ts-ignore
    useEffect(() => setRootData(RootViewMock), [])

    if (!rootData) return <CircularProgress/>

    return (
        <RootViewContext.Provider value={rootData}>
            {children}
        </RootViewContext.Provider>
    )
}
